import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios';

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

  // axios
  axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
    .then(response => console.log(response))
  ;

});
