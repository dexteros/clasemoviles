/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import  { Saludo }  from './componentes/Saludo';
import { styles } from './styles';

export default class clase1 extends Component {  

  mensaje = "Hola Pedro Perez";

  render() {

    return (      
      <View style={styles.contenedor}>
          <Text>Hola Mundo</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('clase1', () => clase1);
