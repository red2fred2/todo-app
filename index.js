const run = require('./app/run-script')

run('./gulpfile.js', function(err) {
    if(err) throw err;
    else {
      run('./app/webserver.js', function(err) {
        console.log(err)
      })
    }
});