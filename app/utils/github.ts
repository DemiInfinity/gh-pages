// utils/github.ts
import axios from 'axios';

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
    const response = await axios.get<Repo[]>('https://api.github.com/users/DemiInfinity/repos', {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
      }
    });
    const repos = response.data;

    // Fetch language data and check for the existence of repo-image.png
    const reposWithDetails = await Promise.all(
      repos.map(async (repo) => {
        // Fetch languages
        const languagesResponse = await axios.get(repo.languages_url);
        const languages = Object.keys(languagesResponse.data);

        // Check for repo-image.png
        try {
          await axios.get(`https://api.github.com/repos/DemiInfinity/${repo.name}/contents/repo-image.png`);
          repo.image_url = `https://raw.githubusercontent.com/DemiInfinity/${repo.name}/main/repo-image.png`;
        } catch (error) {
          // If the image doesn't exist, do nothing
        }

        return {
          ...repo,
          languages
        };
      })
    );

    return reposWithDetails;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};
