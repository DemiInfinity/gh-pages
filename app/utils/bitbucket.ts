// utils/bitbucket.ts
import axios from 'axios';

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
    const response = await axios.get('https://api.bitbucket.org/2.0/repositories/DemiTaylorCoder');
    const repos = response.data.values;

    // Fetch image data if necessary and check for the existence of repo-image.png
    const reposWithImages = await Promise.all(
      repos.map(async (repo: BitbucketRepo) => {
        // Note: Bitbucket does not provide a direct way to check for files, so we assume no image for simplicity
        return {
          ...repo,
          image_url: null // Assuming no image URL
        };
      })
    );

    return reposWithImages;
  } catch (error) {
    console.error('Error fetching Bitbucket repos:', error);
    return [];
  }
};
