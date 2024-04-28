import $api from "../http";

export default class HelpService {
    static async post_help_request(title, text, extra_text, phone_number, is_volunteer) {
        console.log({title, text, extra_text, phone_number, is_volunteer})
        return $api.post('/help-requests', {title, text, extra_text, phone_number, is_volunteer})
    }

    static async get_help_requests(limit, offset) {
        return $api.get(`/help-requests?offset=${offset}&limit=${limit}`)
    }

    static async get_my_help_requests() {
        return $api.get(`/help-requests/mine?limit=${1000}`)
    }

}