import { Alert, Pressable, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import FillValuesQuestionOption from './fill_values_question_option';
import Icon from 'react-native-vector-icons/FontAwesome';

const build = (options) => {
  return options.reduce((initial, item, index) => {
      if (item.includes('?')) {
          initial[index] = null;
      }
      return initial;
      }, {});
}
const FillValuesQuestion = ({ options, onAnswered }) => {
  const [inputValues, setInputValues] = useState({});

  useEffect(() => {
    setInputValues(build(options))
  }, [options])

  const handleVerification = () => {
    const answers = Object.values(inputValues).map(Number);
    if(answers.includes(0)) {
      Alert.alert('Erro', 'Algum campo não foi preenchido corretamente.');
      return;
    }
    onAnswered(answers);
  };

  return (
    <View style={{paddingTop: 30, paddingLeft: 10, paddingRight: 10}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        {options.map((option, index) => <FillValuesQuestionOption option={option} index={index} inputValues={inputValues} key={index} /> )}
      </View>
      <View style={{paddingTop: 50}}>
        <Pressable
        onPress={handleVerification}
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
          <Icon name="flask" size={30} color="#212121" style={{ marginRight: 10 }} />
          <Text style={{color:"#212121",fontWeight:"600", textAlign: 'center', fontSize: 25}}>Verificar Balanceamento</Text>
        </Pressable>
      </View>
    </View>
  );
};


export default FillValuesQuestion;
