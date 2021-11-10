import axios from 'axios';

export default class BaseApi {
  constructor () {

    this.axios = axios.create({
      // baseURL: '//178.172.136.145:3000/',
      baseURL: 'https://backend.gastrosoft.by/',
    });

  }
}
