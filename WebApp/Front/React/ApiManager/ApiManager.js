import axios from "axios";

let user_url = "http://localhost:8080"

export class ApiManager {

    ApiLogin(username, password) {
        axios({
            method: 'post',
            url: user_url + "/user/",
            body: {
              username: username,
              password: password
            }
          }).then(res => {
            console.log(res);
            return res;
          }).catch(err => {
            return err;
        })
    }
}