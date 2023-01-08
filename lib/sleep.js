

exports.sleep = function (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// const db = require('./database.js');
// exports.wrap_db = function (query,input) {
//     return new Promise((resolve, reject) => {
//       db.query(query, input,(error, result) => {
//         if (error) {
//           reject(error);
//         }
//         resolve(result);
//       });
//     });
// }

exports.wrap = function () {
  return new Promise((resolve, reject) => {
      try {
        return resolve;
      } catch (error) {
        return reject(error);
      }
    });  
  }
  