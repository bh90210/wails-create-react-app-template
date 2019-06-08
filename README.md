# Create React App v3 template for Wails
Create new [Wails](https://wails.app/) projects using React JS. For more information on Create React App please check the [official documentation](https://facebook.github.io/create-react-app/docs/getting-started). 

## installation

download (or clone) the repository and copy the `react-basic` folder inside wails templates directory `$GOPATH/src/github.com/wailsapp/wails/cmd/templates`

```
cd $GOPATH/src/github.com/wailsapp/wails/cmd/templates
git clone https://github.com/bh90210/wails-create-react-app.git
cp -R wails-create-react-app/react-basic .
rm -R wails-create-react-app
```

## initialise a project 

run `wails init` from your terminal and select option `React JS`
```
$ wails init
Wails v0.15.0 - Initialising project

The name of the project (My Project): MyProject        
Project Name: MyProject
The output binary name (myproject): 
Output binary Name: myproject
Project directory name (myproject): 
Project Directory: myproject
Please select a template:
  1: React JS - A Create React App v3 template
  2: Vue2/Webpack Basic - A basic Vue2/WebPack4 template
  3: Vuetify Basic - Vuetify + Webpack
Please choose an option [1]: 
```

## usage 

### serve the project

first run command `wails serve` in the project directory

then `cd frontend` and `yarn run start` to serve the front-end

### Js

wip
