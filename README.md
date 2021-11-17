# Enviroment

Ruby
  * 3.0.2
Rails
  * 6.1.4.1
Webpacker `requied by Rails 6`
  * 5.4.3
Postcss `required by webpacker 5.4`
  * 7

# Prepare

Create rails project

```bash
rails new rails6_tailwindcss2_webpack -d mysql --skip-spring
```

Scaffold model `Book`

```bash
bin/rails g scaffold book name:string price:integer
```

Create db and table

```bash
bin/rails db:create
```

```bash
bin/rails db:migrate
```
