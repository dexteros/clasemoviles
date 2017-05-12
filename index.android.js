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
  TextInput
} from 'react-native';

import  { Saludo }  from './componentes/Saludo';
import { styles } from './styles';

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

  render() {

    return (      
      <View style={styles.contenedor}>
        <Text>Hola Mundo</Text>
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
          onPress={this.onPressLearnMore.bind(this,'Pedro','Perez')}
          title="Presionne aquí"          
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('clase1', () => clase1);
