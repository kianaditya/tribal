import React, { Component } from 'react'

const axios = require('axios');


 function RegistrationForm(props) {
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <label htmlFor="First name">First name</label>
                <input onChange={props.onChange} value={props.first_name} id="first_name" name="First name" type="text"/> 
            <label htmlFor="Last name">Last name</label>
                <input onChange={props.onChange} value={props.last_name} name="Last name" type="text"/>
            <label htmlFor="Email">Email</label>
                <input onChange={props.onChange} value={props.email} name="Email" type="email"/>
            <label htmlFor="password">Password</label>
                <input onChange={props.onChange} value={props.password} name="Password" type="password"/>
            <label htmlFor="password_confirmation">Password Confirmation</label>
                <input onChange={props.onChange} value={props.password_confirmation} name="Password confirmation" type="password"/>
            <button name="Submit" type="submit">Submit</button>
        </form>
    </div>
  )
}


export class Registration extends Component {
    constructor(){
        super()
        this.state = {
            user_role: '',
            first_name:'',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onSubmit () {
        event.preventDefault()
    
        axios({
          method: 'post',
          url: '/users',
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

    onChange(){
        console.log(event.target.id,event.target.value)
        this.setState({
            [event.target.id]: event.target.value
        })
    }


  render() {
    return (
      <div>
        <h1>I am a</h1>
        <button name="user_role" value="Trainee" onClick = {this.onClick}>Trainee</button>
        <button name="user_role" value="Coach" onClick = {this.onClick}>Coach</button>
        <RegistrationForm 
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        first_name={this.state.first_name}
        last_name={this.state.last_name}
        email={this.state.email}
        password={this.state.password}
        password_confirmation={this.state.password_confirmation}
        />
      </div>
    )
  }
}

export default Registration