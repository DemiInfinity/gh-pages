// utils/bitbucket.ts
import axios from "axios";
import { getBasePath } from "./basePath";

export interface BitbucketRepo {
  uuid: string;
  name: string;
  description: string | null;
  links: {
    html: {
      href: string;
    };
  };
  updated_on: string;
  language: string | null;
  image_url?: string; // Optional property for the image URL
}

export const fetchBitbucketRepos = async (): Promise<BitbucketRepo[]> => {
  try {
    const basePath = getBasePath(); // Gets the base path of the application

    const response = await axios.get(
      "https://api.bitbucket.org/2.0/repositories/DemiTaylorCoder"
    );
    const repos = response.data.values;

    // Assign a local image URL for each repository
    const reposWithImages = repos.map((repo: BitbucketRepo) => ({
      ...repo,
      image_url: `${basePath}/stack-1024.webp`, // Assuming the image is stored in the 'public/images' directory
    }));

    return reposWithImages;
  } catch (error) {
    console.error("Error fetching Bitbucket repos:", error);
    return [];
  }
};
