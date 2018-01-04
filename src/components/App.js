import React, { Component } from 'react';
//Firebase Settings
import fireAppConfig from './Firebase.json'
import firebase from 'firebase';

// Main css
import './App.css';

// Components
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import About from './About/About';
import Project from './Project/Project';
import Footer from './Footer/Footer';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: []
    }
  }

  componentWillMount(){

    firebase.initializeApp({
      apiKey: fireAppConfig.apiKey,
      authDomain: fireAppConfig.authDomain,
      databaseURL: fireAppConfig.databaseURL,
      projectId: fireAppConfig.projectId,
      storageBucket: fireAppConfig.storageBucket,
      messagingSenderId: fireAppConfig.messagingSenderId
    });

    firebase.database().ref(`/`)
    .on('value', snapshot => {
      this.setState({
        projects : snapshot.val()
      })
    })
  }
  
  render() {
    return (
      <div>
        <Navigation />
        <Home />
        <About />
        <Project projects={this.state.projects} />
        <a id="back-to-top" href="#" className="btn btn-primary btn-lg back-to-top pull-right" role="button" title="Click to return on the top page"
          data-toggle="tooltip" data-placement="left"><span className="glyphicon glyphicon-chevron-up"></span></a>
        <Footer />
      </div>
    );
  }
}

export default App;