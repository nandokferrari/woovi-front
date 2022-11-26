import React, { createContext, useEffect } from 'react';

interface IContext {
    selectedItem: number | null;
    handleSelection: (choice: number) => void;
}

const InitialState = {
    selectedItem: null,
    handleSelection: (choice: number) => {},
};

export const OptionContext = createContext<IContext>(InitialState);

export const OptionProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedItem, setSelectedItem] = React.useState<number | null>(
        InitialState.selectedItem
    );

    const handleSelection = (choice: number) => {
        setSelectedItem(choice);
    };

    const Output = {
        selectedItem,
        handleSelection,
    };

    return (
        <OptionContext.Provider value={Output}>
            {children}
        </OptionContext.Provider>
    );
};
