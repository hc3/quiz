import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';

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

  const RenderOption = (option, index) => {
    return (
        <View style={{ flexDirection: 'row', marginVertical: 7 }} key={index}>
            { option.includes('?') ? 
                <TextInput
                    style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    padding: 8,
                    marginRight: 5,
                    marginLeft: 5,
                    width: 40,
                    height: 40
                    }}
                    value={inputValues[index]}
                    onChangeText={(value) => setInputValues({ ...inputValues,[index]: value })}
                    keyboardType="numeric"
                    fontSize={20}
                /> : null
            }
            <Text style={{fontSize:25, paddingLeft: 2, paddingRight: 2 }}>{option.replace('?', '')}</Text>
        </View>
    )
  }

  return (
    <View style={{paddingTop: 30, paddingLeft: 10, paddingRight: 10}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        {options.map((option, index) => (RenderOption(option,index)))}
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
