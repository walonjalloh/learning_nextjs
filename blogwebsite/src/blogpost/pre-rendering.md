---
title: 'Two Form of Pre-rendering'
date: '2023-03-14'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page

- **Static Generation** is the pre-rendering method that generate the html at **build time**. The pre-rendered HTML is then _reused_ on each request
- **Server-side Rendering** is the pre-rendering method that generates the html on **each request**.

Importantly, Next.js let you **chooses** which pre-rendering form to use for each page. You can create a "hybrid". Next.js app by using Static Generation for most pages and using Server-side Rendering for others.