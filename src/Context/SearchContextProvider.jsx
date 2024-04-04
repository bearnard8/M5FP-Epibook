import React, {createContext} from 'react'
import { useState } from 'react'

export const SearchContext = createContext("");

export default function SearchContextProvider({children}) {
    
    const [searchValue, setSearchValue] = useState("");

    const value = {
        searchValue,
        setSearchValue
    }

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
  )
}
