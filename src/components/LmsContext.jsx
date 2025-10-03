import { createContext, useContext, useReducer, useState, useEffect } from "react";
const LmsContext = createContext();

function favoritesReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_FAVORITE": {
            const key = `${action.payload.type}-${action.payload.id}`;
            return {
                ...state,
                [key]: !state[key],
            };
        }
        case "CLEAR_FAVORITES":
            return {};
        case "LOAD_FAVORITES":
            return action.payload || {};
        default:
            return state;
    }
}

export function LmsProvider({ children }) {
    const [query, setQuery] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);

    const [favorites, dispatch] = useReducer(favoritesReducer, {}, () => {
        const saved = localStorage.getItem("favorites");
        return saved ? JSON.parse(saved) : {};
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (id, type) => {
        dispatch({ type: "TOGGLE_FAVORITE", payload: { id, type } });
    };
    const clearFavorites = () => {
        dispatch({ type: "CLEAR_FAVORITES" });
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
                clearFavorites,
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