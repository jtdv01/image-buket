console.log("Hello!");

// Import react lib
import React from 'react';
import ReactDOM from 'react-dom';
// create a component
const App = () => {
  return(
      <div>React App #2</div>
  );
};


Meteor.startup(() =>{
  ReactDOM.render(<App />, document.querySelector('.container'));
});
