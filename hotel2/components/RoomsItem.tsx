import { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import i18n from '../localization/local';
import RoomsItemModalW from '../components/RoomsItemModalW';

interface Props {
  rooms:{
    id:number,
    roomAbout:string,
    free:boolean,
    cost:number
    },
  balance:number
}

interface State {     
  roomsModalShow:boolean  
}
  
export default class RoomsItem extends Component <Props, State> {
  constructor(props: Props) {
    super(props);  
    this.state = {       
      roomsModalShow:false
    }     
  }

  closeModal=(fio:string)=>{
    this.setState({roomsModalShow:false});    
  }

  showNomer=()=>{
    this.setState({roomsModalShow:true});
  }

  render() {
    return (
    <View style={styles.container}>
      <RoomsItemModalW 
          showWin={this.state.roomsModalShow}           
          close={this.closeModal}>
      </RoomsItemModalW>

      <View>
      <View style={{width:200, alignItems:'center'}}>
        <Image
            source={{ uri: 'https://t-cf.bstatic.com/xdata/images/hotel/square200/241061327.webp?k=0701744b305243b8d79b97d59f2e1940782e27a60985bd5bf14e1e438362b43c&o=&s=1'}}  
            style={{width:200, height:200,backgroundColor:'#ccf', borderWidth:1, borderColor:'#fff', borderRadius:5  }}        
        />  
        <Text style={{margin:10}}>
          {this.props.rooms.roomAbout}
        </Text>
        <Text style={{margin:10}}>
          {i18n.t('price')+':'+this.props.rooms.cost+' $'}
        </Text>        
        <View style={{width:'100%'}}>
          <Button // BUSY / FREE button room
          title={this.props.rooms.free?((this.props.rooms.cost<=this.props.balance)?i18n.t('free'):i18n.t('notenoughmoney')):i18n.t('busy')}
          color={this.props.rooms.free?((this.props.rooms.cost<=this.props.balance)?'#5f912d':'#334'):'#bf6969'}
          onPress={this.props.rooms.free?((this.props.rooms.cost<=this.props.balance)?()=>this.showNomer():()=>alert(i18n.t('hack'))):()=>alert(i18n.t('roomsbusy'))}
          />    
        </View>    
        </View>  
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
    flexWrap:'wrap'
  }
});