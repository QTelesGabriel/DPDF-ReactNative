import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import Header from "@/components/Header";

interface ChatBotProps {
    navigation: any;
}

const ChatBotScreen: React.FC<ChatBotProps> = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true); // Controle do estado do carregamento
    const [error, setError] = useState(false); // Controle do estado de erro

    return (
        <View style={styles.screen}>
            {/* Cabeçalho */}
            <Header 
                navigation={navigation}
                onPress={() => navigation.goBack()}
            />

            {/* Corpo */}
            <View style={styles.container}>
                {/* Animação de carregamento */}
                {isLoading && (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#345237" />
                    </View>
                )}

                {/* WebView */}
                {!error && (
                    <WebView
                        source={{ uri: 'https://apitypebot.aidadpdf.cloud/homepage' }}
                        style={styles.webview}
                        onLoadStart={() => {
                            setIsLoading(true);
                            setError(false);
                        }} // Início do carregamento
                        onLoadEnd={() => setIsLoading(false)} // Fim do carregamento
                        onError={(e) => {
                            setIsLoading(false);
                            setError(true);
                            console.error('Erro ao carregar a página:', e.nativeEvent);
                        }} // Tratamento de erros
                        javaScriptEnabled
                        domStorageEnabled
                        startInLoadingState
                    />
                )}

                {/* Mensagem de erro */}
                {error && (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>
                            Não foi possível carregar a página. Verifique sua conexão e tente novamente.
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );
};

export default ChatBotScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    container: {
        flex: 1,
    },
    loadingContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 1,
    },
    webview: {
        flex: 1,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    errorText: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
    },
});