import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

export default function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you would typically perform authentication logic
    // For simplicity, let's just print the username and password
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset input fields after login attempt
    setUsername('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../asset/images/splash.png')}
        style={styles.img}
      />

      <Text style={styles.title}>Expedition Management System</Text>
      <Text style={styles.sii}>login with username and password</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeStack')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.haveAccountText}>
          Don't have an account? Register
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
    top: -120,
  },
  sii: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
    top: -100,
    right: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 20,
    color: 'orange',
    top: -140,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    top: -80,
  },
  button: {
    height: 40,
    width: '55%',
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    top: -40,
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
    fontWeight: '500',
    top: -20,
    alignSelf: 'center',
  },
});
