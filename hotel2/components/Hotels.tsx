import React, { Component } from "react";
import { ScrollView, StyleSheet,  View } from 'react-native';
import HotelsItem from './HotelsItem';
import LangData from '../data/SetDataLang';

interface Props {
  lang:string
  selectedIdHotels:Function
  page:Function
}

interface State {
    selectedIdHotels:number
}

export default class Hotels extends Component <Props,State> {
  constructor(props: Props) {
    super(props);  
    this.state = { 
      selectedIdHotels:1
    }     
    if (this.props.lang=='ru-RU') LangData.setRu()
    if (this.props.lang=='en-EN') LangData.setEn()
  } 

  setIdHotels=(id:number)=>{
    this.props.selectedIdHotels(id)
  }

  setPage=()=>{
    this.props.page(2)
  }

  render() {
    return ( 
      <ScrollView style={styles.scrollview} >
        <View style={styles.container}>
          { LangData.DATA.map((i) => <HotelsItem selectedIdHotels={this.setIdHotels} data={i} key={i.id}/>) }           
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  scrollview: {
    flex:1,
    width:'100%'
  },
  container: {
    flex: 1,
    width:'100%',
    alignItems: 'center',    
    backgroundColor:'#ccd',   
    flexWrap:'wrap',
    flexDirection:'row', 
    alignContent: 'flex-start',    
    justifyContent:'center',  
  },
});