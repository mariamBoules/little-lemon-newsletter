import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';


const welcomeStyles = StyleSheet.create({
  container:{
    flex: 1,
  },
  logo: {
    height: 175,
    width: 175,
    borderRadius: 20,
    alignSelf: 'center',
    paddingTop: 500,
  },
  infoText:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 50,
    backgroundColor: "#F4CE14",
    borderColor: "#F4CE14",
    borderWidth: 2,
    borderRadius: 12,
  },
})

const Spacer = ({ height }) => <View style={{ height }} />;

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <View style={welcomeStyles.container}>
      <Image 
      style={welcomeStyles.logo}
      source={require('../assets/little-lemon-logo.png')}
      resizeMode='contain'
      />
      <Text style={welcomeStyles.infoText}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Spacer height= {30} />
      <Pressable onPress={()=>{
    navigation.navigate("Subscribe");
  }}
  style={welcomeStyles.button}>
    <Text style={welcomeStyles.infoText}>
    Newsletter
    </Text>
    
  </Pressable>
  </View>;

};

export default WelcomeScreen;
