'use strict';
var http = require('http-request');

function imgLoad(url) {
  return new Promise(function(resolve, reject) {
    http.get(url, 'image.jpg', function(err, res) {
      if(err) {
        reject(err);
      } else {
        resolve(res.file);
      }
      // console.log(res.code, res.headers, res.buffer.toString());
    });
  });
};
imgLoad('https://wallpaperscraft.com/image/munich_city_skyline_59206_2560x1024.jpg').then(function(data) {
  console.log('Data: %s', data);
}).catch(function(data) {
  console.log('Error: %s', data);
});
