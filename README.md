# TRAIN LINE TECHNICAL TEST

I used REACT.JS to build this small ui.


## Pre-requisites


1. Install [nodejs](http://nodejs.org/)
2. Install [npmjs](https://www.npmjs.com/): `npm install -g npm` to upgrade `npm` to _at least_ 2.x.x (type `npm -v` to get your current version)
    - If you have problem upgrading your `npm` version, it may have to do with how Windows handle PATH environment variable order.
3. Install [bower](http://bower.io/): `npm install -g bower`
4. Install [gulpjs](http://gulpjs.com/): `npm install -g gulp`


## Installation
After downloading the app and place it in a folder

get node_modules
```bash
npm install 
```

## Project structure

Here's the proposed directory structure for a `koco` project.

    |-- app
        |-- assets
            |-- css
                |-- main.css
            |-- images
                |-- train.png
            |-- sass
                |-- _reset.scss
                |-- main.scss
        |-- data
            |-- ldb.json
        |-- lib
            |-- components
                |-- scheduleBottom-react.js
                |-- scheduleCallingPoint-react.js
                |-- scheduleCallingPoints-react.js
                |-- scheduleHeader-react.js
                |-- schedule-react.js
                |-- scheduleTrainIcon-react.js
            |-- stores
                    |-- data.js
            |-- jquery.min.js
            |-- react.js
            |-- react-dom.js
            |-- eventEmitter.min.js
            |-- app.js
        |-- script
             |-- components
                |-- scheduleBottom-react.js
                |-- scheduleCallingPoint-react.js
                |-- scheduleCallingPoints-react.js
                |-- scheduleHeader-react.js
                |-- schedule-react.js
                |-- scheduleTrainIcon-react.js
            |-- stores
                    |-- data.js
            |-- app.js
            |-- eventEmitter.js
        |-- index.html
    |-- node_modules
    |-- server
        |-- app.js
    |-- src
        |-- mockup.png        
    |-- gulpfile.js
    |-- package.json
    |-- bower.json
    |-- README.md

## Building the project

```bash
gulp
```

## JSHINT and Build Css

```bash
gulp build
```

