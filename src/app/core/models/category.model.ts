import { z } from 'zod';
import { categorySchema } from '../schemas/category.schema';

export type Category = z.infer<typeof categorySchema>;

export const categories: Category[] = ['MEAT', 'FISH', 'FRUIT', 'VEGETABLE', 'DAIRY', 'GROCERY', 'OTHER'];

export function getCategoryName(category: Category): string {
  switch (category) {
    case 'MEAT':
      return 'Meat';
    case 'FISH':
      return 'Fish';
    case 'FRUIT':
      return 'Fruit';
    case 'VEGETABLE':
      return 'Vegetable';
    case 'DAIRY':
      return 'Dairy';
    case 'GROCERY':
      return 'Grocery';
    case 'OTHER':
      return 'Other';
  }
}
