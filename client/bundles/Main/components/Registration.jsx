import React, { Component } from 'react'


 function RegistrationForm() {
  return (
    <div>
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
        <RegistrationForm />
      </div>
    )
  }
}

export default Registration
