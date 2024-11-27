import React from 'react';
import { TouchableOpacity, Linking, StyleSheet, Alert } from 'react-native';
import { VStack, Image, Text, Box, ScrollView } from 'native-base';
import Header from '@/components/Header';
import OpcaoCard from '@/components/OpcaoCard'
import TituloCard from '@/components/TituloCard';
import ServicoCard from '@/components/ServicoCard';
import { servicoMaisRecente } from '@/components/ServicoCard';

const InicialScreen = ({ navigation }: any) => {

	const Chatbot = require('@/assets/images/Chatbot.png')
	const Localizacao = require('@/assets/images/Localizacao.png')
	const Recentes = require('@/assets/images/Recentes.png')
	const Servicos = require('@/assets/images/Servicos.png')
	const Telefone = require('@/assets/images/Telefone.png')

  const handlePress = ( servico: string ) => {
		navigation.navigate('ServicoEspecificoScreen', { servicoNome: servico })
	};
	const handlePressServicos = () => {
    navigation.navigate('ServicosScreen', { paginaAnterior: 'InicialScreen' })
  };
  const handlePressLocalizacao = () => {
    navigation.navigate('LocalizacaoScreen', { paginaAnterior: 'InicialScreen'})
  };
  const handlePressChatBot = () => {
    navigation.navigate('ChatBotScreen');
  };
  const abrirWhatsApp = () => {
    const numeroTelefone = '5561921964409'; // Substitua pelo número de telefone com o código do país
    const mensagem = 'Olá, gostaria de mais informações!';
  
    const urlAlternativa = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(mensagem)}`;
  
    // Verifica se o WhatsApp está instalado
    Linking.canOpenURL(urlAlternativa)
      .then((supported) => {
        if (supported) {
          Linking.openURL(urlAlternativa); // Abre o WhatsApp com a mensagem predefinida
        } else {
          Alert.alert('Erro', 'WhatsApp não está instalado!');
        }
      })
      .catch((err) => console.error('Erro ao tentar abrir o WhatsApp', err));
  };

  return (
    <VStack style={styles.container}>
      <ScrollView>
        <Header 
          navigation= {navigation}
          onPress={() => {
            if(navigation.canGoBack()) {
              navigation.goBack()
            } else {
              console.warn('Nenhuma tela para retornar')
            }
          }}
        />

        <TituloCard
          imageSource={ Recentes } // Alterar imagem
          text='Recente'
        />

        <Box style={styles.rowBox}>
          <ServicoCard
            key={servicoMaisRecente.valor}
            servico={servicoMaisRecente.valor}
            onPress={ () => handlePress(servicoMaisRecente.valor) }
          />
        </Box>

        <Box style={styles.columnBox}>

          <OpcaoCard
						imageSource={ Servicos }
						text="Serviços"
						onPress={ handlePressServicos }
					/>

					<OpcaoCard
						imageSource={ Localizacao }
						text="Localização"
						onPress={ handlePressLocalizacao }
					/>

					<OpcaoCard
						imageSource={ Chatbot }
						text="Assistente Virtual"
						onPress={ handlePressChatBot }
					/>

        </Box>

				<TouchableOpacity
          style={styles.contato} 
          onPress={ abrirWhatsApp }
        >
        	<Image source={ Telefone } style={styles.whatsappImage} alt='Telefone' />
          <Text style={styles.contactText}>Fale conosco</Text>
        </TouchableOpacity>

      </ScrollView>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: "#f9f9f9",
  },
  formControlBox: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    paddingHorizontal: 7, 
    borderRadius: 8,
  },
	rowBox: {
		display: 'flex',
		justifyContent: 'center',
    alignItems: 'center',
		marginHorizontal: 30,
		marginBottom: 15,
  },
  columnBox: {
    flexDirection: 'column',
    marginTop: 10,
  },
  contato: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 120,
		borderRadius: 90,

	},
  whatsappImage: {
    width: 100,
    height: 100,
    marginTop: 6,
  },
  contactText: {
    marginTop: 10,
    fontSize: 20,
    paddingTop: 1,
    height: 40,
		color: '#345237',
    borderRadius: 20,
  },
});

export default InicialScreen;