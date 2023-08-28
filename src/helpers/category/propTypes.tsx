
export interface NavProps {
    category?: Category,
    label: string,
    isActive: boolean,
    onClick: () => void,

}

export interface Category {
    menu_category: string;
    category_dishes: Dish[],
}


export interface Dish {
    dish_id: string,
    dish_name: string,
    dish_image: string,
    dish_description: string,
    dish_calories: number,
    dish_currency: string,
    dish_price: number,
    dish_Type: number,
    dish_Availability: boolean,
    addonCat: AddonCat[],
}

export interface AddonCat {
    addonCat: boolean
}

export interface IsDishAvailable {
    dish_Availability: boolean
}

