import { useData } from "../context/DataContext";
import { useState, useEffect } from 'react';
import { Dish } from "../helpers/category/propTypes";

export const useActiveCategoryDishes = () => {

    const { getActiveCategory, getCategories } = useData();

    const activeCategory = getActiveCategory();

    const categories = getCategories();

    const [categoryDishes, setCategoryDishes] = useState<Dish[]>([]);


    useEffect(() => {

        categories?.find((element) => {
            if (element?.menu_category_id === activeCategory) {
                setCategoryDishes(element?.category_dishes)
            }
        })
    }, [activeCategory, categories]);

    return { categoryDishes, categories };
};