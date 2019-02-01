import React from "react";
import MainSessionsDisplay from "./sessions/MainSessionsDisplay";
import MainNavLinks from "./MainNavLinks";

const axios = require("axios");

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sessions: props.sessions,
			user: ""
		};
		this.logout = this.logout.bind(this);
	}
	componentWillMount() {
		this.setState({
			sessions: this.props.sessions,
			user: this.props.sessions.user
		})
	}
	logout() {
		event.preventDefault();
		const config = {
			headers: {
				"Content-Type": "application/json",
			}
		};
		axios.delete(
			"/users/sign_out", config
		).then((response) => {
			document.location.href = "/";
		}).catch(function (error) {
			console.log(error);
		})
	}
	render() {
		return (
			<div className='main_container'>
				<div className='header'>
					<img src="./assets/logo.png" id="logo" alt="logo" />
					<p id="title">Tribal</p>
				</div>
				<div className='content wrapper-col'>
					<MainNavLinks user={this.state.user} logout={this.logout}/>
					<h4 className="m-4">Hello, {this.state.user ? this.state.user.first_name : 'Stranger'}!</h4>
					<div style = {this.state.user? {}:{display: "none"} }>
						<MainSessionsDisplay  sessions={this.state.sessions} />
					</div>
				</div>
			</div>
		);
	}
}
