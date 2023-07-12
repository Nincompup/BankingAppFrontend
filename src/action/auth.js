import * as api from "../api/index.js";

export const login = async (formData, navigate) => {
    console.log(formData);
    try{
        const {data} = await api.login(formData);
        // dispatch({type:AUTH, payload:data});

        navigate('/');
        return data;
    }catch(err){
        console.log(err);
    }
};

export const register = async(formData, navigate)  => {
    try{

        const {data} = await api.register(formData);
        // dispatch({type:AUTH, payload:data});
        navigate('/');
        return data;
    }catch(err){
        console.log(err);
    }

};