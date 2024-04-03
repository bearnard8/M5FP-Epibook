import React, {createContext} from 'react'
import { useState } from 'react'

export const SearchContext = createContext(null);

export default function SearchContextProvider({children}) {
    
    const [searchValue, setSearchValue] = useState(null);

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
