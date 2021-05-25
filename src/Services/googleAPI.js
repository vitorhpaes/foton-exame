import axios from 'axios';

const api = axios.create({
  baseURL: "https://www.googleapis.com/books/v1"
});

const getVolumes = async (query) => {
  return api.get('volumes', {
    params: {
      q: query
    }
  }).then(result => {
    return result.data;
  }).catch(err => {
    console.error(err);
    return [];
  });
};

export {
  getVolumes
}