# Space Apps Pasadena Website

Website for NASA SpaceApps in Pasadena

---

## Steps for collaborators

Note: Assume this you have Node.js and npm installed locally.

### 1) You’ll need the material components installed:

```
npm i material-components-web
```

### 2) You’ll need all of these Node dependencies:

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

You can install all of them by running this command:

```
npm install --save-dev webpack webpack-cli webpack-dev-server css-loader sass-loader sass extract-loader file-loader autoprefixer postcss-loader @babel/core babel-loader @babel/preset-env @material/ripple
```

### 3) Working on things? View the HTML in browser

Note: The server needs to continue running in your terminal. <br>
Run `npm start` and open http://localhost:8080. You should see the website. Refresh page for updates.

### 4) Done?

Close the server. <br>
`ctrl + c` in your terminal.

### 5) Made something cool?

Run `npm run build` before your commit to git. 
