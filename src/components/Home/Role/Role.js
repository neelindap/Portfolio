import React, { Component } from 'react';

class Role extends Component {
	constructor(props) {
		super(props)
		this.state = {
			roles: ["Software Engineer", "Full-stack Web Developer", "JavaScript Developer", "Mobile Application Developer"],
			roleIndex: -1,
			current: "Software Engineer"
		}
	}
	update() {
		this.setState({ roleIndex: (this.state.roleIndex + 1) % 4 })
		var role = this.state.roles[this.state.roleIndex]
		this.setState({ current: role })
	}
	componentWillMount() {
		setInterval(this.update.bind(this), 1500)
	}
	render() {
		return (
			<span className="roles">
				{this.state.current}
			</span>
		)
	}
}

// ReactDOM.render(<Role />, document.getElementById('rolesReactContainer'));
export default Role;