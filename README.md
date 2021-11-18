
# Enviroment

Ruby
  * 3.0.2

Rails
  * 6.1.4.1

Webpacker `requied by Rails 6`
  * 5.4.3

Postcss `required by webpacker 5.4`
  * 7

# Rails 6

### Create rails project

```bash
rails new rails6_tailwindcss2_webpack -d mysql --skip-spring
```

### Scaffold model `Book`

```bash
bin/rails g scaffold book name:string price:integer
```

### Remove scaffolds.scss

```bash
cd app/assets/stylesheets
mv scaffolds.scss scaffolds.scss.bak
```

### Create db and table

```bash
bin/rails db:create
```

```bash
bin/rails db:migrate
```

### Run rails server

Running on local computer

```bash
bin/rails s
```

Running on remote server

```bash
bin/rails s -b 0.0.0.0
```

### Reference

https://github.com/charlietag/rails6_tailwindcss2_webpack/compare/v0.0.0...v0.0.1

# Tailwind CSS 2

### Installing Tailwind CSS as a PostCSS plugin

PostCSS 7 compatibility build (**Rails 6** does not support **PostCSS 8 yet**)

```bash
yarn add tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

### Prepare for Tailwind CSS

Create **folder** to place cutom **SCSS** file, which is used to be compiled by webpack

```bash
cd app/javascript
mkdir stylesheets
cd stylesheets && touch application.scss
```

### Setup Tailwind CSS

Create TailwindCSS configuration file

```bash
cd app/javascript/stylesheets
npx tailwindcss init
```

Setup `tailwind.config.js`

```javascript
// --- Only works for production(NODE_ENV) or works for JIT mode ---
  purge: [
    "./app/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js"
  ],
// --- Only works for production(NODE_ENV) or works for JIT mode ---
```

Setup PostCSS configuration `<rails_app>/postcss.config.js`

```diff
 module.exports = {
   plugins: [
     require('postcss-import'),
+    require('tailwindcss')('./app/javascript/stylesheets/tailwind.config.js'),
     require('postcss-flexbugs-fixes'),
     require('postcss-preset-env')({
       autoprefixer: {
         flexbox: 'no-2009'
       },
       stage: 3
     })
   ]
 }
```

### Reference

https://github.com/charlietag/rails6_tailwindcss2_webpack/compare/v0.0.1...v0.0.2

# Tailwind CSS 2 - Official plugins

### Installing Tailwind CSS official plugins

```bash
yarn add @tailwindcss/typography @tailwindcss/forms @tailwindcss/line-clamp @tailwindcss/aspect-ratio
```

### Setup Taiwind CSS official plugins

Edit `app/javascript/stylesheets/tailwind.config.js`

```javascript
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
```

# Integrating Taiwind CSS 2 with Rails 6

### Import SCSS file into webpack

Edit `app/javascript/packs/application.js`

```diff
  //...
  // append at the bottom
+ import "stylesheets/application"
```

### Import Taiwind CSS

Edit `app/javascript/stylesheets/application.scss`
> https://tailwindcss.com/docs/preflight

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```


### Append header into html layout

Edit `app/views/layouts/application.html.erb`, to make sure `SCSS`, `LESS`, `CSS` configured under `app/javascript/packs/application.js` will be compiled by **webpack**
> https://github.com/rails/webpacker#usage

```diff
        <%= stylesheet_link_tag 'application', media: 'all', 'data-turbolinks-track': 'reload' %>
        <%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
+       <%= stylesheet_pack_tag 'application', media: 'all', 'data-turbolinks-track': 'reload'  %>
      </head>
```

### Tailwind CSS Installation Reference

Installation
* https://webdevchallenges.com/add-tailwind-to-rails
* https://web-crunch.com/posts/how-to-install-tailwind-css-2-using-ruby-on-rails

With **JIT** mode
* https://dev.to/davidteren/getting-started-with-rails-6-1-tailwindcss-jit-webpacker-postcss-8-25g7
* https://tailwindcss.com/docs/just-in-time-mode

Optimizing-for-production
* https://tailwindcss.com/docs/optimizing-for-production

# Configuration Sample

postcss.config.js
* github/

tailwind.config.js
* github/

application.js
* github

application.scss
* github

layouts/application.html.erb
* github

table tag Tailwind CSS way
* github

# Taiwind CSS 2 - Usage

### Prepare for TaiwindCSS compilation

Run rails server and webpack-dev-server

```bash
bin/rails s
```

```bash
bin/webpack-dev-server
```

###  Tailwind CSS Usage Reference

#### Configuration

configuring-variants
> The `variants` section of your `tailwind.config.js` file is where you control which variants should be enabled for each core plugin:
* https://tailwindcss.com/docs/configuring-variants

tailwindcss-group-hover-not-working-on-border-color
* https://stackoverflow.com/questions/63266702/tailwindcss-group-hover-not-working-on-border-color

#### Design
Container
* https://tailwindcss.tw/docs/container

Table
* https://tailwindcss.com/docs/border-collapse

Step by step from scratch
* https://www.honeybadger.io/blog/tailwind-css-rails

#### Tools
Components
* https://tailwindcomponents.com/components

Quick Cheatsheet
* https://tailwindcomponents.com/cheatsheet

TailwindCSS Page Creator
* https://devdojo.com/tails
