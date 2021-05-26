import api from './api';

const submit = async (book) => {

  return await api.post('/book', book).then(result => {

    const book = result.data?.book;
    if (!book) return alert('Server error');

    return book;

  }).catch((e) => {
    console.log('====================================');
    console.log(e);
    console.log('====================================');
    return alert('Backend application error');
  })

}

const get = async (query) => {

  return await api.get('/book', {
    params: {
      query
    }
  }).then(result => {

    const books = result.data?.books;
    if (!books) return alert('Cannot get books');

    return result.data;

  }).catch((e) => {
    console.log('====================================');
    console.log(e);
    console.log('====================================');
    return alert('Backend application error');
  })

}

export {
  submit,
  get
}