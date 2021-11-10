import BaseApi from "./BaseApi";

class ApplicationApi extends BaseApi {

    sendForm(data) {
        return this.axios.post('/landing/form', data);
    }
}

export default new ApplicationApi();
