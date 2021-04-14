import api from '../api';
import * as paths from '../paths';

export const getMenu = async () => {
   return await api.get(paths.menu)
};
