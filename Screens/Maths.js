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
    ScrollView} from 'react-native';
    import MyHeader from '../components/MyHeader'
import db from '../config';
import firebase from 'firebase';

export default class Maths extends Component {
  render(){
    return (
      <View style={{flex:1}}>
        <MyHeader title="Maths Page" navigation ={this.props.navigation}/>

        <Text>Maths</Text>
     
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
  });