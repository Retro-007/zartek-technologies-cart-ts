import { Dish } from './propTypes';

export type Categories = {
    label: string,
    menu_category: string,
    category_dishes: Dish[],
    menu_category_id: string,

}