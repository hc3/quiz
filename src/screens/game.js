import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import Question from '../components/question';
import calculateScore from "../utils/calculateScore";
import { useNavigation } from "@react-navigation/native";

const GameScreen = ({ route: { params: { questions } } }) => {
    const navigation = useNavigation();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [question, setQuestion] = useState(questions[0]);
    const [totalQuestions] = useState(questions.length);
    const [totalAnswer, setTotalAnswer] = useState(0);
    const [correctAnswered, setCorrectAnswered] = useState(0);

    const getPlayerStatistics = () => {
        return { correctAnswered, totalAnswer, name: 'Bliu', totalQuestions }
    }

    const handleAnsweredQuestion = (isCorrectAnswer) => {
        const _currentQuestion = currentQuestion + 1
        let _correctAnswered = correctAnswered;
        setCurrentQuestion(_currentQuestion);
        if(isCorrectAnswer) {
            _correctAnswered += 1;
            setCorrectAnswered(_correctAnswered);
        }
        setTotalAnswer(totalAnswer + 1);

        if(_currentQuestion >= totalQuestions) {
            return navigation.navigate('Statistic', { playerStatistics: { correctAnswered: _correctAnswered, totalQuestions: totalQuestions } });
        }
        setQuestion(questions[_currentQuestion])
    }

    const handleTimeIsOver = () => {
        handleAnsweredQuestion(false);
    }

    return (
        <View style={{ flex: 1}}>
            <ImageBackground
            source={require('../../assets/game_background.png')}
            style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'cover' }}>

                <View style={{marginTop: "15%"}}>
                <Pressable
                    onPress={() => navigation.navigate("Home")}
                    style={{
                        backgroundColor: "#FFEB3B",
                        // width:"70%",
                        borderRadius: 25,
                        marginLeft: "auto",
                        marginRight: "5%",
                        marginTop: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: 'red'
                    }}
                    >
                    <Icon name="power-off" size={30} color="red" style={{ margin: 5 }} />
                    <Text style={{color:"red",fontWeight:"600", textAlign: 'center', padding: 5}}>sair</Text>
                </Pressable>
                </View>

                <View style={style.statistics}>
                    <Text style={style.statisticsText}>
                        Total respondido: {totalAnswer}.
                    </Text>
                    <Text style={style.statisticsText}>
                        Total de questões: {totalQuestions}.
                    </Text>
                    <Text style={style.statisticsText}>
                        Percentual de acertos: {calculateScore(getPlayerStatistics())}%
                    </Text>
                </View>
                <Question question={question} onAnswered={handleAnsweredQuestion} onTimeIsOver={handleTimeIsOver} />

            </ImageBackground>
        </View>
    );
}

export default GameScreen;

const style = StyleSheet.create({
    statistics: { borderRadius: 10, borderWidth: 2, borderColor: '#795548', marginLeft:"10%", marginRight: "10%", marginTop: "5%", textAlign: 'center', justifyContent: 'center' },
    statisticsText: { textAlign: "center", paddingTop: "1%", fontSize: 20, color: "#212121" }
})