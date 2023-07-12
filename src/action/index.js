import * as api from '../api/index'

 
     
export const omkidetails=async()=>{
    try{
        const {data}=await  api.fetchdetails() ;
        // setUsers(data);
        
        return data;

    }
    catch(rishav){
        console.log(rishav);
    }
 }

 export const createTransaction = async (senderacc, trandata) => {
    try {
        const newtrans = await api.createtransaction(senderacc, trandata);
        return newtrans;
      
    } catch (error) {
      console.log(error);
    }
  };

  export const TransfferMoney = async (data) => {
    try {
      const msg = await api.transfermoney(data.senderacc,data.recieveracc,data);
      return msg.data;
    } catch (error) {
      console.log(error);
    }
  };

  export const TransactionDetails = async () => {
    try {
      const { data } = await api.fetchtransactions();
      console.log(data)
      return data;
     
    } catch (rishav) {
      console.log(rishav);
    }
  };

  