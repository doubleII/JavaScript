
# Rest-Api with express
JavaScript examples Restful Api with node.js and MongoDB <br/>
##### 1. Create npm package.json file 
$ npm init
##### 2. Install npm express
$ npm install express nodemon // npm install <package name> <next package> .... </br> 
change 
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  
  with //!!! double quots !!!
  
  "scripts": {
    "start": "nodemon app.js"
  },
  
// this is a script thas will as helt to execute our server
##### 3. Add app.js file 
...
##### 4. Install mongoose
$ npm install mongoose </br>
link: https://wwww.mongodb.com
create user and connection in mongodb 
##### 5. Install dotenv package. This is a Mask for the password
$ npm install dotenv </br>
Add mongoose package and add the connection. You taka a deprication warning message. Read the message and add the property into mongoose constructor </br>
link: https://mongoosejs.com/docs/deprecations.html // monogoose documentation </br>
create your schema</br>
##### 6. Install body-parser
$ npm install body-parser </br>
##### 7. Allow to across between domains
$ npm install cors
tutorial link: https://www.youtube.com/watch?v=vjf774RKrLc&t=22s&ab_channel=DevEd
