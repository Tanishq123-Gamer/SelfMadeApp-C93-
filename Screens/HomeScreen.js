import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView, ImageBackground} from 'react-native';
    import MyHeader from '../components/MyHeader'
import db from '../config';
import firebase from 'firebase';
import { RFValue } from "react-native-responsive-fontsize";

export default class HomeScreen extends Component {
  render(){
    return (
      <View style={{flex:1}}>
        <MyHeader title="Home Page" navigation ={this.props.navigation}/>
        
        <ImageBackground source={require("../assets/flowerbackimg.jpg")} style={{width:"100%", height:"100%", alignItems:"center"}}>
        <Text style={{color: "#32867d", fontSize:20, fontWeight:"bold",justifyContent:"center"}}>It shouldn't matter how slowly a child learns as long as we are encouraging them not to stop. </Text>
        
        <View style={{flex:0.5,  alignItems:"center",}}>
          <TouchableOpacity
            style={styles.button}
           
          >
            <Text style={styles.buttonText}>Animal Sound</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
           
          >
            <Text style={styles.buttonText}>Maths</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
           
          >
            <Text style={styles.buttonText}>English</Text>
          </TouchableOpacity>

          </View>

         
        </ImageBackground>
      
     
      </View>
    );
  }
  
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      width: "80%",
      height: RFValue(50),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: RFValue(25),
      backgroundColor: "#ffff",
      shadowColor: "#000",
      marginBottom:RFValue(10),
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText: {
      color: "#32867d",
      fontWeight: "200",
      fontSize: RFValue(20),
    },
  });