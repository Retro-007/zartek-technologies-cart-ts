/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { API_URL } from "../api"
import { Categories } from "../helpers/category/providerTypes"
import { ActiveCategory, AllData, DataProviderProps, Title } from '../helpers/data/providerTypes';

export function useData() {
    return useContext(DataContext)
}

type DataContext = {
    getAllData: () => AllData[]
    getTitle: () => string
    getCategories: () => Categories[]
    handleActiveCategory: (menu_category_id: string) => void
    getActiveCategory: () => string | ActiveCategory
}

const DataContext = createContext({} as
    DataContext
)

export function DataProvider({ children }: DataProviderProps) {
    const [data, setData] = useState<AllData[]>([]);
    const [title, setTitle] = useState<Title | null>(null);
    const [categories, setCategoreis] = useState<Categories[]>([]);
    const [activeCategory, setActiveCategory] = useState<ActiveCategory | string>("");

    useEffect(() => {
        // Fetch data from API
        fetch(API_URL)
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setTitle(json[0])
                setCategoreis(json[0].table_menu_list)
                setActiveCategory(json[0]?.table_menu_list[0].menu_category_id);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    //functions
    const handleActiveCategory = (category: string) => {
        setActiveCategory(category);
    };

    const getAllData = () => data;

    const getTitle = () => title ? title?.restaurant_name : '';

    const getCategories = () => categories;

    const getActiveCategory = () => activeCategory ? activeCategory : "";


    //assigning variable to context
    const contextValue = useMemo(() => ({
        getAllData,
        getTitle,
        getCategories,
        getActiveCategory,
        handleActiveCategory,
    }), [data, activeCategory]);

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
}