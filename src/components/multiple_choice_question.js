import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';

const MultipleChoiceQuestion = ({ options, onAnswered }) => {
  const data = options.map((el, index) => ({ id: index, value: el }));
  
  const handleOptionPress = (optionId) => {
    onAnswered(optionId);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        padding: 10,
        backgroundColor: '#FFD740',
        borderRadius: 5,
        marginVertical: 5,
      }}
      onPress={() => handleOptionPress(item.id)}
    >
    <Text style={{
      fontSize: 21,
      textAlign: "center",
      fontWeight: "600"
    }}>{item.value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{
      paddingTop: 20,
      paddingLeft: 15,
      paddingRight: 15
    }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MultipleChoiceQuestion;