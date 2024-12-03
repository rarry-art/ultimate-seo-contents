export function generateSEOMetadata(title: string, description: string) {
  return {
    title: `${title} | Ultimate SEO Contents`,
    description: description,
  };
}

export function formatSlug(slug: string): string {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

