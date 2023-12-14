import { Box, Button, Center, FormControl, Heading, Input, VStack } from 'native-base';
import React, { useState } from 'react';

import authentication from '../services/authentication'
import { useNavigation } from "@react-navigation/native";

const CreateStudentScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleCreateUser = async () => {
        if(confirmPassword !== password || (!confirmPassword || !password) ) {
            console.error('A senha e a confirmação de senha devem ser identicas.');
            return;
        }
        await authentication.createStudent(email, password);       
    }

    return (
        <Center w="100%" paddingTop={"30%"}>
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{ color: "warmGray.50" }} fontWeight="semibold">
          Cadastrar novo usuário
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{ color: "warmGray.200" }} fontWeight="medium" size="xs">
          preencha seus dados para continuar.
        </Heading>
        <VStack space={3} mt="5">
          <FormControl isRequired>
            <FormControl.Label>Email</FormControl.Label>
            <Input type='email' value={email} onChangeText={(v) => setEmail(v)}/>
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" value={password} onChangeText={(v) => setPassword(v)}/>
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" value={confirmPassword} onChangeText={(v) => setConfirmPassword(v)} />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleCreateUser}>
            Cadastrar
          </Button>

          <Button mt="2" colorScheme="danger" onPress={() => navigation.navigate('Login')}>
            Voltar
          </Button>
        </VStack>
      </Box>
    </Center>
    )
}

export default CreateStudentScreen;