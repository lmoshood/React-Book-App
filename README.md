# MyReads Project

A Udacity React Developer Nanodegree 1st Project

## Project Overview

In the MyReads project, I had created a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project is done React to build the application and provides an API server and client library.

## Project Demo

[MyReads: A Book Landing App](https://bookapp-react-project.netlify.app/)

## Project File Structure

```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    ├── components # The app components
    │    ├── Books.js
    │    ├──  Shelf.js
    │    └── pages # contain search and main page of the app
    │        ├── MainPage.js
    │        └──SearchPage.js
    │ 
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## How To Run / Install

- `npm install` or `yarn install` to install all project dependencies
- `npm start` or `yarn start` to start development server
- server will be running on `localhost:3000` on your local machine.

## Backend Server

- This project is done using BookAPI backend server which is provied by Udacity to simplify the development process.
- For more info about the [`BooksAPI.js`](src/BooksAPI.js) provided for development please refer to the [react nanodegree starter project](https://github.com/udacity/reactnd-project-myreads-starter).

## App Functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

## How To Search A Book

For searching books, only some specific words are allowed. [Here](SEARCH_TERMS.md) is where you can find an exhaustive list of these words.

This project was bootstrapped with [`Create React App`](https://github.com/facebookincubator/create-react-app) and integrated with some of the materials provided by the [`react nanodegree starter project`](https://github.com/udacity/reactnd-project-myreads-starter).
