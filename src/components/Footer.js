import React from 'react';


export default class Footer extends React.Component{
	render(){
		return(
			<div>
			<h2> {this.props.title} </h2>
			<h2> {this.props.name} </h2>
			</div>
			);
	}
}