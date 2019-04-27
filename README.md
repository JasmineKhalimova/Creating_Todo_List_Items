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

- using https://jsonplaceholder.typicode.com/ to get http request 

** NEED TO INSTAL UUID

##npm i uuid

** NEED TO INSTAL Axios 

##npm i axios

To run: `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

To create a production build, use npm run build.

### `npm run build`

### `npm run eject`


