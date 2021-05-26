import axios from 'axios';

const api = axios.create({
  baseURL: "https://www.googleapis.com/books/v1"
});

const getVolumes = async (query) => api.get('volumes', {
  params: {
    q: query
  }
}).then(result => {
  return result.data;
}).catch(err => {
  console.error(err);
  return [];
});

const getBook = async (bookId) => api.get(`volumes/${bookId}`).then(result => {
  return result.data;
}).catch(err => {
  console.error(err);
  return [];
});

export {
  getVolumes,
  getBook
}