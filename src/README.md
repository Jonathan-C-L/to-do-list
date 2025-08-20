## npm scripts
"build": starts up the production environment,
"start": starts up the development environment,
"deploy": deploys the code to github pages,
"initialize": installs dev dependencies for images, styling, and html

## dependencies
1. date-fns - npm install date-fns --save

## dev dependencies
1. ESLint
<!-- install eslint first -->
npm init @eslint/config@latest
<!-- to lint the js file -->
npx eslint yourfile.js 
2. Prettier
<!-- install prettier -->
npm install --save-dev --save-exact prettier
<!-- emtpy config file to let tools know Prettier is being used -->
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
<!-- create .prettierugnore file to exclude specified files from formatting -->
node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
<!-- format all files with Prettier -->
npx prettier . --write
<!-- checks files that are already formatted -->
npx prettier . --check

<!-- ignore (only for educational purposes) -->
## npm setup for development
<!-- In Terminal -->
1. npm init -y
2. npm install --save-dev webpack webpack-cli
<!-- ensure files and named and linked properly in the package.json -->
3. npx webpack
<!-- handles html -->
4. npm install --save-dev html-webpack-plugin 
<!-- handles css -->
5. npm install --save-dev style-loader css-loader
<!-- handles images -->
6. npm install --save-dev html-loader
<!-- development server setup -->
7. npm install --save-dev webpack-dev-server
<!-- start server -->
8. npx webpack serve

