import { IProductBottles, IProductCategory } from '../types/api.types';
import { IProduct } from '../types/types';

import { api } from './config.api';

export const getProductCategories = async (): Promise<IProductCategory[]> => {
  return await api.get('products/categories').json();
};

export const getProductBottles = async (): Promise<IProductBottles[]> => {
  return await api.get('products/bottles').json();
};

export const getProductsByCategory = async (category: string): Promise<IProduct[]> => {
  return await api.get('products/filterByCategory/' + category).json();
};

