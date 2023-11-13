import { Image, Pressable, Text, View } from "react-native";

import React from 'react';
import { useNavigation } from "@react-navigation/native";

const AboutScreen = () => {
    const navigation = useNavigation();
    return (
      <View style={{ flex: 1, backgroundColor: '#FFEB3B', paddingTop: "25%", alignItems: 'center' }}>
        <Image
          source={require('../../assets/if_logo.png')}
          style={{ width: 150, height: 150, marginBottom: "10%" }}
        />

        <Text style={{ color: '#212121', fontSize: 20, textAlign: 'center', padding: 10, textAlign: "justify" }}>
          Este aplicativo é um game quiz com perguntas sobre balanceamento químico, desenvolvido pelo aluno Eliel das Virgens da turma 2017.1 no Instituto Federal de Educação, Ciência e Tecnologia Baiano - Campus Senhor do Bonfim.
        </Text>

        <Pressable
        style={{
            backgroundColor: '#795548',
            padding: 10,
            marginTop: '50%',
            borderRadius: 25,
            width: '70%',
            alignItems: 'center',
        }}
        onPress={() => navigation.goBack()}
        >
            <Text style={{color:"#212121",fontWeight:"600", textAlign: 'center', fontSize: 25}}>Voltar ao Menu</Text>
        </Pressable>

      </View>
    );
  };

export default AboutScreen;