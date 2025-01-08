// utils/repoService.ts
import { fetchGitHubRepos, Repo as GitHubRepo } from "./github";
import { fetchBitbucketRepos, BitbucketRepo } from "./bitbucket";

export interface CombinedRepo {
  id: string;
  name: string;
  description: string | null;
  html_url: string;
  updated_at: string;
  languages: string[];
  image_url?: string; // Optional property for the image URL
  source: "github" | "bitbucket"; // Correctly type the source property
}

export const fetchCombinedRepos = async (): Promise<CombinedRepo[]> => {
  const [githubRepos, bitbucketRepos] = await Promise.all([
    fetchGitHubRepos(),
    fetchBitbucketRepos(),
  ]);

  const combinedRepos = [
    ...githubRepos.map((repo: GitHubRepo) => ({
      id: repo.id.toString(),
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      updated_at: repo.updated_at,
      languages: repo.languages,
      image_url: repo.image_url,
      source: "github" as const, // Explicitly type the source as 'github'
    })),
    ...bitbucketRepos.map((repo: BitbucketRepo) => ({
      id: repo.uuid,
      name: repo.name,
      description: repo.description,
      html_url: repo.links.html.href,
      updated_at: repo.updated_on,
      languages: repo.language ? [repo.language] : [],
      image_url: repo.image_url,
      source: "bitbucket" as const, // Explicitly type the source as 'bitbucket'
    })),
  ];

  return combinedRepos;
};
