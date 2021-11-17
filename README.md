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

```bash
bin/rails s
```

# Tailwind CSS 2

### Installing Tailwind CSS as a PostCSS plugin

PostCSS 7 compatibility build (Rails 6 does not support postcss 8 yet)

```bash
yarn tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

### Prepare for Tailwind CSS

Create `folder` and `tailwind.config.js` under javascript

```bash
cd app/javascript
mkdir stylesheets
cd stylesheets && touch application.scss
```

### Setup Tailwind CSS

Create tailwindcss configuration file

```bash
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
+    require('tailwindcss'),
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
