import axios from "axios";
const API_URL = "http://localhost:3000/";
export default {
    getMovie: function (id) {
        return new Promise((resolve, reject) => {
            axios
                .get(API_URL.concat("getMovie/", id))
                .then(response => {
                    resolve(response.data);
                })
                .catch(() => {
                    reject("Oups something goes wrong");
                });
        });
    }
}