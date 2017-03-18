import React from 'react';
import Link from 'react-router';

export default class Test1 extends React.Component{
	render(){
		return(
			<div>
			<h1> Test1 </h1>
			{this.props.children} 
			<Link to="Test2"> Test2 </Link>
			</div>
			);
	}
}