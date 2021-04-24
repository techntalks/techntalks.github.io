---
title: 'How to Benchmark Your Site'
date: 2021-04-24T13:44:06-05:00
draft: false
author: 'Jorge Acero'
twitter: 'https://twitter.com/imjulianeral'
github: 'https://github.com/imjulianeral'
cover_image: '/img/blog/how-to-benchmark-your-site/cover.jpg'
description: 'How to use lighthouse on your site and its disadvantages'
tags: ['web']
---

## Why you need to perform a benchmark on your site?

To see the performance of your site of course!!!

The benchmarks are the best way for checking your website's performance, that's how you know if you are getting things done in the right way for your users.

## How can I perform a benchmark on my site?

Very easy, you just have to open your website URL in Chrome, right click your website and select `Inspect`, or just press `F12` on your keyboard:

{{< figure src="/img/blog/how-to-benchmark-your-site/inspect.png" alt="Inspect Page Google Chrome" width="100%" height="100%" >}}

It will appear a side menu with many menus, please click on the arrows button and select `Lighthouse`:

{{< figure src="/img/blog/how-to-benchmark-your-site/lh1.png" alt="Open Lighthouse Google Chrome" >}}

You'll see some options like categories, plugins and devices, you can customize this options as you wish and then click on `Generate Report`:

{{< figure src="/img/blog/how-to-benchmark-your-site/lh2.png" alt="Generate Lighthouse Report" >}}

This will generate a report in a few seconds depending of your website:

{{< figure src="/img/blog/how-to-benchmark-your-site/lh3.png" alt="Generating Lighthouse Report" >}}

And finally you'll get the results, the higher the better:

{{< figure src="/img/blog/how-to-benchmark-your-site/lh4.png" alt="Lighthouse Report" >}}

In the bottom you will see which things were evaluated and which of those your site failed:

{{< figure src="/img/blog/how-to-benchmark-your-site/lh5.png" alt="Lighthouse results" >}}

You can fix those by opening the opportunity and clicking on `Learn more`, this will redirect you to a webpage explaining the error and how could you fix it:

{{< figure src="/img/blog/how-to-benchmark-your-site/lh6.png" alt="Lighthouse errors" >}}

## Lighthouse disadvantages:

### It's an emulated test

The problem with a emulated test is that you are not getting the performance scores and feedback from user's behavior, you are getting this from a script which is not interacting with the site as a normal user usually do. You can get the real data from user's behavior by using Google Analytics, the problem with that is that some users have extensions to avoid Google tracking, so it's impossible to get metrics from them.

### It's not impartial

Lighthouse is developed by Google and unfortunately Google is kind of evil nowadays, in this case Lighthouse is going to blame on you if you are using heavy weight libraries, which is ok, but if you are using Google libraries like Angular, Firebase, etc. Which are really heavy, Lighthouse won't say a thing, it's just ok. This is really messed up because they are encouraging you for using their technologies in a not legit way. You can find more about this issue here:

{{< youtube KfU2mPwVE8E >}}

Fortunately, there is always an alternative.

## Vercel Analytics.

{{< figure src="/img/blog/how-to-benchmark-your-site/vercel-analytics.gif" alt="Vercel Analytics" link="https://vercel.com/analytics" target="_blank" rel="noopener noreferrer" >}}

Vercel Analytics it's an alternative for Google Analytics and Lighthouse, it makes it's metrics based on the requests that passed through the frontend to the backend; that's how Vercel avoid the issue with the extensions that blocks tracking.

In order to use it you need to host your site on Vercel, this may look like a disadvantage but Vercel is a really flexible platform, I really encourage you to use it, it's amazing.

For more information you can watch the following video:

{{< youtube 9SVe7TigqVg >}}

## Conclusion.

Benchmarks are the best way to see our website's drawbacks, by working on these weak points our site we can increase the performance and get a better SEO.
