# A Chamonix Maps SPA implemented with React, Redux, React Router, Styled Components...

[![Netlify Status](https://api.netlify.com/api/v1/badges/c00492d7-7ef8-472c-9559-8a57631e8cce/deploy-status)](https://app.netlify.com/sites/chamonix-maps/deploys)

[Live Demo](https://chamonix-maps.netlify.app/)

For styling after a first prototype in plain CSS I decided to adopt Styled Components, which perform very well and allows to customize any single components.
The main page is a grid designed with CSS Grid, the page is responsive, so even on mobile devices is visible.

![Demo](/demo/home.jpg)

For the map path line visualisation I used https://react-leaflet.js.org/ which is an open-source JavaScript library for mobile-friendly interactive map.

Unit tests are present, for them I used Jest + Enzyme.

## Tech notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

## Credits

Used images were retrieved from Unsplash

## 2024 Notes
Master version is keeping the old project structure and legacy dependencies, if you try to migrate it will break the app.
The purpose is to keep the historical react stateful+redux approach of 2019-2020.
