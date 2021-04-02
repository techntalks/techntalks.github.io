---
title: 'How To Install Valet Linux From Scratch'
date: 2021-01-23T20:13:25-06:00
draft: false
author: 'Jorge Acero'
twitter: 'https://twitter.com/imjulianeral'
github: 'https://github.com/imjulianeral'
original_post: 'https://blog.imjulian.com/install-valet-linux-on-ubuntu-from-scratch'
cover_image: '/img/blog/first-post/cover.png'
description: 'Valet Linux is a tool which gives you a development environment for php'
tags: ['php', 'linux']
---

In this post, we will set our development environment with PHP, Laravel, MariaDB/MySQL, and Valet Linux; yeah, the exclusive macOS development tool working on Linux ;D.

### Install MariaDB

![mariadb.png](https://media-exp1.licdn.com/dms/image/C5622AQGmaMJX50KD-w/feedshare-shrink_2048_1536/0/1573405553381?e=2159024400&v=beta&t=byFb3KG3UHyNVQygzIJR4BfeA69d8zdoGG2CqTzwODo)

To install MariaDB, open the terminal, and type the following command:

```bash
sudo apt install mariadb-server mariadb-client
```

After the installation concludes, test the following commands in that specific order to check if the installation was successful:

```bash
sudo systemctl stop mariadb.service
sudo systemctl start mariadb.service
sudo systemctl enable mariadb.service
```

After verifying the installation was successful, we need to run the `mysql_secure_installation`, to set MariaDB correctly in our development environment:

```bash
sudo mysql_secure_installation
```

After you execute the command, please answer the following questions:

- Enter current password for root (enter for none): **Just press enter**
- Set root password? [Y/n]: **Y**
- New password: **Write a secure password**
- Re-enter new password: **Repeat the password**
- Remove anonymous users? [Y/n]: **Y**
- Disallow root login remotely? [Y/n]: **Y**
- Remove test database and access to it? [Y/n]: **Y**
- Reload privilege tables now? [Y/n]: **Y**

Restart MariaDB's service:

```bash
sudo systemctl restart mariadb.service
```

Then, access to MariaDB through the terminal:

```bash
sudo mariadb -u root -p
```

Or

```bash
sudo mysql -u root -p
```

**Remember that MariaDB is fully compatible with MySQL ;).**

We need to write the password that we defined in the `mysql_secure_installation` process in the following SQL statement. This also helps to access MariaDB without **sudo** on the terminal:

```SQL
GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' IDENTIFIED BY "your_password";
```

Now exit from MariaDB by pressing: **Ctrl+C** on the terminal.

### Install PHP on Linux

![php.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1609625575852/t9O1pZb5B.png)

This is very straight; forward we only need to run the following command:

```bash
sudo apt install php libapache2-mod-php php-common php-mbstring php-xmlrpc php-soap php-gd php-xml php-mysql php-cli php-mcrypt php-zip php-curl php-sqlite3 php-pgsql
```

And then open **php.ini** file to make some adjustments:

```bash
sudo nano /etc/php/7.X/apache2/php.ini
```

Modify the following variables:

```bash
memory_limit = 256M
upload_max_filesize = 64M
cgi.fix_pathinfo=0
```

We save the changes by pressing `Ctrl+O` and exit with `Ctrl+X`.

### Install Laravel on Linux

![laravel.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1609625439070/v0Vw6xZ_O.png)

We need `composer` installed in our system to do that, we can install it with:

```bash
sudo apt install composer
```

And now install Laravel:

```bash
composer global require laravel/installer
```

Now we need to add Laravel in our $PATH variable, to make "laravel" a recognizable command:

```bash
sudo nano .bashrc
```

If you are using **zsh**:

```bash
sudo nano .zshrc
```

Scroll down to the last line of the file and add the following:

```bash
export PATH="$HOME/.config/composer/vendor/bin:$PATH"
```

We save the changes by pressing `Ctrl+O` and exit with `Ctrl+X`.

And to force our shell to read the changes, execute:

```bash
source .bashrc
```

If you are using **zsh**:

```bash
source .zshrc
```

Now we can create a Laravel app:

```bash
laravel new laravel-app
```

If you want to use Laravel 7, try with the following commands and ensure that the PHP version you installed is PHP 7 and not PHP 8:

```bash
composer create-project laravel/laravel=^7 laravel-app --prefer-dist
```

If it does not work try replacing the **^** with **>**:

```bash
composer create-project laravel/laravel=>7 laravel-app --prefer-dist
```

It should create a Laravel app without problems.

### Install Valet Linux

![valet.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1609624764836/-YNhFCh5e.png)

Finally, execute:

```bash
composer global require cpriego/valet-linux
```

If it throws an error, please execute:

```bash
sudo apt install php-curl
```

Try again and now it should work.

Now execute the installation process:

```bash
valet install
```

This also could throw an error, if that's the case, please force the shell to read the changes as we did before:

```bash
source .bashrc
```

If you are using **zsh**:

```bash
sudo nano .zshrc
```

We need to ensure that we update our $PATH environment variable correctly on the previous steps.

Now `valet` should throw an error about missing dependencies, to solve that we simply run:

```bash
sudo apt-get install network-manager libnss3-tools jq xsel
```

Now it should install valet correctly:

```bash
valet install
```

But if you have another error related with `nginx`, you need to stop the service that is running in the same port as `nginx`, if it's `apache` who is provoking this problem you can simply stop the apache's service:

```bash
sudo systemctl stop apache2.service
```

And try again:

```bash
valet install
```

To verify everything is ok, run:

```bash
ping valet.test
```

And after a few seconds it should say something like this:

```bash
X packets transmited, X received...
```

If that's the case, congrats! you successfully installed Valet Linux!

Now we need to set the directory where we are going to create Laravel or PHP projects:

```bash
cd directory/where/you/are/going/to/work
```

And execute:

```bash
valet park
```

Now create a folder called: `phpinfo`, inside the create a file called `index.php` and in the file, we can write something to check its working:

```php
<?php echo phpinfo();
```

And finally, we write the following URL in our browser:

http://phpinfo.test/index.php

It should display info about PHP without errors.

You can custom the domain if you don't like `.test` with:

```bash
valet domain dev
```

And now to get access you need to change your current URL with the following:
http://phpinfo.dev/index.php

And that's it, hope you enjoy it, if you want to see how to do it in fedora and manjaro, please comment it :D.
