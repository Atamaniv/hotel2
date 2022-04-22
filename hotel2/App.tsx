import { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Button } from 'react-native';
import Login from './components/Login';
import Hotels from './components/Hotels';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from './localization/local';
import LangData from './data/SetDataLang';
import Rooms from './components/Rooms';
import ModalW from './components/ModalW';


const storeData = async (value:string) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value)
  } catch (e) {
    // saving error
  }
}

interface Props {

}

interface State {
  UserName: string
  UserPass: string
  UserFIO:string
  UserBalance:number
  Auth: boolean
  Lang: string  
  Page:number
  IdHotels:number
  modalText:number
  modalShow:boolean
}

class App extends Component < Props , State >  {
  constructor(props: Props) {
    super(props);
    this.state = { 
      UserName: '',
      UserFIO:'',
      UserPass: '',
      Auth: false,
      Lang:'en-EN',
      Page:1,
      IdHotels:1,
      UserBalance:500,
      modalText:0,
      modalShow:false,
    } 
    this.getData() 
  }

  updateData = (value:boolean, name:string) => {
    this.setState({ Auth: value, UserName: name })
    storeData(name)
  }

  updateIdHotelsShowRooms = (id:number) => {
    this.setState({IdHotels:id,Page:2})
  }

  updateDataLang = (L:string) => {
    this.setState({ Lang: L })    
   }
  
  getData = async () => {
    const value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null&&value !== '') 
      {
        this.setState({UserName:value, Auth:true}) 
      }
  }

  exit=()=>{
    this.setState({ Auth: false, UserName: '' })  
    storeData('')
  }

  updatePage=(p:number)=>{    
    this.setState({ Page: p })
  }

  closeModal=(fio:string)=>{
    this.setState({modalShow:false});
    this.setState({UserFIO:fio});
  }
  
  changeBalance=(value:number)=>{
    this.setState({UserBalance:value});    
  }

  render() {       
    return (
      <SafeAreaView  style={styles.container}>
        {!this.state.Auth&&<Login Auth={this.updateData}  />}
        <ModalW 
          showWin={this.state.modalShow} 
          Balance={this.state.UserBalance} 
          close={this.closeModal} 
          changeBalance={this.changeBalance} 
          fio={this.state.UserFIO}>
        </ModalW>

        {this.state.Auth&&this.state.Page==1&& 
          <View style={[styles.row,{paddingTop:30,height:90}]}>
            <Button title={this.state.UserName+'  '+this.state.UserBalance+'$'} color='#223' 
                    onPress={()=>this.setState({modalShow:true, modalText:this.state.UserBalance})}/>
          </View>}
        {this.state.Auth&&this.state.Page==1&& <Hotels selectedIdHotels={this.updateIdHotelsShowRooms} lang={i18n.locale} page={this.updatePage}/>}
        {this.state.Auth&&this.state.Page==2&& <Rooms rooms={LangData.DATA[this.state.IdHotels-1].rooms} balance={this.state.UserBalance} />}
        {this.state.Auth&&this.state.Page==1&& <View style={styles.row}><Button title={i18n.t('exit')} color='#223' onPress={()=>this.exit()}/></View>}
        {this.state.Auth&&this.state.Page==2&& <View style={styles.row}><Button title={i18n.t('close')} color='#223' onPress={()=>this.setState({Page:1})}/></View>}
      </SafeAreaView >
    )
  }}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccd',  
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {      
      width:'100%'   
    },
  });

  export default App;


