import axios from 'axios';
import { toast } from 'react-toastify';

////////////////////////////////
/* setup default Axios behavior for each action , post, get put and delete actions */
//axios.defaults.headers.post['Content-Type'] = 'x-www-form-urlencoded';
axios.interceptors.request.use(async (request) => {
    // document.body.classList.add('loading-indicator');
    let token = localStorage.getItem('token');
    if (token) {
        request.headers['Authorization'] = `Bearer ${token}`;
    }
    return request;
});
////////////////////////////////



axios.interceptors.response.use(function (response) {
    // document.body.classList.remove('loading-indicator');
    return response;
}, function (error) {
    // document.body.classList.remove('loading-indicator');
    //TODO if error token expiered refresh token
    toast.error(error.response?.data?.error);
    console.log('API response error', error.response?.data?.error);
    throw error
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch,
    head: axios.head,
};