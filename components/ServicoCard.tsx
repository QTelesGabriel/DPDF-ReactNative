import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Definindo a interface para as propriedades do componente
interface ServicoCardProps {
  servico: string;
  onPress: () => void;
}

export let servicoMaisRecente = {
  valor: "Atendimento jurídico gratuito" as string,
}

const ServicoCard: React.FC<ServicoCardProps> = ({ servico, onPress }) => {

  const handlePress = () => {
    onPress();
    servicoMaisRecente.valor = servico;
  }

  return (
    <TouchableOpacity style={styles.card} onPress={ handlePress }>
      <Text style={styles.text}>{servico}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#345237',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: 300,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  text: {
    color: '#f9f9f9',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default ServicoCard;