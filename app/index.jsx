/*import { StyleSheet, Button, Text, View } from "react-native";
export default function App() {
    return (


<View >
    <Text style={Estilo.texto}>
        Hello World
    </Text>
    <Button
        title = "Clique em mim"
    />
</View>
    )
}

const Estilo = StyleSheet.create({
    texto : {
        color: '#00d5e0'
    }

})
    */
   
import { TextInput, View, Text, Pressable, StyleSheet } from "react-native";

import styled from "styled-components/native";

export default function Login()

{
    return(
        <Tela>
            <View>
                <Titulo>LOGIN:</Titulo>
            </View>
            
            <ContainerCampoTexto>
                <CampoTexto
                    placeholder="Digite seu email..."
                    
                />
                <CampoTexto
                    placeholder="Digite a senha..." 
                />
            </ContainerCampoTexto>

            <ContainerBotoes>
                
                    <Botao>
                        <TextoBotao>Entrar</TextoBotao>
                    </Botao>
                
                <Links>Cadastre-se</Links>
                <Links>Esqueci a senha</Links>
            </ContainerBotoes>
        </Tela>  
    )
}

/*USANDO STYLED-COMPONENTS*/

const Tela = styled.View`
    flex: 1;
    background-color: #280004;
    padding: 26px ;
`

const Titulo = styled.Text`
    font-family: "Kanit";
    font-size: 56px;
    font-weight: bold;
    color:  #F0FFCE;
    margin-top: 200;
    margin-bottom: 42;
    margin-left: 23;
`

const ContainerCampoTexto = styled.View`
    gap: 25px;
`

const CampoTexto = styled.TextInput`
    color: #F0FFCE;
    background-color: #A53F2B;
    font-size: 18px;
    padding: 20px;
    border-radius: 20px;
    border: solid 3px;
    border-color:  #F0FFCE;
`

const ContainerBotoes = styled.View`
    margin-top: 65;
    gap: 25px;
`

const Botao = styled.Pressable`
    background-color: #F0FFCE;
    padding: 15px;
    border-radius: 10px;
`

const TextoBotao = styled.Text`
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color:#A53F2B ;
`

const Links = styled.Text`
        font-family: "Kanit";
        text-align: center;
        color: #F0FFCE;
        font-size: 18;
`

/*USANDO STYLESHEET*/

/* const estilo =  StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#280004',
        padding: 26 
    },
    titulo: {
        fontFamily: "Kanit",
        fontSize: 56,
        fontWeight: 'bold',
        color: '#A53F2B',
        marginTop: 200,
        marginBottom: 42
    },
    campo_texto: {
        backgroundColor: '#A53F2B',
        fontSize: 18,
        textAlignVertical: 'center',
        paddingHorizontal: 16,
        padding: 20
    },
    container_campos_textos: {
        gap: 25
    },
    container_botoes: {
        marginTop: 65,
        gap: 25
    },
    botao: {
        backgroundColor: '#F0FFCE',
        padding: 20
    },
    texto_botao: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: "bold"
    },
    links: {
        textAlign: 'center',
        color: '#F0FFCE',
        fontSize: 16
    }


}) */