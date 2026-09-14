import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { locales, defaultLocale, localePrefix } from '@/lib/i18n';

const pages = ['', '/privacy', '/terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${siteUrl}${localePrefix(locale)}${page}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          ...Object.fromEntries(
            locales.map((l) => [l, `${siteUrl}${localePrefix(l)}${page}`])
          ),
          'x-default': `${siteUrl}${localePrefix(defaultLocale)}${page}`,
        },
      },
    }))
  );
}
