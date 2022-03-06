import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Count } from "./Components/Count";
import { GithubUserDetails } from "./Components/GithubUserDetails";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Count />
        <GithubUserDetails />
      </header>
    </div>
  );
}

export default App;

/*
KeyNotes:

State management is very important part of web application.
It means how our application handles data in the component, share data
between components.
Suppose if we fetch the data from the server, how we will share between
components and manage state like loading, fetching and error state.

There are multiple way to manage state in React app:
useState Hook
Context
Redux
MobX
Recoil

There are multiple factor to decide the state management library:
- Size and complexity of the app
- How many components need to share the data

small state - useState, context
medium state - Recoil
Large state - Redux, MobX

Question: What is MobX state management library?

Answer: It is an open source state management library. It helps to manage library in the web application. We can use this library in the large application. It is same as Redux.

It is standalone and does not depend on any frontend library or framework.
It can work with any framework like React, Vue, Angular.

There are multiple concepts in MobX
State - state is the data that drives your application. State can be an object,
array or primitive value.

Store - The main responsiblity of the store is to move
the logic and state out of components that can be used
in multiple components.

Store is any data structure like array, object or primitive value. We should
marked all the value in the store as "observale" so that MobX can track them.

Action - Actions are methods that manipulate and update the state.
We can trigger action on user events, backend data pushes, scheduled events.

observer - it is an higher order component. we use observer in the react component. It will help to render the component or update the UI if state
changes.

how data flow in MobX
action - state - update state - update UI
Event trigger -> Action -> observable state -> computed values -> side-effect (UI)  

*/
