import React, {Component} from 'react';
import { TouchableOpacity, Text, Button, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { TextInput } from "react-native";
import AntiClippyHalf from './AntiClippyHalf';
import * as Animatable from 'react-native-animatable'

// init.startApp();

// App.initializeApp();

const goToGitInit = () => {
   Actions.gitInit()
}

export default class InputBox extends Component {

  constructor(props){
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }
  
render(){
   return (
      <View style={StyleSheet.absoluteFill}>
      <View style={styles.main}>
      <View style={styles.container}>
      <View style={styles.textBox1}>
      <View style={styles.circle}>
      <Animatable.View animation="fadeInDown"><AntiClippyHalf style={styles.AntiClippyHalf}/></Animatable.View>
      <Animatable.Text animation="rubberBand"><Text style={styles.title}>GitGoing</Text></Animatable.Text>
      </View>
      
      </View> 
      <TouchableOpacity style = {{ marginTop: 250 }}> 
    
         <Button 
         style={styles.bottom}
         onPress = {goToGitInit}
         title= "GitGoing to Git Init"
         color='#FF6D70'
         />  
      </TouchableOpacity>
      <Text style={styles.p}>Would you like to learn more?</Text>
      </View>
      </View>
      </View>
   )
}
}
const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  main:{
    flex: 1
  },
   container: {
      flex: 1,
      backgroundColor: '#4A4843',
      alignItems: "center",      
    },
    
   title: {
      color: '#FF6D70',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginTop: 0,
    marginBottom: 0,
   },
   //white circle
  circle: {
   backgroundColor: '#fff',
   width: 400,
   height: 400,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 200,
   borderColor: '#4A4843',
   borderWidth: 25,
   marginTop:220,
   
 },
 //brown box
 textBox1: {
   backgroundColor: '#A79B82',
   width: 500,
   height: 350,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 30,
   marginTop: 50,
 },

//logo
 AntiClippyHalf: {
   flex: 1
 },

 //username
 textInput1: {
   color: 'black',
   borderWidth: 2,
   borderColor: 'black',
   backgroundColor: '#FFF',
   borderRadius: 20,
   width: 200,
   marginTop: 0,
   alignItems: 'center',   
   
 },

 //password
 textInput: {
   color: 'black',
   borderWidth: 2,
   borderColor: 'black',
   backgroundColor: '#FFF',
   borderRadius: 20,
   width: 200,
   marginTop: 10,
   marginBottom: 20,
   alignItems: 'center',
 },

 p:{
    color: 'white',
 },


 });
