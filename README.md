React Crash Course 

To Do list Application

This crash course covers: 
	•	Working with components 
	•	States 
	•	Props
	•	Understand React Component Lifecycle
	•	Events and so on.

Notes:
	•	It is a to do list React application.
	•	Components can have state which is an object that determines how that component renders and behaves.
	•	We can also have application level state by using a state manager like Redux or Reacts on context API.
	•	React is class based component which has lifecycle.

Creat React App
	•	CLI tool used for creating React application
	•	Uses Web-pack But needed no configuration
	•	Comes bundled with dev server with hot reload 
	•	npm run build.
Important Notes
- div with id = "root" is your main div and everything goes inside this div.

-app component get put insdie the div id = "root" through src folder.

- index.js is entry point to react.
	•	Starting form the top we importing the library import React from 'react';
	•	Then importing the react DOM import ReactDOM from 'react-dom';
	•	Then importing main app component (parent component) import App from './App';
	•	* This is important to know* ReactDOM.render(<App />, document.getElementById('root')); Here ReactDom is rendering the main App component into that element with ID root (e.g. <div id=“root”></div>).
	•	Everything you you need to use should be imported in index.js

 - We are using global css to start with.

- 2 ways of structuring (note* they both doing same thing).
	•	class App extends Component { Calling it from react library import React, { Component } from 'react';
	•	class App extends React.Component { Calling it from react library import React, { Component } from 'react';

<Todos /> embanding the component with a custom tag

Map method is high order array method.

- install ES7 plugin it helps generate components easier.

- PopTypes is the validations that components should have.


### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.