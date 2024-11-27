import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '@/components/Header';
import ServicoCard from '@/components/ServicoCard';
import defensorias from '@/data/defensorias';
import { RootStackParamList } from '../routes/Navegacao';
import { StackScreenProps } from '@react-navigation/stack';

type ServicoNome =
  | "Atendimento jurídico gratuito"
  | "Representação em processos de família"
  | "Consultas e orientações para casos de inventários e sucessões"
  | "Defesa criminal"
  | "Atendimento para vítimas de violência doméstica"
  | "Orientação jurídica em direito de família e sucessões"
  | "Representação processual"
  | "Consultoria em direito do consumidor"
  | "Acompanhamento inicial de processos"
  | "Orientação jurídica preliminar"
  | "Defesa em juizados especiais criminais"
  | "Orientação jurídica gratuita"
  | "Acompanhamento de processos familiares e cíveis"
  | "Elaboração de recursos"
  | "Defesa em casos de violência doméstica"
  | "Orientação jurídica em processos cíveis"
  | "Defesa em processos criminais"
  | "Acompanhamento em ações cíveis e de família"
  | "Assistência jurídica em processos cíveis"
  | "Assistência jurídica em processos criminais"
  | "Assistência jurídica em ações de família"
  | "Representação processual em casos criminais"
  | "Assistência jurídica gratuita em ações de violência doméstica"
  | "Acompanhamento de demandas cíveis e juizados especiais"
  | "Orientação jurídica em demandas criminais"
  | "Acompanhamento de casos em juizados especiais";


type DefensoriaScreenProps = StackScreenProps<RootStackParamList, 'DefensoriaScreen'>

const DefensoriaScreen: React.FC<DefensoriaScreenProps> = ({ route, navigation }) => {
  const { defensoriaNome } = route?.params;
  const defensoria = defensorias[defensoriaNome];
  const { telefone, endereco, horario, servicos } = defensoria;

  const handlePress = ( servico: string ) => {
		navigation.navigate('ServicoEspecificoScreen', { servicoNome: servico as ServicoNome })
	};

  return (
    <ScrollView style={styles.container}>
      <Header 
          navigation= {navigation}
          onPress={() => {navigation.goBack()}}
        />
      <Text style={styles.title}>{defensoriaNome}</Text>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Telefone:</Text>
        <Text style={styles.text}>{telefone}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Endereço:</Text>
        <Text style={styles.text}>{endereco}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Horário de Funcionamento:</Text>
        <Text style={styles.text}>{horario}</Text>
      </View>
      <Text style={styles.servicesTitle}>Serviços Disponibilizados:</Text>
      <View style={styles.servicesContainer}>
        {servicos.map((servico) => (
          <ServicoCard
            key={servico}
            servico={servico}
            onPress={ () => handlePress(servico) }
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    marginTop: 30,
    backgroundColor: '#345237',
    color: '#f9f9f9',
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 10,
  },
  section: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#345237',
  },
  text: {
    fontSize: 20,
    marginTop: 5,
    color: '#000',
  },
  servicesTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 20,
    fontSize: 26,
    color: '#345237',
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
});

export default DefensoriaScreen;