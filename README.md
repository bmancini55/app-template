# App

The is a baseline application using node, bower, backbone, and bootstrap.

## Developers

### Getting Started
To contribute to development you will need to do the following configurations:


Install the required NPM packages:
```
npm install
```

Install `bower` client side package manager to the global location:
``` 
npm install -g bower
```

Install the client dependencies:
```
bower install
```
Note: this project is configured via the `.bowerrc` file to install client depenendencies 
to the `client/vendors` path.


Install `grunt` task runner to the global location
 ```
 npm install -g grunt-cli
 ```

 Once installed you will need to run the grunt build to create the client-side code.

### Grunt Tasks

The following grunt tasks have been configured:

`grunt lint` will lint your code

`grunt verify` will run code quality tests such as linting and unit tests

`grunt build` will build the code for use

`grunt watch` will monitor code and automatically rebuild when there are changes

### Coding Standards

Please verify your code quality by running lint `grunt verify`. Fix all lint and unit test errors before committing code.

Code formatting uses 4 spaces. Tabs are not used.







