import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios';

// create a component
class App extends React.Component {
  constructor(props){
    // Whenever an App is created,
    // the constructor is created

    // and call the constructor the Component extension
    super(props);

    this.state = {images: []};
  }

  componentWillMount(){
    // FANTASTIC PLACE TO LOAD data
    // because only called once

    // axios
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then(response => {
        // we are interested in response.data.data
        // instead of this.render()
        this.setState({images: response.data.data});
        console.log("Imgur data ready");
        console.log(this.state.images);
    });

    console.log("App is about to render");
  }

  render(){

    // now to make it visible on render, call the state
    // console.log(this.state.images);
    return(
        <div>
          This is app
          <ImageList images={this.state.images}/>
        </div>
    );
  }
};


Meteor.startup(() =>{
  ReactDOM.render(<App />, document.querySelector('.container'));

});
