import{
  StyleSheet
} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fondo:{
  	flex: 1,
  	width:null,
  	height:null,
  	resizeMode:'cover',
    padding:40
  },
  vistalogo :{
	flex: 1,		
	alignItems: 'center',
  },
  logo: {
  	width:200,
  	height:200
  },
  vistacuerpo:{
  	flex: 1,	
  },
  inputtexto:{
  	height: 40,
  	color:'white',
  	fontSize:15,
  },
  campoformulario:{
  	flexDirection: 'row',
  	borderColor : 'gray',
	opacity  : 1,
	padding:0,
	marginTop :10,
	borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  campoicono:{
	flex: 1,
	padding:0,
	margin :0,
	height: 40,
	//borderWidth:1,
	justifyContent: 'center',
	alignItems: 'center',
  },
  cajaTexto:{
	flex: 6,
	padding:0,
	margin :0,
	height: 40,
	//borderWidth:1,
  },
  botones:{
	marginTop :20,
	height: 50,
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor:'#A79446',
	borderRadius: 5
  },
  botonesFace:{
	marginTop :20,
	height: 50,
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor:'#3b5998',
	borderRadius: 5
  },
  textbotones:{
  	color:'white',
  	textAlign: 'center',
  	fontSize:23,
  },
  pie:{
  	justifyContent: 'center',
  	alignItems: 'center',
  	marginTop :60,
  },
  textPie:{
  	fontSize:15,
  	color:'gray',
  }
});