import getConfig from 'next/config';

export const getBasePath = (): string => {
  if (typeof window === 'undefined') {
    const { publicRuntimeConfig } = getConfig();
    return publicRuntimeConfig.basePath || '';
  } else {
    return '';
  }
};