import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import styles from '../styles/registerStyle';
import { RootStackParamList } from '../types/navigationTypes';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'register'>;

const RegisterScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    // Aqui você pode validar e salvar os dados
    console.log('Usuário registrado:', { fullName, email, phone });
    navigation.navigate('login');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/money-track-logo-2.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        placeholderTextColor="#adff2f"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#adff2f"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Número de celular"
        placeholderTextColor="#adff2f"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar-se</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Text style={styles.loginLink}>
          Já tem uma conta? <Text style={styles.linkText}>Faça login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default RegisterScreen;
