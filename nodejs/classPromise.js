'use strict';
var http = require('http-request');
/**
 * Classes
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
class Rest {
  constructor(url) {
      this.url = url;
    }
    // Prototype methodes with Getter and Setter
  set urlx(url) {
    this.url = url;
  }
  get urlx() {
    return this.url;
  }
  getResource() {
    let url = this.url;
    return new Promise(function(resolve, reject) {
      http.get(url, function(err, res) {
        if(err) {
          reject(err);
        } else {
          let getResult = {
            code: res.code,
            headers: res.headers,
            buffer: res.buffer
          };
          resolve(getResult);
        }
      });
    });
  }
}
var apiTest = new Rest('http://jsonplaceholder.typicode.com/posts/1');
apiTest.getResource().then(function(result) {
  let jsonResult = JSON.parse(result.buffer);
  console.log(jsonResult.id);
  return jsonResult.id;
}).then(function(result) {
  apiTest.urlx = 'http://jsonplaceholder.typicode.com/posts/' + result + '/comments';
  return apiTest;
})
.then(function(result){
  return result.getResource();
})
.then(function(result) {
  console.log("buffer");
  console.log(result.buffer.toString());
}).catch(function(err) {
  console.log('Error: %s', err);
});
