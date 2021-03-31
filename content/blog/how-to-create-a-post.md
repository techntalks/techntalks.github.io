---
title: 'How to Create a Post'
date: 2021-03-30T20:55:43-06:00
draft: false
author: 'Jorge Acero'
twitter: 'https://twitter.com/imjulianeral'
github: 'https://github.com/imjulianeral'
cover_image: '/img/blog/how-to-create-a-post/cover.png'
description: "post's brief summary"
tags: ['tutorials']
---

Hi! I'm so glad you want to contribute to the community by sharing your knowledge in a blog post, you'll see how easy is 💗.

## Hugo Installation.

{{< figure src="/img/blog/how-to-create-a-post/hugo-logo.png" alt="Hugo Logo" width="100%" >}}

First you need to install Hugo in your OS, Hugo is the static page generator that we are using, that's why you need to install it.

### Installation process for Arch Linux:

```bash
sudo pacman -Syu hugo
```

### Installation process for Debian & Ubuntu:

```bash
sudo apt-get install hugo
```

### Installation process for Fedora:

```bash
sudo dnf install hugo
```

### Installation process for Windows (Chocolatey):

```bash
choco install hugo -confirm
```

### Installation process for macOS (Homebrew):

```bash
brew install hugo
```

## Clone the github repository.

After the Hugo installation process you need to clone the Tech Talks page repository to add a new post.

```bash
git clone https://github.com/techntalks/techntalks.github.io.git
```

## Create your branch.

Inside the github repo you can create your branch with your post's name:

```bash
git checkout -b blog/post-name
```

## Create your post.

Now you can create the markdown file where you are going to write your post by using the following command:

```bash
hugo new blog/post-name.md
```

A file will be created in the directory: `content/blog/post-name.md`, open the file and you'll see some properties already:

```toml
---
title: "Post Name"
date: 2021-03-30T20:55:43-06:00
draft: true
author: "Your name"
twitter: "https://twitter.com/username"
github: "https://github.com/username"
original_post: "https://blog.yoursite.com/post"
cover_image: '/img/blog/post-name/cover-image.jpg'
description: "post's brief summary"
tags: ['tag']
---
```

You need to fill all the properties, just the `original_post` property is optional, rest is required, to know how to fill these properties you need to understand the concepts behind these properties:

### Author

Your first name and last name.

### Draft.

If `true` indicates the post is not completed and won't appear on the production build. **Always remember to change the draft property to false when you complete your post, it won't appear other way.**

### Twitter

Your twitter account.

### Github

Your github account.

### Original Post (Optional)

If you already published the post then you can add the link of your blog post.

### Cover Image

The thumbnail of the post, recommended size: **1200x620 px**.
You can save your cover image in the directory: `static/img/blog/post-name/cover.png`. Actually there you can put all the images that you need for your post.

### Description

A brief summary of your post

### Tags

You can add some tags to categorize your post, please verify which tags are already in the platform and the new tags please write them in lowercase if it's an acronym then write it in uppercase and also the tags only can be one word.

## Writing the post.

For writing the post the only knowledge you need is the **[markdown syntax](https://www.markdownguide.org/basic-syntax/)** But there are some optimizations for Hugo that you can write, if you are interested, you can study the shortcodes concept in the **[documentation](https://www.markdownguide.org/basic-syntax/)**.

Now, to see how your post is looking while you're writing it, you have to run de following command:

```bash
hugo serve -D
```

This will open a port on localhost to see the page. The `-D` flag means that it will render the posts that have the draft property to true, also **always remember to change the draft property to false when you complete your post, it won't appear other way**

Finally you have to run:

```bash
hugo
```

To generate the production build if everything is all right and the terminal does not show any errors then you can upload your changes and make a pull request.

## The End 😂

That's everything you need to publish a blog post. 😎
Hope you enjoy it and see you next time. 😘
