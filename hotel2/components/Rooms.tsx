import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import RoomsItem from './RoomsItem';
import i18n from '../localization/local'; 

interface Props {
  rooms:{
    id:number,
    roomAbout:string,
    free:boolean,
    cost:number
    }[]
}

interface State {

}

export default class Rooms extends Component <Props,State> {
  constructor(props: Props) {
    super(props);  
    this.state = {  }
  } 

  render() {
    return (       
        <ScrollView style={styles.scrollview}>
          <View style={styles.scrollview}>
          <Text style={styles.headText}>{i18n.t('rooms')}</Text>
          { this.props.rooms.map((i) => <RoomsItem rooms={i} key={i.id}/>) }
          </View>
        </ScrollView>      
      );
    }
};

const styles = StyleSheet.create({
  scrollview: {
    width:'100%',
    backgroundColor:'#ccd' 
  }, 
  container: {
    margin:20, 
    padding:20,
    borderWidth:1, 
    borderColor:'#fff', 
    shadowColor:'#aab',
    shadowRadius:10, 
    borderRadius:5,
    alignItems:'center',
    backgroundColor:'#99a'
  },
  headText:{
    fontSize:20,
    fontWeight:'bold',
    margin:20
  }
});