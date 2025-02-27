import { createContext } from 'react'

export const WebPageProvider = createContext()

export const WebProvider = ({children}) => {

    return (
        <WebPageProvider.Provider value={{}}>
            {children}
        </WebPageProvider.Provider>
    )
}