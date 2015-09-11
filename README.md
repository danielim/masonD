#masonD

#status: [Working]
## Ghost Theming Package
## Modified for my personal ghost theme.
from http://webdesign.tutsplus.com/series/building-a-ghost-theme-from-scratch--webdesign-16179

### Documentation

## GETTING STARTED

#### Prerequisites

* Node.js & NPM
* Bower

#### Install dependancies

1. From a console / terminal, cd to the root folder of the project
2. Run `npm install`
3. Run `bower install`
4. In Gruntfile.js set value `ghost_theme_name` 
I placed the ghost theme within the directory for easier github maintenance.
5. In masonD/assets/js/config.js you can find disqus variables, edit shortname and identifier.


#### Terminal commands

* Initiate watch: `grunt watch`.
* Compile less: `grunt less`
* Uglify js: `grunt uglify`
* Combine and minify css: `grunt cssmin`
* Copy to ghost directory: `grunt copy`

