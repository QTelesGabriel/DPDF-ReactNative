import {VStack, Image, Text, Box, FormControl } from 'native-base'
import { TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const Background = require('@/assets/images/FundoLogin.jpeg')

// flex row é ficar um do lado do outro

const LoginScreen = ({ navigation } : any) => { 

    const handlePress = () => {
		navigation.navigate('InicialScreen')
	};

  return (
    <ImageBackground
      source={ Background } // URL da imagem
      style={styles.background}
    >
      <VStack style={styles.conteudo}>
        <Box>
          <FormControl>


          <Text style = {styles.texto}>
          Bem-vindo a
          </Text>

          <Text style = {styles.texto} >
          Defensoria Publica/DF Digital!
          </Text>  
          
          </FormControl>

        </Box>

        <Box style={styles.box}>
          <TouchableOpacity>
            <Text style = {styles.botoes} >
              Cadastrar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style = {styles.botoes}>
              Entrar com <Text fontWeight="bold" color="white" >gov.br</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {handlePress} >   
            <Text style = {styles.botoes_two} >
              Não quero me cadastrar
            </Text>
          </TouchableOpacity>
        </Box>
      </VStack>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  conteudo: {
    flex: 1,
    padding: 0,
    marginTop: 360,
  },
  box: {
    marginTop: 35,
    width : 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
  } , 
  imagem: {
      width : 550,
      margin : 0, 
      padding : 0,  
      justifyContent : 'center', 
			height : 450,
      backgroundColor: "#f9f9f9",
    },
    texto: {
      marginTop: 0,
			padding: 10,
      marginHorizontal :  20,
      fontSize : 26,
      height: 40, 
      justifyContent : "flex-start",
			alignItems: 'flex-end',
    },
    botoes: {
      color : '#f9f9f9',
      marginBottom : 20,
      fontSize : 20,
      width : 300,
      paddingTop :20 ,
      height : 60,
      backgroundColor : '#345237',
      display : "flex",
      justifyContent : "center",   
      textAlign: 'center',
     },
    botoes_two: {
      fontSize : 20,
      width : 300,
      color: '#345237',
      backgroundColor: '#ffffff',
      paddingTop: 20,
      paddingLeft : 40,
      height : 60,
      display:'flex',    
    },

  });
export default LoginScreen