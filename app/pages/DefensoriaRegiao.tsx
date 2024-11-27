import Header from "@/components/Header";
import { Text, ScrollView, View, StyleSheet } from "react-native";
import regioes from "@/data/regioes";
import DefensoriaCard from "@/components/DefensoriaCard";
import { RootStackParamList } from "../routes/Navegacao";
import { StackScreenProps } from "@react-navigation/stack";

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

type DefensoriaRegiaoProps = StackScreenProps<RootStackParamList, 'DefensoriaRegiao'>

const DefensoriaRegiao: React.FC<DefensoriaRegiaoProps> = ({ route, navigation }) => {
    
	const { regiaoNome } = route?.params;

	const handlePressDefensoria = (defensoria: DefensoriaNome) => {
		navigation.navigate('DefensoriaScreen', { defensoriaNome: defensoria })
	}

	return (
		<ScrollView>
			<Header 
				navigation= {navigation}
				onPress={() => {navigation.goBack()}}
			/>
			<View>
				<Text style={styles.title}>Defensorias em { regiaoNome }</Text>
				<View>
					{regioes[regiaoNome].map((defensoria) => (
						<DefensoriaCard
							key={defensoria}
							text={ defensoria }
							onPress={ 
								() => {
									handlePressDefensoria(defensoria as DefensoriaNome)
								}
							}
						/>
					))}
				</View>
      		</View>
		</ScrollView>
	);
};

export default DefensoriaRegiao;

const styles = StyleSheet.create({
	title: {
		marginVertical: 30,
		fontSize: 22,
		textAlign: 'center',
		color: '#345237',
	},
})