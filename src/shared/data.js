import * as axios from 'axios';

import { format } from 'date-fns';
import { inputDateFormat } from './constants';

import { API } from './config';

const getDays = async function () {
  // cant just return this, because its not what we want
  // return response.data;
  // but what if there is bad data in the response?
  // let data = response.data;
  // Let's parse it better
  try {
    const response = await axios.get(`${API}/days.json`);

    let data = parseList(response);

    const days = data.map(d => {
      //d.date = format(d.date, inputDateFormat); // THIS WILL CONVERT TO YYYY-MM-DD
      d.monies = d.monies.map(m => {
        m.dateAdded = format(m.dateAdded, inputDateFormat);
        return m;
      });
      return d;
    });
    return days;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const parseList = response => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== 'object') {
    list = [];
  }
  return list;
};

export const data = {
  getDays,
};
