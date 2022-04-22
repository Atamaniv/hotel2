import React, { Component } from "react";
import { View,StyleSheet, Modal, Text, Pressable, TextInput } from 'react-native';
import i18n from '../localization/local';

interface Props {  
  showWin:boolean  
  Balance:number 
  fio:string
  close:Function  
}

interface State {
  fio:string
}

export default class ModalW extends Component <Props,State> {
  constructor(props: Props) {
    super(props);  
    this.state = { fio : this.props.fio }
  } 

  setClose=()=>{
    this.props.close(this.state.fio)    
  }
  
  render() {
    return ( 
      <Modal
      style={styles.modalView}
      animationType="fade"
      transparent={false}
      visible={this.props.showWin}
      onRequestClose={() => {           
        this.setClose() 
      }}
      >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}          
            placeholder={'ФИО'}
            defaultValue={this.props.fio}
            onChangeText={ newText=>this.setState({fio:newText}) }
          /> 
          <View style={{flexDirection:'row'}}>
            <Text style={styles.modalText}>{i18n.t('balance')}:</Text>
            <Pressable
              style={[styles.smallButton]}
              onPress={() => this.setClose() }
            >
              <Text style={styles.textStyle}>-</Text>
            </Pressable>               
            <Text style={styles.modalText}>{this.props.Balance}</Text>
            <Pressable
            style={[styles.smallButton]}
            onPress={() => this.setClose() }
          >
            <Text style={styles.textStyle}>+</Text>
          </Pressable>             
          </View>            
          <Pressable
            style={[styles.button]}
            onPress={() => this.setClose() }
          >
            <Text style={styles.textStyle}>ok</Text>
          </Pressable>          
        </View>
      </View>
    </Modal>       
      );
    }
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:100,
    height:100,
    backgroundColor:'#f00'
  },     centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ccd',  
  },
  modalView: {
    margin: 20,      
    backgroundColor: "#dde",
    borderRadius: 5,
    padding: 35,
    alignItems: "center",      
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 5,
    padding: 4,      
    elevation: 2,
    minWidth:100,
    backgroundColor:'#223',
    borderWidth: 1,
    borderColor:'#ccd',
    height:34
  },
  smallButton: {
    borderRadius: 15,
    margin:10,      
    elevation: 2,
    width:25,
    height:25,
    backgroundColor:'#778',
    borderWidth: 1,
    borderColor:'#ccd'
  },  
  textStyle: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    margin:12, 
  },
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:160
  }
  
});