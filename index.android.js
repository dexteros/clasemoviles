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
  Button
} from 'react-native';

import  { Saludo }  from './componentes/Saludo';
import { styles } from './styles';

export default class clase1 extends Component {  

  mensaje = "Hola Pedro Perez";


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
