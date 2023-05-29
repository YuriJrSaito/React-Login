import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: {id:1, name: 'yuri', email: 'yur@gmail.com'}
        };
        const response = await api.post('/validate', {token});
        return response.data;
    },
    signin: async (email:String, password:string) =>{
        return {
            user: {id:1, name: 'yuri', email: 'yur@gmail.com'},
            token: '12341321'
        };
        const response = await api.post('/signin', {email, password});
        return response.data;
    },
    signup: async (name:string, email:string, password:string) =>{
        return true;
        const response = await api.post('/signin', {email, password});
        return response.data;
    },
    logout: async () =>{
        return { status: true };
        const response = await api.post('./logout');
        return response.data;
    }
});