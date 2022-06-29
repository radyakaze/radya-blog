/** @jsx h */

import blog, { ga, h } from 'https://deno.land/x/blog@0.3.3/blog.tsx'

blog({
  title: 'Radya',
  description: 'Catatan Radya',
  avatar: './avatar.webp',
  avatarClass: 'rounded-full',
  author: 'Radya',
  background: '#f9f9f9',
  links: [
    { title: 'Email', url: 'mailto:radya@pm.me' },
    { title: 'GitHub', url: 'https://github.com/radyakaze' },
  ],

  // middlewares: [ga('UA-XXXXXXXX-X')],
})
