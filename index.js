const run = require('./run-script')

run('./gulpfile.js', function(err) {
    if(err) throw err;
    else {
      run('./webserver.js', function(err) {
        console.log(err)
      })
    }
});