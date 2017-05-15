/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  TextInput,
  ToastAndroid,
  Vibration,
  Image
} from 'react-native';

import  { Saludo }  from './componentes/Saludo';
import { styles } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class clase1 extends Component {  

  mensaje = "Hola Pedro Perez";
  state = {
            'username': '',
            'password': '',
            'telefono': ''                    
          };


  onPressLearnMore = (nombre, apellido) => {
    alert('Hola...'+nombre + " " + apellido);
  }

  prueba(nombre,apellido){
    alert(nombre+" "+apellido);
  }


  mostrarToast = (mensaje) => {
  	//ToastAndroid.show(mensaje, ToastAndroid.LONG);
  	ToastAndroid.showWithGravity('All Your Base Are Belong To Us', ToastAndroid.SHORT, ToastAndroid.CENTER);
  }

  vibrar = () => {
  	Vibration.vibrate([0,500]);
  }



  render() {

    return (      
      <View style={styles.contenedor}>
      	<Image source={require('./imagen.png')} style={{width: 150, height: 150}} />

      	<Image source={{uri:'http://www.aldia.co/sites/default/files/miakhalifadet.jpg'}} style={{width: 150, height: 150}} >
      		<Text style={{color:'#fff',fontSize:15, backgroundColor:'rgba(255,25,120,0.5)'}}>Mia Kalifa</Text>
      	</Image>

        
        <View>
        <TextInput
          ref="1"
          placeholder={'Usuario'}
          style={styles.inputText}
          onChangeText={(texto) => this.setState({username:texto})}
          value={this.state.username}
          returnKeyType="next"
          onSubmitEditing={() => this.refs[2].focus()}
        />

        <TextInput
          ref="2"
          placeholder={'Contraseña'}
          style={styles.inputText}
          onChangeText={(texto) => this.setState({password:texto})}
          value={this.state.password}
          secureTextEntry={true}
          returnKeyType="next"
          onSubmitEditing={() => this.refs[3].focus()}
        />

        <TextInput
          ref="3"
          placeholder={'Telefono'}
          style={styles.inputText}
          onChangeText={(texto) => this.setState({telefono:texto})}
          value={this.state.telefono}
          keyboardType={'phone-pad'}
          returnKeyType="done"
        />
        </View>
        <Button 
          color='#FF0000'        
          onPress={this.mostrarToast.bind(this,'Mensaje Toast')}
          title="Mostrar Toast"          
          accessibilityLabel="Learn more about this purple button"
        />
        <Icon name="heart-outline" size={30} color="#900" />

        <Button 
          color='#FF0000'        
          onPress={this.vibrar.bind(this)}
          title="Vibración"          
          accessibilityLabel="Learn more about this purple button"
        />

        <Icon name="heart-outline" size={30} color="#900" />

      </View>
    );
  }
}

AppRegistry.registerComponent('clase1', () => clase1);
