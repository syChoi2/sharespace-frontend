import axios from 'axios';

//api url
const USERS_REST_API_URL = 'http://localhost:8080/api/users';

class UserService{

    getUsers(){
        //get call
        return axios.get(USERS_REST_API_URL);
    }
}

//export object of this class
//create new object of this class
export default new UserService();