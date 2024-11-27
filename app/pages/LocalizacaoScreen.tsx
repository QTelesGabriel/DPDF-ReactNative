import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Platform, PermissionsAndroid, ActivityIndicator } from 'react-native';
import Header from '@/components/Header';
import TituloCard from '@/components/TituloCard';
import { ScrollView } from 'native-base';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import Geolocation from 'react-native-geolocation-service';
import { getDistance } from 'geolib';
import defensorias from '@/data/defensorias';

interface LocalizacaoScreenProps {
  navigation: any;
}

const LocalizacaoScreen: React.FC<LocalizacaoScreenProps> = ({ navigation }) => {
  
const locations = [
    { name: "Águas Claras" },
    { name: "Brasília" },
    { name: "Guará" },
    { name: "Riacho Fundo" },
    { name: "Brazlândia" },
    { name: "São Sebastião" },
    { name: "Ceilândia" },
    { name: "Gama" },
    { name: "Sobradinho" },
    { name: "Planaltina" },
    { name: "Taguatinga" },
    { name: "Recanto das Emas" },
    { name: "Samambaia" },
    { name: "Paranoá" },
    { name: "Santa Maria" },
    { name: "Núcleo Bandeirante" }
];

  const Icone = require('@/assets/images/Localizacao.png');

  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [nearbyDefensorias, setNearbyDefensorias] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handlePressDefensoria = (defensoria: string) => {
    navigation.navigate('DefensoriaScreen', { defensoriaNome: defensoria });
  };

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        setIsLoading(true);
      
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          );
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Permissão de localização negada!');
            setIsLoading(false);
            return;
          }
        }

        if (Platform.OS === 'web') {
          console.log('Localização não suportada no navegador.');
          setIsLoading(false);
          return;
        }

        if (Constants.appOwnership === 'expo') {
          // Verificar se estamos no ambiente Expo
          const { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.log('Permissão de localização negada!');
            setIsLoading(false);
            return;
          }

          const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
          setUserLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
        } else {
          // React Native puro
          Geolocation.getCurrentPosition(
            position => {
              setUserLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            },
            error => {
              console.error(error),
              setIsLoading(false);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
        }
      } catch (error) {
        console.error('Erro ao obter localização:', error);
      }
    };

    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (userLocation && defensorias && Object.keys(defensorias).length > 0) {
      // Converte o objeto defensorias em um array
      const defensoriasArray = Object.entries(defensorias).map(([nome, data]: any) => ({
        nome,
        ...data,
      }));
  
      // Calcula a distância e ordena as defensorias
      const sortedDefensorias = defensoriasArray
        .map(defensoria => ({
          ...defensoria,
          distance: getDistance(
            { latitude: userLocation.latitude, longitude: userLocation.longitude },
            { latitude: defensoria.latitude, longitude: defensoria.longitude }
          ),
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 3); // Seleciona as 3 mais próximas
  
      // Atualiza o estado com as defensorias mais próximas
      setNearbyDefensorias(sortedDefensorias);
      setIsLoading(false);
    }
  }, [userLocation, defensorias]);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Header 
        navigation= {navigation}
        onPress={() => {navigation.goBack()}}
      />

      {/* Título */}
      <TituloCard
        imageSource={ Icone }
        text='Localização'
      />

      {/* Carrossel de Localizações */}
      <View style={styles.carouselContainer}>
        <Text style={styles.selectRegionText}>Selecione uma região</Text>
        
        <FlatList
          data={locations}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ paddingLeft: 15 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.carouselButton,
                selectedLocation === item.name && styles.selectedButton,
              ]}
              onPress={() => {
                setSelectedLocation(item.name)
                navigation.navigate('DefensoriaRegiao', { regiaoNome: item.name })
              }}
            >
              <Text
                style={[
                  styles.carouselButtonText,
                  selectedLocation === item.name && styles.selectedButtonText,
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Defensorias Próximas */}
      <View style={styles.defensoriasContainer}>
        <Text style={styles.defensoriasTitle}>Defensorias mais próximas a você</Text>
        {
          isLoading ? (
            <ActivityIndicator size="large" color="#345237" style={{ paddingTop: 70 }} />
          ) : (
            nearbyDefensorias.map(defensoria => (
              <TouchableOpacity
                key={defensoria.nome}
                style={styles.defensoriaButton}
                onPress={() => handlePressDefensoria(defensoria.nome)}
              >
                <Text style={styles.defensoriaName}>{defensoria.nome}</Text>
                <Text style={styles.defensoriaDistance}>
                  A {(defensoria.distance / 1000).toFixed(2)} km de você
                </Text>
              </TouchableOpacity>
            ))
          )
        }
      </View>
    </ScrollView>
  );
}

export default LocalizacaoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'f9f9f9',
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#345237',
  },
  carouselContainer: {
    marginBottom: 25,
  },
  selectRegionText: {
    fontSize: 22,
    textAlign: 'center',
    color: '#345237',
    marginTop: 10,
    marginBottom: 25,
  },
  carouselButton: {
    backgroundColor: '#f9f9f9',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#345237',
  },
  selectedButton: {
    backgroundColor: '#00b488',
  },
  carouselButtonText: {
    color: '#345237',
    fontSize: 16,
  },
  selectedButtonText: {
    color: '#fff',
  },
  defensoriasContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  defensoriasTitle: {
    fontSize: 22,
    width: 375,
    color: '#345237',
    marginTop: 10,
    marginBottom: 25,
    textAlign: 'center',
  },
  defensoriaButton: {
    backgroundColor: '#345237',
    display: 'flex',
    height: 110,
    width: 360,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  defensoriaName: {
    fontSize: 20,
    color: '#f9f9f9',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  defensoriaDistance: {
    fontSize: 18,
    textAlign: 'center',
    color: '#f9f9f9',
  },
});