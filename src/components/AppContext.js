import React from "react"

/**
 * @type {AppState}
 */
const initialState = {
	loadingAppState: true,

	setAppState: () => void 0
}

/**
 * @type {React.Context<AppState>}
 */
const AppContext = React.createContext({ ...initialState })

export const init = (defaultState = {}) => ({
	...initialState,
	...defaultState
})

export const useAppContext = () => React.useContext(AppContext)

export default AppContext
