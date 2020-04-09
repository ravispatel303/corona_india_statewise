import React, { Component } from 'react'
import data from './recentData.json';

class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: data,
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({hasError: true, data: data})
	}

	render() {
		if (this.state.hasError) {
			return <h1> Ooops. No such word in state names</h1>
		}

		return this.props.children
	}
}


export default ErrorBoundry;