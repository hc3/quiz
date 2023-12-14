import { Box, Button, Center, Flex, FormControl, HStack, Heading, Input, Link, Text, VStack } from 'native-base';
import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement your login logic here (e.g., API call)
    alert(`Logging in with email: ${email}, password: ${password}`);
  };

  const handleGoogleLogin = async () => {
    try {
      alert(`Logged in with Google.`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Center w="100%" paddingTop={"30%"}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
          Bem vindo.
        </Heading>
        <Heading mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
          Faça login para continuar!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl isRequired>
            <FormControl.Label>Email</FormControl.Label>
            <Input type='email' value={email} onChangeText={(v) => setEmail(v)}/>
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>Senha</FormControl.Label>
            <Input type="password" value={password} onChangeText={(v) => setPassword(v)}/>
            <Link _text={{ fontSize: "xs", fontWeight: "500", color: "indigo.500" }} alignSelf="flex-end" mt="1">
              Esqueceu a senha?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleLogin}>
            Entrar
          </Button>
          <Button mt="2" colorScheme="red" onPress={handleGoogleLogin}>
            <Flex direction='row' alignItems="center">
              <Icon name="google" size={20} color="white" style={{ marginRight: 10 }} />
              <Text color="white">Google Login</Text>
            </Flex>
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
              Eu sou um novo usuário.{" "}
            </Text>
            <Link _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm"
            }} onPress={() => navigation.navigate('CreateStudent')}>
              Cadastrar
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default LoginScreen;