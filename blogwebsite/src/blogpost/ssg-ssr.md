---
title: 'When to use static generation vs server-side rendering'
date: '2024-03-17'
---

we recommed using **static generation** (with and without data) whenever possible because your page can built once and served by CDN, which makes it much faster than having a server render the page on every request

you can user static generation for many type of pages, including

- Marketing pages
- Blog posts
- E-commerce product listings
- help and documentation

you should ask yourself: "can i pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose static generation.

on thr other hand, static generation is **not** a good idea if you cannot pre-render a page ahead of the user's request. maybe your page updat data, and the page content changes on every request.

in that case, you can use **server-side rendering**. it will be slower bur the pre-rendered will always be up-to-date. or can skip pre-rendering and use-client side javascript to populate data.