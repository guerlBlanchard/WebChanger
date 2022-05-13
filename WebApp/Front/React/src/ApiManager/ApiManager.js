import axios from "axios";
import { useEffect } from "react";

let user_url = "http://localhost:8080"

// export function ApiManager() {
//     function ApiLogin(username, password) {
//         axios({
//             method: 'post',
//             url: user_url + "/user/",
//             body: {
//               username: username,
//               password: password
//             }
//           }).then(res => {
//             console.log(res);
//             return res;
//           }).catch(err => {
//             return err;
//         })
//     }
// }