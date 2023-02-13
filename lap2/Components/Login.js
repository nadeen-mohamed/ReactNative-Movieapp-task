import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Formik } from "formik";



import * as Yup from "yup";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
export default function Login({navigation}) {
  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/images.png")} /> 
      <StatusBar style="auto" />
     
       <Formik
            initialValues={{email: "", name: ""}}
            validationSchema= {Yup.object({
                name: Yup.string()
                  .max(15, 'Must be 15 characters or less')
                  .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
              })}
              onSubmit ={(values) => {
                navigation.navigate("Films")
              }}
            // onsubmit 
            >
            { props => (
                
                <View> 
                    <TextInput onChangeText={props.handleChange("email")} placeholder="enter email"  style={styles.inputView}/> 

                    { props.touched.email && props.errors.email ? (<Text style={styles.error}>{ props.errors.email} </Text> ) : null}

                    <TextInput onChangeText={props.handleChange("name")} placeholder="enter name"  style={styles.inputView} /> 

                    { props.touched.name && props.errors.name ? (<Text style={styles.error}>{ props.errors.name} </Text> ) : null}
                    <TouchableOpacity  onPress={props.handleSubmit}  style={styles.loginBtn}>
        <Text style={styles.loginText} >LOGIN</Text> 
      </TouchableOpacity>
               
                </View>


            )}


            </Formik>
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    width:500,
    height:200
  },
  inputView: {
    backgroundColor: "white",
    color:'orange',
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  error: {
  color:'red',
  fontSize:20,
  alignItems:'center',
  marginLeft: 70,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginLeft: 20,
    color:'white',
    backgroundColor: "orange",
    width: "90%",
  },
});