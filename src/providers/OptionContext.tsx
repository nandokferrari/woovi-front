import React, { createContext, useEffect } from 'react';

export interface IPaymentOption {
    installments: number;
    amount: number;
    total: number | null;
    cashback?: number;
    banner?: { title: string; message: string };
}

interface IContext {
    selectedItem: IPaymentOption | null;
    handleSelection: (chosenItem: IPaymentOption) => void;
}

const InitialState = {
    selectedItem: null,
    handleSelection: (chosenItem: IPaymentOption) => {},
};

export const OptionContext = createContext<IContext>(InitialState);

export const OptionProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedItem, setSelectedItem] =
        React.useState<IPaymentOption | null>(InitialState.selectedItem);

    const handleSelection = (chosenItem: IPaymentOption) => {
        setSelectedItem(chosenItem);
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
