import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  var username = "";
  var password = "";
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {/* takes one third of the page */}
      </View>
      <View style={styles.mainContainer}>
        {/* Main content of the page with button and text */}
        <Text style={styles.loginTitle}>Login</Text> 
        {/*TODO change font style (size and style) */}
        <View style={styles.input}>
          <AntDesign name="user" size={24} color={colorScheme.textColorDark} style={{paddingRight:8}}></AntDesign>
          <TextInput placeholder='Username' onChange={loginTextInput} style={{width: '100%'}}></TextInput>
        </View>
        <View style={styles.input}>
          <AntDesign name="lock" size={24} color="black" style={{paddingRight:8}}></AntDesign>
          <TextInput placeholder='Password' secureTextEntry={true} onChange={loginTextInput} style={{width: '100%'}}></TextInput>
        </View>
        
        <TouchableOpacity title='submit' style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 15}}>
          <Text style={{fontSize: 16}}> Don't have an account?</Text>
          <Text style={{color: '#ffc77f', fontSize: 16}}> Sign Up </Text>
        </View>


      </View>
      <View style={styles.bottomContainer}>
        {/* Last third of the page, which will only have register button in the bottom */}
      </View>
    </View>
  );
}

function loginTextInput(value) {
  username = value
}
const colorScheme = {
  textColorDark: '#252520',
  textColorLight: 'white',
  backgroundColor: '#fffbf7',
  primaryColor:  '#ff9000',
  shadows: '#fff5e8'
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: colorScheme.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1
  },
  mainContainer: {
    flex:2,
    width: '80%'
    
  },
  bottomContainer: {
    width: '80%',
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 30
  },
  input: {
    marginBottom:10,
    elevation: 0.2,
    padding:10,
    borderRadius: 10,
    backgroundColor: '#fff5e8',
    flexDirection:'row'
  },
  loginButton: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colorScheme.primaryColor,
    alignItems: 'center'
  },
  registerButton: {
    marginVertical: 10,
    borderWidth: 0.2,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  loginButtonText: {
    color: 'white',
  },
  loginTitle: {
    fontSize: 40,
    paddingBottom: 35,
    color: '#252520'
  }
});


