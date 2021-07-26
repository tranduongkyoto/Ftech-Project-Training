import ProvideState from "./ProvideState";
import AppContext from "./AppContext";
export default function AppProvider({ children }) {
    const state = ProvideState();
    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}


