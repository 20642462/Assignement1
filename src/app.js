// ## app.js ##
//
// This is where we set up our web application using Express. We create the
// app and set up routes which will respond to requests from the client's
// web browser.

const path = require('path');
const express = require('express');

// Create a new Express app
const app = express();

// Serve up our static assets from 'dist' (this includes our client-side
// bundle of JavaScript). These assets are referred to in the HTML using
// <link> and <script> tags.
app.use('/assets', express.static(path.resolve(__dirname, '..', 'dist')));

// Set up the index route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/game/tictactoe_ver2.html');
});


// Export the Express app
module.exports = app;
