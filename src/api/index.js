import axios from "axios";

const API = axios.create({baseURL:"https://cbankindia.onrender.com/api"});


export const fetchdetails=()=>API.get("/details");
export const createtransaction=(senderacc,trandata)=> API.post(`/details/transactions/${senderacc}`, trandata);
export const transfermoney=(senderacc,recieveracc,data)=> API.patch(`/details/${senderacc}/${recieveracc}`, data);
export const fetchtransactions = () => API.get("/details/transactions");
