import { Component } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Image, Text, StyleSheet } from 'react-native';

interface Props {
  data :{ id:string,
    title:string,
    images:string,
    about:string,
    rooms:{
      id:number,
      roomAbout:string,
      free:boolean,
      cost:number
      }[] 
    }, 
  selectedIdHotels:Function  
}
interface State {     
  
}
  
export default class HotelsItem extends Component <Props, State> {
  constructor(props: Props) {
    super(props);  
    this.state = {       
      modalRoomsWindow:false 
    }     
  }

  selectedIdHotels = (id:number) => {     
    this.props.selectedIdHotels(id);
  }  
  
  render() {
    return <View style={styles.container} >
          <Image
            source={{ uri: this.props.data.images}}  
            style={ styles.images }
          />      
          <Text style={{margin:10, width:180, fontWeight:'bold'}}>{this.props.data.title}</Text>
          <Text style={{margin:20, width:200}}>{this.props.data.about}</Text>
          <View style={{flexDirection:'row'}}>         
            <FontAwesome size={25} style={{padding:10}} name="home" color='#000' onPress={()=>this.selectedIdHotels(parseInt(this.props.data.id))}   />   
          </View>
    </View>
  }
} 

const styles = StyleSheet.create({
  container: {
    margin:20, 
    //padding:20,
    borderWidth:1, 
    borderColor:'#000', 
    shadowColor:'#99a',
    shadowRadius:20, 
    borderRadius:2,
    alignItems:'center',
    backgroundColor:'#99a'
  },
  about:{
    margin:'10%', 
    backgroundColor:'#fff', 
    borderColor:'#000', 
    borderWidth:1,
    borderRadius:5
  },
  images:{ 
    width:'100%', 
    height:200,
    backgroundColor:'#ccf', 
    borderColor:'#000',
    borderBottomWidth:1,    
  }
});