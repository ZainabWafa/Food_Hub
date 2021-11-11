import React from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage.component";
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component";
import Footer from "./components/footer-contact/footer";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from './firebase/firebase.utils';



class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            },
          );
          console.log(this.state)
        });
      }
     
      this.setState({ user: userAuth });
      // createUserProfileDocument(userAuth);
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        
        </Switch>
        <Footer/>
      
      </div>
    );
  }
}

export default App;
