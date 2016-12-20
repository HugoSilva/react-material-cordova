[![Build Status](https://travis-ci.org/HugoSilva/react-material-phonegap.svg?branch=dev)](https://travis-ci.org/HugoSilva/react-material-phonegap)

## react-material-phonegap

A react template for quick prototyping webapps, with support for material design and build using phonegap. Some of the features available in project are as follows:

**Babel** | **ES6** | **ESLint** | **Material-ui** | **React** | **SASS** | **PhoneGap** | **Webpack**
## Getting Started

```shell
$ git clone -o react-material-phonegap https://github.com/HugoSilva/react-material-phonegap.git [projectfolder]
$ cd [projectfolder]
$ npm install -g webpack
$ npm install -g webpack-dev-server
$ npm install
```
## Usage

#### Access app
1. Run `npm start`, this will create a local web server.
2. In your browser go to `http://localhost:8080`.

#### Build & Deployment
1. In the `gulpfile.js` you should replace AppId and the APItoken, the information is available in your phonegap project.
2. Run `npm run build`, this will run webpack and create the final files in the `www` folder.
3. Run `gulp build` to start the phonegap build, which uses the webpack files.
4. Access the your phonegap project to see the final build.

## Motivation

After working with react for some time I wanted to have a simple create webapp projects, for this I need to integrate cordova to allow me to deploy to various systems, as a personal touch I'm also adding support for material design since a think it works really good for most projects. It is a personal project to solve one need in my work flow in a way that I feel more comfortable with, so please have that in mind if you do not like it.

## License

This project is licensed under the MIT license, Copyright (c) 2016 Hugo Filipe Silva.

---
Made by Hugo Filipe Silva ([@hugoflsilva](https://twitter.com/hugoflsilva))
