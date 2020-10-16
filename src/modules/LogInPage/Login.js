import React, { useContext } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }


      const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
          console.log(result.user)
          const { displayName, email, photoURL } = result.user;
          const signedInUser = { name: displayName, email: email, img: photoURL }
          console.log(signedInUser);
          setLoggedInUser(signedInUser);
          storeAuthToken();
        }).catch(function (error) {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      }

      const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
            // Handle error
          });
      }
    

    return (
        <main>
            <div className="mt-3">
                <img
                    src={require('../../resourses/images/logos/logo.png')}
                    alt=""
                    className="logo d-block mx-auto"/>
            </div>
            <section className="login-section">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 offset-lg-6 col-sm-12 mx-auto">
                            <div className="card login-card p-3">
                                <h4 className="font-24 text-center">Login With</h4>
                                <button onClick={handleGoogleSignIn} className="google-login-btn mt-4"><img
                                    src={require('../../resourses/images/logos//G__Logo.svg')}
                                    alt=""
                                    className="mr-5"/>Continue with Google</button>

                                    <p className="mt-3 text-center">Don't have an account? <a href="">Create Account</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </main>
    );
};

export default Login;