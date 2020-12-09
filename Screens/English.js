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

export default class English extends Component {
  render(){
    return (
      <View style={{flex:1}}>
        <MyHeader title="English Page" navigation ={this.props.navigation}/>

        <Text>English</Text>
     
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