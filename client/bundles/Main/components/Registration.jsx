import React, { Component } from 'react'

const axios = require('axios');


 function RegistrationForm(props) {
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <label htmlFor="First name">First name</label>
                <input name="First name" type="text"/> 
            <label htmlFor="Last name">Last name</label>
                <input name="Last name" type="text"/>
            <label htmlFor="Email">Email</label>
                <input name="Email" type="email"/>
            <label htmlFor="password">Password</label>
                <input name="Password" type="password"/>
            <label htmlFor="password_confirmation">Password Confirmation</label>
                <input name="Password confirmation" type="password"/>
            <button name="Submit" type="submit">Submit</button>
        </form>
        
    </div>
  )
}


export class Registration extends Component {
    constructor(){
        super()
        this.state = {
            user_role: ''
        }
    }

    onSubmit = () => {
        event.preventDefault()
    
        axios({
          method: 'post',
          url: '/users/sign_up',
          data: {
            name: this.state.name
          }
        });
      }

    onClick(event){
        event.preventDefault()
        this.setState ({
            [event.target.id]: event.target.value
        })
    }


  render() {
    return (
      <div>
        <h1>I am a</h1>
        <button name="user_role" value="Trainee" onClick = {this.onClick}>Trainee</button>
        <button name="user_role" value="Coach" onClick = {this.onClick}>Coach</button>
        <RegistrationForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

export default Registration
