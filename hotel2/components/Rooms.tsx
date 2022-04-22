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
    }[],
    balance:number
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
          <Text style={styles.headText}>{i18n.t('rooms')+'         '+i18n.t('balance')+':'+this.props.balance+'$'}</Text>
          <View style={styles.container}>          
           { this.props.rooms.map((i) => <RoomsItem rooms={i} key={i.id} balance={this.props.balance}/>) }
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
    alignItems: 'center',    
    backgroundColor:'#ccd',   
    flexWrap:'wrap',
    flexDirection:'row', 
    alignContent: 'flex-start',
    width:'100%',
    justifyContent:'center',
      
  },
  headText:{
    fontSize:20,
    fontWeight:'bold',
    margin:20
  }
});