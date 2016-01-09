'use strict';
var http = require('http-request');
var image = {
  load: function() {
    let options = {
      url: 'http://localhost/foo.pdf'
    };
    // The resolver function is called with the ability to resolve or
    // reject the promise
    let promise = new Promise(function(resolve, reject) {
      http.get({
        url: url,
        progress: function(current, total) {
          console.log('Downloaded %d bytes from %d', current, total);
        },
        function(err, res) {
          if (err) {
            reject(err);
            return promise;
          }
          resolve(res.buffer);
          return promise;
        }
      });
    });
    // Adapter pattern
  },
  'get': function(url) {
    return image.load(url);
  }
};
image()
  .get('https://wallpaperscraft.com/image/munich_city_skyline_59206_2560x1024.jpg')
  .then(console.log('Image: %d', data.toString()))
  .catch(console.log('Error: %d', data));
// https://wallpaperscraft.com/image/munich_city_skyline_59206_2560x1024.jpg
