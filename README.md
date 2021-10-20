<h3>Building a Trello Clone using Laravel and Vue</h3>
This is a demo application showing how to build a simple trello clone using Laravel and Vue. 

<h3>Getting Started</h3>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

<h3>Prerequisites</h3>
<h4>What things you need to install the software.</h4>

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

<h5>After cloning the application, you need to install it's dependencies.</h5>

$ cd trello-clone-vue-laravel
$ composer install
Setup
When you are done with installation, copy the .env.example file to .env
$ cp .env.example .env
Generate the application key
$ php artisan key:generate
Add your database credentials to the necessary env fields

<h3>Migrate the application</h3>

$ php artisan migrate
Seed Database
php artisan db:seed
Install Passport
$ php artisan passport:install
Install node modules
$ npm install
Run the application
$ php artisan serve
