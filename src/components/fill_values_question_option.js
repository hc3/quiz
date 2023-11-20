import { Text, TextInput, View } from 'react-native';

import React from 'react';

const FillValuesQuestionOption = ({ option, index, inputValues }) => {

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
};


export default FillValuesQuestionOption;
