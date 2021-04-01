---
title: 'How to Add a Learning Resource'
date: 2021-03-30T20:56:25-06:00
draft: false
author: 'Jorge Acero'
twitter: 'https://twitter.com/imjulianeral'
github: 'https://github.com/imjulianeral'
cover_image: '/img/blog/how-to-add-a-learning-resource/cover.jpg'
description: 'How to add a learning resource'
tags: ['techtalks']
---

Hi! We're so glad you want to contribute to the community by sharing your knowledge in a blog post, you'll see how easy is 💗.

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

After the Hugo installation process you need to clone the Tech Talks page repository to add a new learning resource.

```bash
git clone https://github.com/techntalks/techntalks.github.io.git
```

## Create your branch.

Inside the github repo you can create your branch with your learning resource' name:

```bash
git checkout -b learning/resource-name
```

## Add your learning resource.

To add the learning resource you need to execute the following command:

```bash
hugo new learning-resources/resource-name.md
```

This command will create a file in the directory: `content/learning-resources/resource-name.md`, please open the file.

Then you'll see the following properties (every one is required), the only thing you have to do is to add the image in the directory `static/img/resources/resource-name.png` and update all the properties, when you finished **you must set draft to false, it won't appear in the deploy other way**.

```toml
---
title: "Resource Name"
draft: true
cover_image: /img/resources/title.png
description: "brief summary"
categories: ['category']
link: 'https://resourcewebsite.com'
---
```

## Considerations.

- Please use **[tinypng](https://tinypng.com/)** to reduce the size of your images.
- You can add as many categories as you want (like an array) but you must write one word for each category.
- You must set draft to false, it won't appear other way.

## The End 😂

That's everything you need to publish a a new learning resource. 😎
Hope you enjoy it and see you next time. 😘
