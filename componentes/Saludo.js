import React, { Component } from 'react';
import { View, Text } from 'react-native';


export class Saludo extends Component {

	//primer metodo
	constructor(){
		super();
	}

	componentWillMount(){
		
	}

	componentDidMount(){
		
	}

	render(){		
		return(
			<View>
				<Text style={{flex:3,color:'#0000ff',padding:0,fontSize:20,backgroundColor:'#ff0000'}}>{this.props.estado ==  '1' ? this.props.texto : 'llego...'+this.props.estado }</Text>
				<Text style={{flex:2,color:'#0000ff',padding:0,fontSize:20,backgroundColor:'#00ff00'}}>{this.props.estado ==  '1' ? this.props.texto : 'llego...'+this.props.estado }</Text>
				<Text style={{flex:1,color:'#0000ff',padding:0,fontSize:20,backgroundColor:'#0000ff'}}>{this.props.estado ==  '1' ? this.props.texto : 'llego...'+this.props.estado }</Text>
			</View>
			
		)		
	}
}



