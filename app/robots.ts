import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-url'

// output: 'export' (静的サイト生成) では、メタデータルートを事前に
// 固定出力させるため force-static の指定が必須。
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
