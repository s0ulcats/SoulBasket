import { APP_URL } from '@/libs/constants/url.constants';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const routes: MetadataRoute.Sitemap = [
		{
			url: APP_URL,
			lastModified: new Date().toISOString(), 
			priority: 1.0
		},
		{
			url: APP_URL + `/decors`,
			lastModified: new Date().toISOString(),
			priority: 0.8
		},
		{
			url: APP_URL + `/support`,
			lastModified: new Date().toISOString(),
			priority: 0.7
		}
	]

	return routes
}