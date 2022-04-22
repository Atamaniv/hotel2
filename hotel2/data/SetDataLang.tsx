import { DATAen } from '../data/dataHotelsEn';
import { DATAru } from '../data/dataHotelsRu';

class LangData {  

  DATA:{ id:string,
    title:string,
    images:string,
    about:string,
    rooms:{
      id:number,
      roomAbout:string,
      free:boolean,
      cost:number
      }[] } [ ]  = DATAen;
  
   setRu=()=>{ this.DATA = DATAru }
   setEn=()=>{ this.DATA = DATAen }

}

export default new LangData;