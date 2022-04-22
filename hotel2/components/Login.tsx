import React, { Component } from "react";
import { View, TextInput, StyleSheet, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import i18n from '../localization/local';
import LangData from '../data/SetDataLang';

interface Props {
    Auth:Function
}

interface State {
  UserName:string
  UserPass:string
  selectedLanguage:string
}

export default class Login extends Component <Props,State> {
  constructor(props: Props) {
    super(props);  
    this.state = { 
      UserName:'',
      UserPass:'',
      selectedLanguage: i18n.locale
    }
  } 

  setAuth=(UserName:string)=>{
    this.props.Auth(true, UserName)
  }
  setSelectedLanguage=(t:any)=>{
    this.setState({selectedLanguage:t}) 
    i18n.locale = t;
    if (t=='ru-RU') LangData.setRu()
    if (t=='en-EN') LangData.setEn()
  }

  render() {
    return ( 
      <View style={styles.container}>        
        <View style={styles.separator} /> 
        <TextInput
          style={styles.input}          
          placeholder={i18n.t('enterYourName')}
          onChangeText={ newText=>this.setState({UserName:newText}) }
        /> 
        <TextInput
          secureTextEntry={true} style={styles.input}
          placeholder={i18n.t('enterYourPass')}
          onChangeText={ newText=>this.setState({UserPass:newText}) }
        />       
        {(this.state.UserName>'')&&(this.state.UserPass>'')&&<View style={{flexDirection:'row', margin:10}}>
          <Button
            title={i18n.t('login')}
            color="#99a"
            onPress={()=>this.setAuth(this.state.UserName)}
          />    
        </View>}
        <Picker
          style={{fontSize:14, margin:10, padding:10, width:120, backgroundColor:'#ccd', color:'#888', borderColor:'#000'}}
          selectedValue={this.state.selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
          this.setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="English" value="en-EN" />
          <Picker.Item label="Русский" value="ru-RU" />          
        </Picker>
      </View>
      );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccd',
        width:'100%',
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:160
      }
  });


