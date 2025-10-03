import { useReducer, useEffect, useCallback } from "react";

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

export default function useFavorites(initialFavorites = {}) {
    const [favorites, dispatch] = useReducer(favoritesReducer, initialFavorites, () => {
        const saved = localStorage.getItem("favorites");
        return saved ?  JSON.parse(saved): initialFavorites;
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

   const handleToggleFavorite = useCallback((id, type) => {
        dispatch({ type: "TOGGLE_FAVORITE", payload: { id, type } });
    }, []);

    const handleClearFavorites = useCallback(() => {
        dispatch({ type: "CLEAR_FAVORITES" });
    }, []);
    
    const favoritesCount = Object.values(favorites).filter(Boolean).length;

    return { favorites, 
        toggleFavorite: handleToggleFavorite, 
        clearFavorites: handleClearFavorites, 
        favoritesCount 
    };

}















