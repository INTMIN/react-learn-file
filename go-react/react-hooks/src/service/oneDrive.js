import request from '../utils/request';
import {stringify} from 'qs';
import {proxyData} from '@/utils/proxy';

export async function getListData(params) {
  return request.get(`${proxyData}/list?${stringify(params)}`);
}
