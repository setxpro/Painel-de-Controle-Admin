import axios from "axios"

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});
// const apiProdutos = axios.create({
//     baseURL: process.env.REACT_APP_PRODUCTS
// });

export const useApi = () => ({
    // Validação do TOKEN

    validateToken: async (token: string) => {

        return {
            user: { id: 1, name: 'Patrick', email: 'patrick@mail.com' }
        }; // FAKE

        const response = await api.post('/validate', token);
        return response.data;
    },

    ///

    signin: async(email: string, password: string) => {

        return {
            user: { id: 1, name: 'Patrick', email: 'patrick@mail.com' },
            token: '15614856484'
        };  // FAKE

        const response = await api.post('/signin', { email, password });
        return response.data;
    },
    logout: async() => {
        return {status: true} // FAKE

        const response = await api.post('/logout');
        return response.data;
    }
});

