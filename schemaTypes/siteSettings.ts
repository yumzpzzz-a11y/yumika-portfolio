import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'サイト設定',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'topImage',
      title: 'TOPページ ヒーロー画像',
      type: 'image',
      options: {hotspot: true},
      description: 'TOPページ全画面背景に表示される画像（推奨: 2560×1440px 16:9）',
    }),
    defineField({
      name: 'aboutImage',
      title: 'Aboutページ ヒーロー画像',
      type: 'image',
      options: {hotspot: true},
      description: 'Aboutページ上部に表示される画像（推奨: 2560×1080px 21:9）',
    }),
    defineField({
      name: 'demoreelUrl',
      title: 'Demoreel YouTube URL',
      type: 'url',
      description: 'パスワード認証済みの人だけ視聴できます（例: https://www.youtube.com/watch?v=XXXXXXXXX）',
    }),
    defineField({
      name: 'demoreelColor',
      title: 'Demoreel ロックカードの背景色',
      type: 'string',
      options: {
        list: [
          { title: '● Blue  #0528F2', value: '#0528F2' },
          { title: '● Yellow  #FFF636', value: '#FFF636' },
          { title: '● Pink  #FF12B0', value: '#FF12B0' },
        ],
        layout: 'radio',
      },
    }),
  ],
})
