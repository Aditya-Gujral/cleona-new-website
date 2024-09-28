// next.config.mjs
import pkg from 'next';
const { images } = pkg;

export default {
  images: {
    domains: ['cdn.sanity.io'], // Add any other domains you are using for images
  },
  async redirects() {
    return [
      {
        source: '/post/:slug',
        destination: '/insights/post/:slug',
        permanent: true,
      },
      {
        source: '/archive',
        destination: '/insights/archive',
        permanent: true,
      },
      {
        source: '/archive',
        destination: '/insights/archive',
        permanent: true,
        has: [
          {
            type: 'query',
            key: 'page',
          },
        ],
      },
      {
        source: '/category/:categoryname',
        destination: '/insights/category/:categoryname',
        permanent: true,
      },
    ];
  },
};

