import axios from "axios";

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  updated_at: string;
  languages_url: string;
  languages: string[]; // List of languages
  image_url?: string; // Optional property for the image URL
}

export const fetchGitHubRepos = async (): Promise<Repo[]> => {
  try {
    const url = "https://api.github.com/users/DemiInfinity/repos";
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN; // Use an environment variable for the token

    if (!token) {
      throw new Error(
        "GitHub token is missing. Please set GITHUB_TOKEN in your environment variables."
      );
    }

    const response = await axios.get<Repo[]>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    const repos = response.data;

    // Fetch language data and check for the existence of repo-image.png
    const reposWithDetails = await Promise.all(
      repos.map(async (repo) => {
        try {
          // Fetch languages
          const languagesResponse = await axios.get(repo.languages_url, {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/vnd.github.v3+json",
            },
          });
          const languages = Object.keys(languagesResponse.data);

          // Check for repo-image.png
          try {
            await axios.get(
              `https://api.github.com/repos/DemiInfinity/${repo.name}/contents/repo-image.png`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  Accept: "application/vnd.github.v3+json",
                },
              }
            );
            repo.image_url = `https://raw.githubusercontent.com/DemiInfinity/${repo.name}/main/repo-image.png`;
          } catch (error) {
            // If the image doesn't exist, do nothing
          }

          return {
            ...repo,
            languages,
          };
        } catch (error) {
          console.error(`Error processing repository ${repo.name}`);
          return { ...repo, languages: [] };
        }
      })
    );

    return reposWithDetails;
  } catch (error) {
    console.error("Error fetching GitHub repos", error);
    return [];
  }
};
