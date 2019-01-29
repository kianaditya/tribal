import React, { Component } from 'react'

const axios = require('axios');
export class Registration extends Component {
    constructor(){
        super()
        this.state = {
            user_role: '',
            first_name: '',
            last_name: '',
            email:'',
            password: '',
            password_confirmation:''
        }
    }

    onSubmit (event) {
        debugger
        event.preventDefault()
    
        axios.post('http://localhost:3000/users',
           {
            // first_name: this.state.first_name
          
        }).then(response => {
            console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    }

    onClick(event){
        event.preventDefault()
        this.setState ({
            [event.target.id]: event.target.value
        })
    }

    onChange(event){
        console.log(event)
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
        <form onSubmit={event => this.onSubmit(event)}>
            <label htmlFor="First name">First name</label>
                <input value={this.state.first_name} onChange={event => this.onChange(event)} id="first_name" name="First name" type="text"/> 
            <label htmlFor="Last name">Last name</label>
                <input value={this.state.first_name} onChange={this.onChange} name="Last name" type="text"/>
            <label htmlFor="Email">Email</label>
                <input value={this.state.email} onChange={this.onChange} name="Email" type="email"/>
            <label htmlFor="password">Password</label>
                <input value={this.state.password} onChange={this.onChange} name="Password" type="password"/>
            <label htmlFor="password_confirmation">Password Confirmation</label>
                <input value={this.state.password_confirmation} onChange={this.onChange} name="Password confirmation" type="password"/>
            <button name="Submit" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Registration
