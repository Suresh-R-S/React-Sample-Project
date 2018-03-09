import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '../components/list';
import { getCall } from '../services/api';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading : false,
			data : []
		}
	}

	componentDidMount() {
		this.setState({ loading : true }, () => {
			this.getList();
		});
	}

	getList() {
		getCall( {results : 20} )
		.then(( response ) => {
			console.log('response ::::::::: ',response.data.results);
			this.setState( { data : response.data.results, loading : false } );
		})
		.catch(( error ) => {
			this.setState( { loading : false } );
			console.log('error ::::::: ',error);
		})
	}

	goToDetails(){
		this.props.history.push('/details');
	}

	render() {

		if( this.state.loading )
			return (
				<h1> Loading data...</h1>
			)

		return (
			<div>
				<h1>Home</h1>
				<List data={this.state.data}/>
				{/* <Link to="/details">To details</Link> */}
				<button onClick={ this.goToDetails.bind(this) }>To details</button>
			</div>
		)
	}
}