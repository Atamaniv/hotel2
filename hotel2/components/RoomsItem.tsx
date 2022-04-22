import { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Modal from './ModalW'

interface Props {
    rooms:{
      id:number,
      roomAbout:string,
      free:boolean,
      cost:number
      }    
}

interface State {     
  
}
  
export default class HotelsItem extends Component <Props, State> {
  constructor(props: Props) {
    super(props);  
    this.state = {       
      
    }     
  }

  setModalRoomsVisible = (visible:boolean) => {    
    this.setState({ modalRoomsWindow: visible });
  }  
  
  showNomer=()=>{
    
  }

  render() {
    return (
    <View style={styles.container}>
      <View style={{ flexDirection:'row', maxWidth:'100%'}}>

      <View style={{width:100}}> 
      <Button 
        title={this.props.rooms.free?'Доступен':'Занят'} 
        color={this.props.rooms.free?'#445':'#aab'} 
        onPress={this.props.rooms.free?()=>this.showNomer:()=>alert('Номер занят')}
        />
      </View>

        <Text style={{fontWeight:'bold'}}>  {this.props.rooms.id}.  </Text>
        <Text style={{}}>{this.props.rooms.roomAbout}</Text>  
      </View>           
    </View>
    )
  }
} 

const styles = StyleSheet.create({
  container: {    
    padding:2,
    marginLeft:5,
    marginRight:5,
    marginBottom:5,
    borderWidth:1, 
    borderColor:'#fff', 
    shadowColor:'#aab',
    shadowRadius:10, 
    borderRadius:1,
    alignItems:'flex-start',
    flexDirection:'row',
    backgroundColor:'#ccd',
  }
});