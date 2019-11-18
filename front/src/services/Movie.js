import axios from "axios";
const API_URL = "http://localhost:3000/";
export default {
    get: function (id) {
        return new Promise((resolve, reject) => {
            var url = ""
            if (id) {
                url = API_URL.concat("getMovie/", id);
            } else {
                url = API_URL.concat("getMovies/");
            }
            axios
                .get(url)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject("Something goes wrong : ", error.message);
                });
        });
    },
    add: function (movie) {
        return new Promise((resolve, reject) => {
            axios
                .post(API_URL.concat("addMovie/"), movie)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject("Something goes wrong : ", error.message);
                });
        });
    },
    edit: function (movie) {
        return new Promise((resolve, reject) => {
            axios
                .post(API_URL.concat("editMovie/"), movie)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject("Something goes wrong : ", error.message);
                });
        });
    },
    delete: function (id) {
        return new Promise((resolve, reject) => {
            axios
                .delete(API_URL.concat('deleteMovie/', id))
                .then(resolve())
                .catch(error => {
                    reject("Something goes wrong : ", error.message);
                });
        });
    }
}