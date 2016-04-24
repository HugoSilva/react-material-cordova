## react-material-cordova

A react template for quick prototyping webapps, with support for material design and build using cordova. Some of the features available in project are as follows:

**Babel** | **ES6** | **ESLint** | **Material-ui** | **React** | **SASS** | **Webpack**
## Getting Started

```shell
$ git clone -o react-material-cordova https://github.com/HugoSilva/react-material-cordova.git [projectfolder]
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
1. Run `npm run build`, this will run webpack and create the final files in the `www` folder.
2. Run `gulp build` to start the cordova build, which uses the webpack files.
2. Access the `apk` folder to see the release files.

## Motivation

After working with react for some time I wanted to have a simple create webapp projects, for this I need to integrate cordova to allow me to deploy to various systems, as a personal touch I'm also adding support for material design since a think it works really good for most projects. It is a personal project to solve one need in my work flow in a way that I feel more comfortable with, so please have that in mind if you do not like it.

## License

This project is licensed under the MIT license, Copyright (c) 2016 Hugo Filipe Silva.

---
Made by Hugo Filipe Silva ([@hugoflsilva](https://twitter.com/hugoflsilva))
