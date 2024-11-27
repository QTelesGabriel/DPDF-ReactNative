import { createStackNavigator } from "@react-navigation/stack";
import DefensoriaRegiao from "../pages/DefensoriaRegiao";
import DefensoriaScreen from "../pages/DefensoriaScreen";
import InicialScreen from "../pages/InicialScreen";
import LocalizacaoScreen from "../pages/LocalizacaoScreen";
import ServicoEspecificoScreen from "../pages/ServicoEspecificoScreen";
import ServicosScreen from "../pages/ServicosScreen";
import defensorias from "@/data/defensorias";
import regioes from "@/data/regioes";
import servicosDisponiveis from "@/data/servicosDisponiveis";
import ChatBotScreen from "../pages/ChatBotScreen";
import LoginScreen from "../pages/LoginScreen";

// Tipagem das rotas
export type RootStackParamList = {
  LoginScreen: undefined;
  InicialScreen: undefined;
  ServicosScreen: undefined;
  ServicoEspecificoScreen: { servicoNome: keyof typeof servicosDisponiveis };
  LocalizacaoScreen: undefined;
  ChatBotScreen: undefined;
  DefensoriaScreen: { defensoriaNome: keyof typeof defensorias }; // Chaves do objeto defensorias
  DefensoriaRegiao: { regiaoNome: keyof typeof regioes };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Navegacao() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="InicialScreen" component={InicialScreen} />
      <Stack.Screen name="ServicosScreen" component={ServicosScreen} />
      <Stack.Screen name="ServicoEspecificoScreen" component={ServicoEspecificoScreen} />
      <Stack.Screen name="LocalizacaoScreen" component={LocalizacaoScreen} />
      <Stack.Screen name="ChatBotScreen" component={ChatBotScreen} />
      <Stack.Screen name="DefensoriaScreen" component={DefensoriaScreen} />
      <Stack.Screen name="DefensoriaRegiao" component={DefensoriaRegiao} />
    </Stack.Navigator>
  );
}