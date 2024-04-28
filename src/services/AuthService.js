import $api from "../http";

export default class AuthService {
    static async login(phone_number, password) {
        return $api.post('/users/login', {phone_number, password})
    }

    static async registration(first_name, last_name, phone_number, password) {
        return $api.post('/users/register', {
            first_name,
            last_name,
            phone_number,
            password,
            role: "requester"
        })
    }

}