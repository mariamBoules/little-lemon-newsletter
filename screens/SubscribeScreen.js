import * as React from "react";
import { useState } from "react";
import {
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import { validateEmail } from "../utils";


const button = {
  fontSize: 22,
  padding: 10,
  marginVertical: 30,
  margin: 50,
  borderWidth: 2,
  borderRadius: 12,
}
const subscribeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 150,
    width: 150,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 100,
  },
  input: {
    height: 60,
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    borderColor: "#556B2F",
  },
  enabledButton: {
    ...button,
    backgroundColor: "#556B2F",
    borderColor: "#556B2F",
  },
  disabledButton: {
    ...button,
    backgroundColor: "#dddddd",
    borderColor: "#dddddd",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
  },
  normalText: {
    textAlign: "center",
    fontSize: 22,
    color: "#2F4F4F",
    paddingBottom: 30,
  },
});

const SubscribeScreen = () => {
  const [email, onchangeEmail] = useState("");
  return (
    <KeyboardAvoidingView
      style={subscribeStyles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 80}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        keyboardDismissMode="on-drag"
      >
        <>
          <Image
            style={subscribeStyles.logo}
            source={require("../assets/little-lemon-logo-grey.png")}
            resizeMode="contain"
          />
          <Text style={subscribeStyles.normalText}>
            Subscribe to our newsletter for our latest delicious new recipes !
          </Text>

          <TextInput
            style={subscribeStyles.input}
            value={email}
            onChangeText={onchangeEmail}
            placeholder="Type your e-mail"
            placeholderTextColor={"grey"}
            keyboardType="email-address"
          />

          {validateEmail(email) && (
            <Pressable
              onPress={() => {
                Alert.alert("Thanks for Subscribing, Stay Tuned !");
              }}
              style={subscribeStyles.enabledButton}
            >
              <Text style={subscribeStyles.buttonText}>Subscribe</Text>
            </Pressable>
          )}
          {!validateEmail(email) && (
            <Pressable
              disabled={true}
              style={subscribeStyles.disabledButton}
            >
              <Text style={subscribeStyles.buttonText}>
                Subscribe
              </Text>
            </Pressable>
            
          )}
        </>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SubscribeScreen;
