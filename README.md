# hw-09-nodeJS

## Description

This week's homework was to design a Node.js application which would ask the user questions about their application, then take the input and use it to generate a README markdown. The main technology used in this homework is Node.js iteself, and its packages. We used one native node package, fs, which is used to write and read from files. We also installed a node package using Node Package Manager (or npm), called inquirer, which allowed us to prompt users. Finally, we had to create our own node package using the module.exports function.

Using a Node package requires that you create a variable and use the "require" method to link it to the main js file. This is not dissimilar to how we would link style sheets or javascript files to HTML pages to allow their functionality. Once the variable is created, you can call it to access the returned methods of the package. Here is an example of the declarations creating the variables using the require method:

![a picture of variables being declared to require node packages](/images/requires.JPG)

## Usage

 To use this application, one must first use their terminal to install the inquirer node package. Since this is required per our package.json file, you can do this by simply using the command "npm install" while in a terminal accessing the main directory. Once installed, you can run the application by using ther command "node index.js".

 You will then be presented with a series of prompts related to your application and the README you wish to create. Once the user has successfully finished the prompts, the file is created and you receive a message saying it is successful, or an error code as to why it wasn't successful. Here is a gif of the application being run with simple test answers:

 ![a gif of the application being run](/images/runningapp.gif)

 And here is what the README generated by the answers in this run would look like:

 ![an image of a read me which was created using the application](/images/testsample.JPG)