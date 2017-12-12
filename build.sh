#!/bin/bash
gulp ejs;
browserify scripts/main.js -o rendered/bundle.js
gulp