import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: ['en', 'es'],
  },
  bootstrap(_app: StrapiApp) {},
};
