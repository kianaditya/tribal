import React, { Component } from 'react';
import SessionCard from './SessionCard';
import { FacebookProvider, ShareButton } from 'react-facebook';
export class ShowSession extends Component {
	constructor(props) {
		super(props);
		this.state = {
			session: props.session
		};
		this.buyStripe = this.buyStripe.bind(this);
	}

	buyStripe() {
		document.location.href = "/transactions/new" + "?sessionId=" + this.state.session.id;
	}

	render() {
		return (
			<div className='main_container wrapper-col' >
				<SessionCard session={this.state.session} />
				<div>
					<button className='button' onClick={this.buyStripe}>
						Buy Session
				</button>
					<FacebookProvider appId="254630232098889">
						<ShareButton className='button' href="https://index.hu/">
							Share
					</ShareButton>
					</FacebookProvider>
				</div>
			</div>
		);
	}
};

export default ShowSession;
