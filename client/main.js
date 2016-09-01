import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';

// create a component
const App = () => {
  return(
      <div>
        This is app
        <ImageList />
      </div>
  );
};


Meteor.startup(() =>{
  ReactDOM.render(<App />, document.querySelector('.container'));
});
