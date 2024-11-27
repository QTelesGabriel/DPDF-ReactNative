import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Logo = require('@/assets/images/Logo.jpeg')
const Voltar = require('@/assets/images/Voltar.jpeg')
const Home = require('@/assets/images/Home.jpeg')

interface HeaderProps {
  navigation: any;
  onPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ navigation, onPress }) => {

  const handlePressHome = () => {
    navigation.navigate('InicialScreen');
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconButtonVoltar} onPress={ onPress }>
        <Image source={ Voltar } style={styles.icon} />
      </TouchableOpacity>
      <Image source={ Logo } style={styles.logo} />
      <TouchableOpacity style={styles.iconButtonHome} onPress={ handlePressHome }>
        <Image source={ Home } style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#345237',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  iconButtonVoltar: {
    width: 30,
    height: 30,
  },
  iconButtonHome: {
    width: 40,
    height: 40,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 250,
    height: 70,
  },
});