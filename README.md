# Space Apps Pasadena Website

Website for NASA Space Apps in Pasadena

---
<br>

## Steps for collaborators
Hi! Here are some steps that will help you set up your environment.
Hope you have fun!

Note: This assumes you have Node.js and npm installed locally.

### 1) Clone repo:

```
git clone https://github.com/SheCodes-PCC/spaceapps-pasadena.git
```
<br>

### 2) Navigate to spaceapps-pasadena:

```
cd spaceapps-pasadena
```
<br>

### 3) Install material components:
https://material.io/components?platform=web

You'll need the following material components:
```
npm i material-components-web
```
<br>

### 4) Install project dependencies:

You’ll need all of these Node dependencies:
- webpack: Bundles Sass and JavaScript
- webpack-dev-server: Development server
- sass-loader: Webpack loader to preprocess Sass files
- sass: Sass compiler
- css-loader: Resolves CSS @import and url() paths
- extract-loader: Extracts the CSS into a .css file
- file-loader: Serves the .css file as a public URL
- autoprefixer: Parses CSS and adds vendor prefixes to CSS rules
- postcss-loader: Loader for Webpack used in conjunction with autoprefixer
- @babel/core
- babel-loader: Compiles JavaScript files using babel
- @babel/preset-env: Preset for compiling es2015
  <br>
  https://material.io/develop/web/getting-started

You can install these Node dependencies by running this command:

```
npm install --save-dev webpack webpack-cli webpack-dev-server css-loader sass-loader sass extract-loader file-loader autoprefixer postcss-loader @babel/core babel-loader @babel/preset-env @material/ripple
```
<br>

### 5) Run spaceapps-pasadena:

Note: The server needs to continue running in your terminal.
<br>

Run `npm start` and open http://localhost:8080.
<br>

You should see the website. Refresh the browser page for updates.

<br>

### 6) When you've finished:

Close the server. <br><br>
`ctrl + c` in your terminal.

<br>

### 7) Ready to commit to share your great work:

Run `npm run build` before commit to git.

<br>

---

## Resources:
This can help with pull request.
<br>
Creating a pull request: https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request

This can help see how material code works via examples.
<br>
Material theme Examples: https://glitch.com/~material-theme-builder

