import { ImageBackground, Pressable, Text, View } from 'react-native';

import React from 'react'
import calculateScore from '../utils/calculateScore';
import { useNavigation } from "@react-navigation/native";

const StatisticScreen = ({ route: { params: { playerStatistics } } }) => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
            source={require('../../assets/end_game_background.png')}
            style={{
                flex: 1,
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
              }}
            >
                <Text style={{
                    paddingTop: "70%",
                    textAlign: "justify",
                    paddingRight: 20,
                    paddingLeft: 20,
                    fontSize: 25
                }}>De um total de {playerStatistics.totalQuestions} você acertou {playerStatistics.correctAnswered} contabilizando um total de {calculateScore(playerStatistics)}%.
                </Text>

                <Pressable
                    onPress={() => navigation.navigate("Home")}
                        style={{
                        backgroundColor: "#795548",
                        padding: 10,
                        width:"70%",
                        borderRadius: 25,
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "65%",
                        }}
                    >
                        <Text style={{color:"#212121",fontWeight:"600",textAlign:"center", fontSize: 25}}>Reiniciar</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

export default StatisticScreen