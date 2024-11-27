import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '@/components/Header';
import servicosDisponiveis from '../../data/servicosDisponiveis';
import ServicoCard from '@/components/ServicoCard';
import TituloCard from '@/components/TituloCard';

const Servicos = require('@/assets/images/Servicos.png');

interface ServicosScreenProps {
  navigation: any;
}

const ServicosScreen: React.FC<ServicosScreenProps> = ({ navigation }) => {

  const handlePress = (servico: string) => {
    navigation.navigate('ServicoEspecificoScreen', { servicoNome: servico });
  };

  return (
    <ScrollView style={styles.container}>
      <Header 
        navigation={navigation}
        onPress={() => { navigation.goBack(); }}
      />

      {/* Título */}
      <TituloCard
        imageSource={ Servicos }
        text="Serviços"
      />

      {/* Serviços */}
      <View style={styles.servicos}>
        {Object.entries(servicosDisponiveis).map(([key]) => (
          <ServicoCard
            key={key}
            servico={key} // Nome do serviço (a chave)
            onPress={() => handlePress(key)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default ServicosScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
  servicos: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  bloco: {
    backgroundColor: '#0a400d',
    borderRadius: 10,
    height: 100,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  blocoTexto: {
    color: '#f9f9f9',
    fontSize: 20,
    textAlign: 'center',
  },
});