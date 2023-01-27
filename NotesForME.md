# How to use imports with Babel
https://www.freecodecamp.org/news/setup-babel-in-nodejs/

make .babelrc

make sure that in package.json that "type": "commonjs" is set rather than the below type

also set the script tags, since I have src/Main.js and src/modules/LinkedLists.js and src/modules/Node.js I had to use 2 babel commands
to make sure the dist folder worked how I wanted

run by using "npm run start"


# How to use modules with just node
The imported modules need to have the extension of .mjs

$ npm -init -y

in package.json use "type": "module"

make sure the file that you are running in mode has a file type .js

Node.mjs imports into LinkedList.mjs that imports into Main.js, then Main.js is run with ```$ node Main.js```