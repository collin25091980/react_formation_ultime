import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://formation-react-11a45-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;
