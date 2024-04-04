import React, {createContext} from 'react'
import { useState } from 'react'

export const SelectionContext = createContext("");

export default function SelectionContextProvider({children}) {
    
    const [selected, setSelected] = useState("");

    const value = {
        selected,
        setSelected
    }

    return (
        <SelectionContext.Provider value={value}>
            {children}
        </SelectionContext.Provider>
  )
}
