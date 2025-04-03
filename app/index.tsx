/*import { StyleSheet, Button, Text, View } from "react-native";
export default function pAp() {
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
   
import { View, Pressable, StyleSheet } from "react-native"; /*importando da biblioteca, qual componente quer que puxe */ 

import styled from "styled-components/native"; /*estiliza dentro do js*/
import Title from "../components/Titulo/titulo";
import { Eye, EyeOff } from "lucide-react-native";
import { useEffect, useState } from "react";

export default function App(){ /*retorna jsx para renderizar a interface*/

    const [email, setEmail] = useState('exemplo@exemplo.com')
    const [erroEmail, setErroEmail] = useState(false)

    const [senha, setSenha] = useState('@Example123')
    const [erroSenha, setErroSenha] = useState(false)

    const [mostrarSenha, setMostrarSenha] = useState(false); // Estado para alternar visibilidade

    useEffect(() => {
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
       if(emailRegex.test(email))
        {
        setErroEmail(false)
       }
       else{
        setErroEmail(true)
       }
    }, [email])

    useEffect(() => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

        if(passwordRegex.test(senha))
        {
            setErroSenha(false)
        }
        else{
            setErroSenha(true)
        }
    })    

useEffect(() => {
    console.log(email)
}, [email])

    return(
        <Tela>
            <Title 
                text={"Login"} 
                flag={true}
            />
            <Title
                text={"Bem vindo ao app!"}
                flag={false}
            />
            <ContainerCampoTexto>
<View> 
    <EmailContainer>              
        <InputEmail
                    erro={erroEmail}
                    placeholder="Digite seu email..."
                    onChangeText={(text:string) => setEmail(text)}
        />       
    </EmailContainer>
    {erroEmail ? <TextErrorHint>Email inválido</TextErrorHint> : null}
    </View>

<View>
    <SenhaContainer>
        <InputSenha
            erro={erroSenha}
            placeholder="Digite a senha..."
            secureTextEntry={mostrarSenha} 
            onChangeText={(text:string) => setSenha(text)}
        />
        <Pressable onPress={() => setMostrarSenha(!mostrarSenha)} style={styles.icone}>
            {mostrarSenha ? <EyeOff size={24} color="#F0FFCE" /> : <Eye size={24} color="#F0FFCE" />}
        </Pressable>

    </SenhaContainer>
    {erroSenha ? <TextErrorHint>Senha inválida</TextErrorHint> : null}
</View>
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

const Tela = styled.View` /* Cria a variavel em letra maiuscula, style = metodo de estilizaçao , depois é o tipo de campo, view é o mesmo que div*/ 
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
`///////


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
const TextErrorHint = styled.Text`
    font-size: 16px;
    color: #E63946;
`

const SenhaContainer = styled.View`
    position: relative;
    width: 100%;
`

const InputSenha = styled.TextInput`
    width: 100%;
    height: 60px;
    padding: 12px;
    padding-right: 40px; /* Espaço para o ícone */
    background-color: #A53F2B;
    color: #F0FFCE;
    border-radius: 10px;
    border: solid 2px  #F0FFCE ;
`

const styles = StyleSheet.create({
    icone: {
        position: "absolute",
        right: 10,
        top: "50%",
        transform: [{ translateY: -12 }],
    },
});

const EmailContainer = styled.View`
    position: relative;
    width: 100%;`

const InputEmail = styled.TextInput`
width: 100%;
height: 60px;
padding: 12px;
padding-right: 40px; /* Espaço para o ícone */
background-color: #A53F2B;
color: #F0FFCE;
border: solid 2px  #F0FFCE ;
border-radius: 10px;
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