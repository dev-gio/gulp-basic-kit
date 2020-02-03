# gulp-basic-kit
 Simple use of Gulp in my projects at work

Requirements:   
- Node JS must be installed.   
- Install globally Gulp CLI using `npm i gulp-cli -g`   

Dev Dependencies used 
```
$ npm i gulp --save-dev
$ npm i gulp-clean-css --save-dev
$ npm i gulp-javascript-obfuscator --save-dev
$ npm i gulp-rename --save-dev
$ npm i gulp-concat --save-dev
```

To use (example) - on your terminal:
```
gulp test

gulp minify_css
gulp obfuscate_js
gulp minify_multiple_css
gulp obfuscate_multiple_js
```

Watch changes
```
gulp watch
```

Note:
Update the variable contents based on the directories of javascript and css files.
