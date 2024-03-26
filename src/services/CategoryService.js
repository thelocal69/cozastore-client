import Http from '../config/Http';

export const getAllCategory = () => {
    return Http.get(`/api/category/getAll`);
}