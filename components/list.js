import React, { Component } from 'react';

export default class extends Component {
	render(){
		return(
			<ul>
				{ this.props.data.map((item) => 
					<li>
						<span>{ item.name.title } </span>
						<span>{ item.name.first } </span>
						<span>{ item.name.last }</span>
					</li>
				) }
			</ul>
		)
	}
}