import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

interface OpcaoCardProps {
  imageSource: any;
  text: string;
  onPress: () => void;
}

const OpcaoCard: React.FC<OpcaoCardProps> = ({ imageSource, text, onPress }) => {
  return (
    <TouchableOpacity onPress={ onPress }>
      <View style={styles.boxOption}>
        <Image source={imageSource} style={styles.imageIcon} alt={ text } />
        <Text style={styles.columnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boxOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 30,
    height: 80,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  imageIcon: {
    width: 45,
    height: 50,
    marginRight: 10,
  },
  columnText: {
    fontSize: 24,
    color: '#345237',
  },
});

export default OpcaoCard;