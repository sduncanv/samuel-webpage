import { createContext } from 'react'

export const WebPageProvider = createContext()

export const StoreProvider = ({children}) => {

    return (
        <WebPageProvider.Provider value={{}}>
            {children}
        </WebPageProvider.Provider>
    )
}