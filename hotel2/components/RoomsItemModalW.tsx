import React, { Component } from "react";
import { View,StyleSheet, Modal, Text, Pressable, TextInput } from 'react-native';
import i18n from '../localization/local';

interface Props {  
  showWin:boolean
  close:Function
}

interface State {

}

export default class RoomsItemModalW extends Component <Props,State> {
  constructor(props: Props) {
    super(props);  
    this.state = { }
  } 

  setClose=()=>{
    this.props.close()    
  }
 
  setBooked=()=>{
    alert('Номер забронирован')
    this.props.close()
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
          <Text style={styles.modalText}>Забронировать номер?</Text>
        </View>

        <View style={{flexDirection:'row'}}>
        <Pressable
          style={[styles.button]}
          onPress={() => this.setBooked()}
         >
          <Text style={styles.textStyle}>Да</Text>
         </Pressable>
         <Pressable
          style={[styles.button]}
          onPress={() => this.setClose() }
         >
          <Text style={styles.textStyle}>Отмена</Text>
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
  },    
    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ccd',  
  },
  modalView: {
    margin: 20,      
    backgroundColor: "#dde",
    borderRadius: 5,
    padding: 5,
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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    margin:12, 
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
});