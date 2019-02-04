import React, { Component } from "react";
import SessionCard from "./SessionCard";
import { FacebookProvider, ShareButton } from "react-facebook";
import { NavLink, BrowserRouter } from "react-router-dom";
export class ShowSession extends Component {
	constructor(props) {
		super(props);
		this.state = {
			session: props.session
		};
		this.buyStripe = this.buyStripe.bind(this);
		this.navigate = this.navigate.bind(this);
	}

	navigate(route) {
		let sessionId = this.state.session.id;
		document.location.href = "/" + route + "#" + sessionId;
	}

	buyStripe() {
		document.location.href =
			"/transactions/new" + "?sessionId=" + this.state.session.id;
	}

	render() {
		return (
			<div className="main_container wrapper-col">
				<SessionCard session={this.state.session} />
				<div>
					<div style={this.props.user ? {} : { display: "none" }}>
						<button className="button" onClick={this.buyStripe}>
							Buy Session
						</button>
						<FacebookProvider appId="254630232098889">
							<ShareButton className="button" href="https://index.hu/">
								Share
							</ShareButton>
						</FacebookProvider>
					</div>
				</div>
				<div style={this.props.user ? { display: "none" } : {}}>
					<button
						className="button"
						value="register"
						onClick={() => this.navigate(event.target.value)}
					>
						Register
					</button>
					<button
						className="button"
						value="login"
						onClick={() => this.navigate(event.target.value)}
					>
						Login
					</button>
				</div>
			</div>
		);
	}
}

export default ShowSession;
