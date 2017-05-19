import React, {Component} from 'react';
import {Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableHighlight  
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';
import Spinner from '../spinner/Spinner';

export default class Login extends Component{

  state={
    correo:'',
    password:'',
    isLogin:false
  }

  constructor(){
    super();    
  }

  validarCampos = (textcorreo,textpasword) =>{
    var error = '';
    //expresion regurlar de correo
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(textcorreo.length <= 0 ){
      error = 'El correo no puede estar vacio';
    }else{
      if(!re.test(textcorreo)){
        error = 'El texto ingresado no es un correo';
      }
    }

    if(textpasword.length <= 0){
      error = error+'\n'+'El password no puede estar vacio';
    }

    if(error.length >= 1){
      alert(error);
    }else{
      this.setState({isLogin:true});
      this._timer = setTimeout(() => {
      this.setState({isLogin:false});
      alert(' Login completo ');     
    }, 2000);
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.fondo} source={require('./assets/wallpaper.png')} >

          <View style={styles.vistalogo}>
            <Image source={require('./assets/logo.png')} style={styles.logo} />              
              <Spinner text={'Cargando...'} visible={this.state.isLogin}/>              
          </View>

          <View  style={styles.vistacuerpo}  >
            <View style={styles.campoformulario} >
                <View style={styles.campoicono}>
                   <Icon name="email-outline" size ={30} color="gray" />
                </View>
                <View style={styles.cajaTexto}> 
                  <TextInput 
                    maxLength={20}
                    style={styles.inputtexto}
                    value={this.state.correo}
                    placeholder="Email address"
                    placeholderTextColor="gray"
                    underlineColorAndroid='transparent'
                    onChangeText = {(text) => this.setState({correo:text})}
                  />
                </View> 
            </View>

            <View style={styles.campoformulario} >
                <View style={styles.campoicono}>
                   <Icon name="lock-outline" size ={30} color="gray" />
                </View>
                <View style={styles.cajaTexto}> 
                  <TextInput 
                    maxLength={10}
                    style={styles.inputtexto}
                    value={this.state.password}
                    onChangeText = {(text)=> this.setState({password:text})}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="gray"
                    underlineColorAndroid='transparent'
                  />
                </View> 
            </View>

            <TouchableHighlight onPress={this.validarCampos.bind(this,this.state.correo,this.state.password)} style={styles.botones} underlayColor="#B8860B" >
              <Text style={styles.textbotones} >Sign in</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={this.validarCampos.bind(this)} style={styles.botonesFace} underlayColor="#171D3F" >
              <Text style={styles.textbotones} >Sign in using facebook</Text>
            </TouchableHighlight>
            
            <TouchableHighlight style={styles.pie}  >
              <Text style={styles.textPie} >Forgot your password ?</Text>
            </TouchableHighlight>

          </View>
        </Image>
        
      </View>
    );
  }

}