// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import sitemap from '@astrojs/sitemap'
import rehypeFigure from 'rehype-figure'
import starlightImageZoom from 'starlight-image-zoom'
import remarkHeadingId from 'remark-heading-id'
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightLinksValidator from 'starlight-links-validator'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  site: 'https://salonkarte.hotaka-g.jp/',
  // プリフェッチ設定を有効化
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport', // 画面内に入ったら読み込み開始
  },
  image: {
    breakpoints: [1000, 2000],
  },
  integrations: [
    starlight({
      title: 'サロンカルテ',
      // ... その他の設定
      favicon: '/images/favicon.svg',
      head: [],

      components: {
        // Head: './src/components/CustomHeader.astro',
        // Footer: './src/components/CustomFooter.astro',
        // Banner: './src/components/LegacyNotice.astro',
        // Pagination: './src/components/CustomPagination.astro',
        // SiteTitle: './src/components/CustomSiteTitle.astro',
      },
      customCss: [
        './src/styles/main.scss', // ここにSCSSファイルを指定
      ],
      plugins: [
        starlightLinksValidator(),
        starlightImageZoom(), // 2. プラグインを追加
        starlightSidebarTopics([
          {
            label: 'お問い合わせ',
            icon: 'phone',
            link: 'docs/system/inquery',
            items: [],
          },
          {
            label: '操作ガイド',
            link: 'docs/main/quickstart',
            icon: 'document',

            items: [
              {
                label: 'サロンカルテ操作ガイド',
                items: [
                  //
                  { slug: 'docs/main/quickstart' },
                  { slug: 'docs/main/account' },
                  { slug: 'docs/main/customer' },
                  { slug: 'docs/main/searchCustomer' },
                  { slug: 'docs/main/items' },
                  { slug: 'docs/main/create' },
                  { slug: 'docs/main/viewKarte' },
                ],
              },
              {
                label: 'レジシステム',
                items: [
                  //
                  { slug: 'docs/pos/about' },
                ],
              },
              {
                label: 'お客様アプリ',
                items: [
                  //
                  { slug: 'docs/okyakusama/about' },
                  { slug: 'docs/okyakusama/guide' },
                ],
              },
              {
                label: 'その他',
                items: [
                  //
                  { slug: 'docs/other/tablesettings' },
                  { slug: 'docs/other/faq' },
                ],
              },
              {
                label: 'システム概要',
                items: [
                  //
                  { slug: 'docs/system/hard' },
                  { slug: 'docs/system/price' },
                  { slug: 'docs/system/security' },
                  { slug: 'docs/system/agree' },
                  { slug: 'docs/system/privacy' },
                  { slug: 'docs/system/tokutei' },
                  { slug: 'docs/system/credit' },
                  { slug: 'docs/system/releasenote' },
                  { slug: 'docs/system/inquery' },
                ],
              },
            ],
          },
        ]),
      ],
      locales: {
        root: {
          label: 'Japanese',
          lang: 'ja',
        },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/sndbox-llc/hugo_taskmanh',
        },
      ],
    }),
    sitemap(),
  ],
  markdown: {
    // ここに remarkPlugins を追加
    remarkPlugins: [remarkHeadingId],
    rehypePlugins: [[rehypeFigure, { className: 'custom-figure' }]],
  },
})
