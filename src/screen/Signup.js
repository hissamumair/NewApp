import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

export default function Signup({navigation}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    setEmail('');
    setName('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../asset/images/splash.png')}
        style={styles.img}
      />

      <Text style={styles.title}>Expedition Management System</Text>
      <Text style={styles.sii}>Sign up with a new account</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={Signup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.haveAccountText}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  img: {
    width: '80%',
    height: '40%',
    alignSelf: 'center',
    top: -60,
  },
  sii: {
    fontSize: 17,
    color: 'black',
    fontWeight: '900',
    top: -70,
    right: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 20,
    color: 'orange',
    top: -90,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    top: -50,
  },
  button: {
    height: 40,
    width: '55%',
    backgroundColor: 'orange',
    paddingVertical: 10,

    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    top:-40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  haveAccountText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '900',
    top:-30,
  },
});
