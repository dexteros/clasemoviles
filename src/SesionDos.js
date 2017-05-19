import React, { Component } from 'react';
import {  
  View,
  Text,
  Button,
  Picker,
  DatePickerAndroid
} from 'react-native';


export default class SesionDos extends Component{

	state={
		picker:'',
		framework:'',
		frameworks:[]
	}

	
	items=[
		{	name:'PHP',
			framework:[	'Laravel',
						'Yii'
					  ],
			key:'php'
		},
		{name:'JAVA',framework:['Sprint', 'Hibernate'],key:'java'}
	];

	showDatePicker= async ()=>{
		try {
		  const {action, year, month, day} = await DatePickerAndroid.open({
		    // Use `new Date()` for current date.
		    // May 25 2020. Month 0 is January.
		    date: new Date(),
		    minDate: new Date(),		    
		    mode: 'spinner'
		  });

		  if (action !== DatePickerAndroid.dateSetAction) {
		    alert('Cancelado...');
		  }

		  if (action !== DatePickerAndroid.dismissedAction) {
		    alert(year+'/'+month+'/'+day);
		  }

		} catch ({code, message}) {
		  console.warn('Cannot open date picker', message);
		}

	}


	selectedFrameworks = (key)=>{
		
		this.setState({picker:key});

		this.setState({frameworks:[]});

		for (let i = 0; i < this.items.length; i++) {
			
			let actual = this.items[i];
			
			if(actual.key == key){
				
				this.setState({frameworks:actual.framework})
			}
		}
	}

	render(){
		return(
			<View style={{flex:1}}>
				<Text>Pantalla Dos</Text>
				<Button
				  onPress={this.showDatePicker}
				  title="ver datepicker"
				  color="#841584"				  
				/>


				
				<Picker
				  selectedValue={this.state.picker}
				  onValueChange={(mivariable) => this.selectedFrameworks(mivariable)}>
				  <Picker.Item label={'Seleccione'} value={''} />
				  {this.items && this.items.map((value,index)=>{
				  	//Validamos si existen Items y los recorremos con map
				  		return (<Picker.Item key={index} label={value.name} value={value.key} />)
				  })}				  
				  
				</Picker>
				{this.state.frameworks && this.state.frameworks.length > 0 ?
					<Picker
					  selectedValue={this.state.framework}
					  onValueChange={(seleccion) => this.setState({framework:seleccion})}>
					  
					  {this.state.frameworks && this.state.frameworks.map((value,index)=>{

					  		return (<Picker.Item key={index} label={value} value={value} />)
					  })}				  
					  
					</Picker>
					: 
					null
				}


			</View>
		)
	}
}