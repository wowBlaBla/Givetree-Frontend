import { createContext, FC, useContext, useState } from "react";

interface ContextInterface {
    openAuthModal?: boolean;
    setOpenAuthModal?: any;
}

const AppContext = createContext<ContextInterface>({});

interface Props {
    children?: any;
}

export const AppWrapper:FC<Props> = ({ children }) => {
    const [openAuthModal, setOpenAuthModal] = useState(false);

    const context = {
        openAuthModal,
        setOpenAuthModal
    };

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext) as ContextInterface;
}