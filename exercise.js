// console.log(Number(process.argv[2]));

//     var total = 0;
//     for(var i = 2; i < process.argv.length; i++){

//          total += +process.argv[i];
//     }
// console.log(total);

// fs.readFileSync('/nodeExercise.js/exercise.js');
// var fs = require('fs');

// var filename = process.argv[2];

// file = fs.readFileSync(filename);

// contents = file.toString();

// console.log(contents.split('\n').length - 1);

// var fs = require('fs');

// var filename = process.argv[2];

// file = fs.readFile(filename, function(err, data) {
//   console.log(data.toString().split('\n').length - 1);
// });



  // var fs = require('fs');
  //   var path = require('path');

  //   fs.readdir(process.argv[2], function (err, list) {
  //     list.forEach(function (file) {
  //       if (path.extname(file) === '.' + process.argv[3])
  //         console.log(file);
  //     });
  //   });

var fs = require('fs');
var http = require('http');

var filename = process.argv[3];

server = http.createServer(function(request, response) {
  fs.createReadStream(filename).pipe(response);
});
server.listen(process.argv[2]);

