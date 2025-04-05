commands to create a React application using Webpack and Babel from scratch

 1. Create Project Folder
    : mkdir my-react-app && cd my-react-app
 2. Initialize Project
    : npm init -y
3. Install React and ReactDOM
   : npm install react react-dom
4. Install Webpack and Webpack Dev Server
   : npm install --save-dev webpack webpack-cli webpack-dev-server
5. Install Babel and Presets
   : npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
6. Install HTML Webpack Plugin (to auto-generate index.html):
   npm install --save-dev html-webpack-plugin
7. Install CSS Loader and Style Loader:
  npm install --save-dev css-loader style-loader
9. Create Folder Structure:
  mkdir src public
10. for mac/linux/unix
touch src/index.js src/App.jsx 
public/index.html webpack.config.js .babelrc
11. for windows
  echo . > src\index.js
 echo. > src\App.jsx
 echo. >public\index.html
 echo. > webpack.config.js
 echo. > .babelrc
