import axios from 'axios';
import * as Cookie from 'js-cookie';

export default class BaseApi {
  constructor () {

    this.axios = axios.create({
      // baseURL: '//178.172.136.145:3000/',
      baseURL: 'https://backend.gastrosoft.by/',
      headers: {'Authorization' : `Bearer ${Cookie.get('token')}`}
    });

  }
}
