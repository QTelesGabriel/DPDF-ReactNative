import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface DefensoriaCardProps {
  key: string;
  text: string;
  onPress: () => void;
}

const DefensoriaCard: React.FC<DefensoriaCardProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.boxOption}>
        <Text style={styles.columnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boxOption: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: 30,
    height: 110,
    padding: 10,
    backgroundColor: '#345237',
    borderRadius: 10,
  },
  columnText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#f9f9f9',
  },
});

export default DefensoriaCard;