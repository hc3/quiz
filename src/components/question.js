import React, { useEffect, useState } from 'react';
import { Text, View } from "react-native";

import FillValuesQuestion from "./fill_values_question";
import MultipleChoiceQuestion from "./multiple_choice_question";

const Question = ({ question, onAnswered, onTimeIsOver }) => {
    const { title, options, type, correctAnswer, maxSpendTime } = question;
    let [ spendTime, setSpendTime ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            spendTime += 1;
            setSpendTime(spendTime);
            if(spendTime >= maxSpendTime) {
                clearInterval(interval);
                onTimeIsOver();
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [maxSpendTime])

    const handleAnsweredMultipleChoiceQuestion = (userResponse) => {
        onAnswered(userResponse === correctAnswer);
    }

    const handleAnsweredFillValuesQuestion = (userResponse) => {
        const answer = userResponse.every((value, index) => value === correctAnswer[index]);
        onAnswered(answer);
    }

    const renderQuestionByType = () => {
        switch (type) {
            case 'MULTIPLE_CHOICE_QUESTION':
                return <MultipleChoiceQuestion options={options} onAnswered={handleAnsweredMultipleChoiceQuestion}/>;
            case 'QUESTION_FILL_VALUES':
                return <FillValuesQuestion options={options} onAnswered={handleAnsweredFillValuesQuestion} />;
            default: 
                return <Text>Tipo de pergunta não suportado.</Text>;
        }
    }
    return (
        <View>
            <Text>Tempo restante: {Number(maxSpendTime - spendTime)} segundos.</Text>
            <Text
            style={{
                textAlign: "justify",
                paddingTop: 50,
                paddingLeft: 10,
                paddingRight: 10,
                color: "#212121",
                fontSize: 25,
                fontWeight: "600",
            }}
            > {title} </Text>
            {renderQuestionByType()}
        </View>
    )
}

export default Question;

// const styles = StyleSheet.create({
//     textRules: {
//       marginLeft: 4,
//       color: "#212121",
//       fontSize: 16,
//       fontWeight: "500",
//     }
//   });