import React, { Component } from "react";
const axios = require("axios");
export class Registration extends Component {
	constructor() {
		super();
		this.state = {
			first_name: "Type here"
		};
		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		console.log(event.target.id, event.target.value);
		const target = event.target;
		this.setState({
			[target.name]: target.value
		});
	}

	render() {
		return (
			<div>
				<form>
					<input
						name="first_name"
						onChange={this.onChange}
						value={this.state.first_name}
                        type="text"
                        id="first_name"
					/>
					{this.state.first_name}
				</form>
			</div>
		);
	}
}

export default Registration;
