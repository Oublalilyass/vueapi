<h1>Building a Trello Clone using Laravel and Vue</h1>
This is a demo application showing how to build a simple trello clone using Laravel and Vue. 

Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
What things you need to install the software.

Git.
PHP.
Composer.
Laravel CLI.
Laravel Valet (optional).
A webserver like Nginx or Apache.
A Node Package Manager ( npm or yarn ).
Install
Clone the git repository on your computer

$ git clone https://github.com/Oublalilyass/vueapi.git
You can also download the entire repository as a zip file and unpack in on your computer if you do not have git

After cloning the application, you need to install it's dependencies.

$ cd trello-clone-vue-laravel
$ composer install
Setup
When you are done with installation, copy the .env.example file to .env
$ cp .env.example .env
Generate the application key
$ php artisan key:generate
Add your database credentials to the necessary env fields

Migrate the application

$ php artisan migrate
Seed Database
php artisan db:seed
Install Passport
$ php artisan passport:install
Install node modules
$ npm install
Run the application
$ php artisan serve
