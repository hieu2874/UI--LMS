import { createContext, useContext, useState, useEffect } from "react";
const LmsContext = createContext();

export function LmsProvider({ children }) {
    const [query, setQuery] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);


    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("favorites");
        return saved ? JSON.parse(saved) : {};
    });
    
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    },[favorites]);
     
    const toggleFavorite = (id, type) => {
        const key = `${type}-${id}`;
        setFavorites((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const favoritesCount = Object.values(favorites).filter(Boolean).length;

    return (
        <LmsContext.Provider
         value={{
            query,
            setQuery,
            selectedItem,
            setSelectedItem,
            favorites,
            toggleFavorite,
            favoritesCount,
         }}
        >
            {children}
        </LmsContext.Provider>
    );
}

export function useLmsContext() {
    return useContext(LmsContext);
}