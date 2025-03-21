import { APP_URL } from '@/libs/constants/url.constants';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const routes: MetadataRoute.Sitemap = [
		{
			url: APP_URL,
			lastModified: new Date().toISOString(), 
			priority: 1.0
		},
	]

	return routes
}