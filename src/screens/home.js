import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react";
import headerImage from '../../assets/header.png'
import questions from '../../assets/data.json';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#FFEB3B", height: "100%"}}>
      <Image
        style={{ height: 350, width: "100%", resizeMode: "contain" }}
        source={headerImage}
      />

      <View style={{ padding: 5 }}>
        <Text
          style={{
            textAlign: "center",
            color: "#212121",
            fontSize: 25,
            fontWeight: "600",
            paddingBottom: 25
          }}
        >
          REGRAS DO JOGO.
        </Text>

        <View
          style={{
            padding: 10,
            backgroundColor: "#795548",
            borderRadius: 6,
            marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text style={styles.textRules} >
              Para cada resposta certa você ganha 1 ponto.
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text style={styles.textRules} >
              Não há perca de pontos para respostas erradas.
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text style={styles.textRules} >
              Cada questão tem um tempo limite.
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text style={styles.textRules} >
              Você deve responder a todas as perguntas.
            </Text>
          </View>
        </View>
      </View>

      <Pressable
      onPress={() => navigation.navigate("Game", { questions: questions})}
        style={{
          backgroundColor: "#795548",
          padding: 10,
          width:"70%",
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Icon name="gamepad" size={30} color="#212121" style={{ marginRight: 10 }} />
        <Text style={{color:"#212121",fontWeight:"600", textAlign: 'center', fontSize: 25}}>Iniciar</Text>
      </Pressable>

        <Pressable
        onPress={() => navigation.navigate("About")}
          style={{
            backgroundColor: "#795548",
            padding: 10,
            width:"70%",
            borderRadius: 25,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
        <Icon name="bookmark" size={30} color="#212121" style={{ marginRight: 10 }} />
        <Text style={{color:"#212121",fontWeight:"600", textAlign: 'center', fontSize: 25}}>Sobre</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textRules: {
    marginLeft: 4,
    color: "#212121",
    fontSize: 16,
    fontWeight: "500",
  }
});