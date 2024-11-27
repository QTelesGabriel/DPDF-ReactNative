import React from 'react';
import { View, Image, Text, StyleSheet } from "react-native";

interface TituloCardProps {
    imageSource: any;
    text: string;
  }
  
const TituloCard: React.FC<TituloCardProps> = ({ imageSource, text }) => {
	return (
		<View style={styles.titulo}>
			<Image source={imageSource} style={styles.tituloImagem} alt={ text } />
			<Text style={styles.tituloTexto}>{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	titulo: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  tituloImagem: {
    height: 60,
    width: 60,
  },
  tituloTexto: {
    fontSize: 32,
    marginLeft: 15,
    color: '#345237',
    textDecorationLine: 'underline',
    textDecorationColor: 'rgb(87, 101, 86)',
  },
})

export default TituloCard;