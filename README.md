# PL short-news

## Topic Title

- [Description](#desc)
- [Links](#links)
- [API](#API)
- [Features](#features)
- [Built with](#built)
- [User Journey](#Journey)
- [User stories](#stories)
- [File Structure](#file-structure)
- [Installing the project locally](#install)
- [Team members](#team)

## 👉🏻 **Description** <span id='desc'></span>

The story, one day my colleague and I wanted to know the news of the day, but quickly so that I do not go into details, so I was suffering from that, and this is what made us work on this site, which is brief about the news as you can read the title of the news and you can read more details if you want at Visit the official website. You can search for news by selecting the category as shown.
Also, in the beginning, there is a (fake) website log-in for login simulations.

## 👉🏻 **Links** <span id='links'></span>

- [Github link](https://github.com/GSG-G11/PLshort-news)
- [Demo link](https://pl-short-news.herokuapp.com/)

## 👉🏻 **Our website uses an API:** <span id='API'></span>

- This API is to get data about the latest news. Click [here](https://github.com/cyberboysumanjay/Inshorts-News-API) to check it out.

## 👉🏻 **Features** <span id='features'></span>

- Simple UI
- Using APIs
- Pretty design
- Responsive
- Usefully website

## 👉🏻 **Built with** <span id='built'></span>

- HTML → to build the structure of the pages
- CSS → to style the application
- JS|DOM Manipulations → To create interaction between the page and the user
- use APIs.
- node_modules
- eslint → To Use Style Code
- express.js
- fetch & fetch-node

## 👉🏻 **User Journey** <span id='Journey'></span>

- At first, the user enters our site and the login page appears. enters information. If it is wrong, it will be directed to the error page, otherwise, it will go to the latest news page.
- Second, before displaying the data, Loading appears to tell the user that it is fetching data from the database.
- Finally, the user can choose which category of the proposed to display the data in.

## 👉🏻 **User stories** <span id='stories'></span>

- _As a user_, I should be able to choose a category and display news about it.
- _As a user_, I will get information about the category of all.

## 👉🏻 **File Structure** <span id='file-structure'></span>

```
  ~
  ┡═══╦═> public
  │   ║
  │   ╠═══╦═> css
  │   ║   ╠──=> error.css
  │   ║   ╠──=> login.css
  │   ║   ╚──=> style.html
  │   ║
  │   ╠═══╦═> error
  │   ║   ╠──=> 401.html
  │   ║   ╠──=> 404.html
  │   ║   ╚──=> 500.html
  │   ║
  │   ╠═══╦═> img
  │   ║   ╠──=> error-page.gif
  │   ║   ╚──=> favicon.ico
  │   ║
  │   ╠═══╦═> js
  │   ║   ╠──=> dom.js
  │   ║   ╠──=> fetchData.js
  │   ║   ╠──=> function-dom.js
  │   ║   ╚──=> login.js
  │   ║
  │   ╠──=> index.html
  │   ╚──=> news.html
  │
  ┡═══╦═> src
  │   ║
  │   ╠═=═╦═> controller
  │   ║   ╠──=> error.js
  │   ║   ╠──=> error.js
  │   ║   ╚──=> news.js
  │   ║
  │   ╠═══╦═> routes
  │   ║   ╠──=> error.js
  │   ║   ╠──=> index.js
  │   ║   ╚──=> news.js
  │   ║
  │   ╠═══╦═> test
  │   ║   ╚──=> router.test.js
  │   ║
  │   ╠──=> app.js
  │   ╚──=> index.js
  │
  ┡════> .gitignore
  ┡════> .eslintrc.json
  ┡════> package.json
  ╘════> README.md


```

## 👉🏻 **Installing the project locally** <span id='install'></span>

- `git clone https://github.com/GSG-G11/PLshort-news`
- `cd PLshort-news`
- `npm install`
- `code .`

**_`npm start`_** ==> For run Project

## 👉🏻 **Team members** <span id='team'></span>

- [Baraa Awni Farwana](https://github.com/braaAwni)
- [Ahmed Ibrahim Qeshta](https://github.com/AhmedQeshta)
