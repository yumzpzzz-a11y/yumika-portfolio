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
      name: 'isNda',
      title: 'NDA（非公開作品）',
      type: 'boolean',
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
    }),
  ],
})