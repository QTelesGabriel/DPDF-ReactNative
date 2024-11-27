import React, { useEffect, useState } from "react";
import { ScrollView } from "native-base";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from "@/components/Header";
import servicosDisponiveis from "@/data/servicosDisponiveis";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/routes/Navegacao"; // Ajustar o caminho para o arquivo correto
import DefensoriaCard from "@/components/DefensoriaCard";

type DefensoriaNome =
  | "Defensoria Pública do DF - Famílias de Brasília"
  | "Defensoria Pública do DF - Águas Claras & Vicente Pires"
  | "Defensoria Pública do DF - Guará"
  | "Defensoria Pública do DF - Iniciais de Brasília"
  | "Defensoria Pública do DF - Riacho Fundo"
  | "Defensoria Pública do DF - Juizados Especiais de Brasília"
  | "Defensoria Pública do DF - Brazlândia"
  | "Defensoria Pública do DF - São Sebastião"
  | "Defensoria Pública do DF - Ceilândia"
  | "Defensoria Pública do DF - Gama"
  | "Defensoria Pública do DF - Sobradinho"
  | "Defensoria Pública do DF - Planaltina"
  | "Defensoria Pública do DF - Taguatinga"
  | "Defensoria Pública do DF - Recanto das Emas"
  | "Defensoria Pública do DF - Samambaia"
  | "Defensoria Pública do DF - Paranoá"
  | "Defensoria Pública do DF - Santa Maria"
  | "Defensoria Pública do DF - Núcleo Bandeirante";

type ServicoEspecificoScreenProps = StackScreenProps<RootStackParamList, "ServicoEspecificoScreen">;

const ServicoEspecificoScreen: React.FC<ServicoEspecificoScreenProps> = ({ route, navigation }) => {
  const { servicoNome } = route?.params;

  // Obter os dados do serviço a partir do nome
  const dados = servicosDisponiveis[servicoNome];

  const [defensorias, setDefensorias] = useState<string[]>([]);
  const [documentos, setDocumentos] = useState<string[]>([]);

  useEffect(() => {
    if (dados) {
      setDefensorias(dados.defensorias);
      setDocumentos(dados.documentos);
    }
  }, [dados]);

  const handlePressDefensoria = (defensoria: DefensoriaNome) => {
    navigation.navigate("DefensoriaScreen", { defensoriaNome: defensoria });
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        navigation={navigation}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.page}>
        <Text style={styles.title}>
          <Text style={styles.titleBackground}>{servicoNome}</Text>
        </Text>
        <Text style={styles.sectionTitle}>Descrição do serviço:</Text>
        <Text style={styles.descricaoServico}>{servicosDisponiveis[servicoNome].descricao}</Text>
  
        <Text style={styles.sectionTitle}>Documentos necessários para a realização do serviço:</Text>
        <FlatList
          data={documentos}
          keyExtractor={(item) => item}
          scrollEnabled={false}
          renderItem={({ item }) => <Text style={styles.documentItem}>{"\u2022"} {item}</Text>}
        />

        <Text style={styles.sectionTitle}>Defensorias que disponibilizam esse serviço:</Text>
        <FlatList
          data={defensorias}
          keyExtractor={(item) => item}
          style={styles.lista}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <DefensoriaCard
							key={item}
							text={ item }
							onPress={ 
								() => {
									handlePressDefensoria(item as DefensoriaNome)
								}
							}
						/>
          
          )}
        />
      </View>
    </ScrollView>
  );
};

export default ServicoEspecificoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  page: {
    padding: 30
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 30,
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: "#345237",
    color: "#f9f9f9",
    paddingVertical: 30,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  titleBackground: {
    backgroundColor: "#345237",
    color: "#f9f9f9",
    textAlign: "center",
    paddingVertical: 20,
    borderRadius: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    color: "#345237",
  },
  descricaoServico: {
    fontSize: 18,
    marginBottom: 20,
    color: '#000',
  },
  lista: {
    marginBottom: 20,
  },
  documentItem: {
    fontSize: 18,
    marginBottom: 5,
    color: "#345237",
  },
});