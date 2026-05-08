import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'work',
  title: '作品',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'タイトル',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'カテゴリ（例：3D CG · Installation）',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: '年',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'ロール',
      type: 'string',
    }),
    defineField({
      name: 'tools',
      title: '使用ツール',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: '説明文',
      type: 'text',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL（任意）',
      type: 'url',
      description: 'YouTubeの動画URLを貼り付けてください（例: https://www.youtube.com/watch?v=XXXXXXXXX）',
    }),
    defineField({
      name: 'isNda',
      title: 'Confidential（非公開作品）',
      type: 'boolean',
    }),
    defineField({
      name: 'ndaColor',
      title: 'サムネイル背景色（Confidential作品のみ）',
      type: 'string',
      hidden: ({document}) => !document?.isNda,
      options: {
        list: [
          { title: '● Blue  #0528F2', value: '#0528F2' },
          { title: '● Yellow  #FFF636', value: '#FFF636' },
          { title: '● Pink  #FF12B0', value: '#FF12B0' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'order',
      title: '表示順',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'サムネイル画像',
      type: 'image',
      options: {hotspot: true},
      description: 'Confidential作品の場合はパスワード認証後に表示されます',
    }),
    defineField({
      name: 'mainImage',
      title: 'メイン画像（詳細ページ上部・大きい1枚）',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'galleryImages',
      title: 'ギャラリー画像（詳細ページ下部・最大4枚）',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
  ],
})
