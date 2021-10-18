import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
import GoogleLogin from 'react-google-login';


export default class Login extends Component {

    responseGoogle=(response)=> {
      console.log(response);
      console.log(response.profileObj);
    }
    render() {
      return (
        <div>
          <GoogleLogin 
            clientId='174877604729-5iuq0l5jbl15ve9vpr1ljnagi1gupdk4.apps.googleusercontent.com'
            buttonText='Login'
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />     
         
        </div>
      );
    }
}
