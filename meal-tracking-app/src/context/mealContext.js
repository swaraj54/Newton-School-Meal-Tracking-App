import { createContext, useContext, useState } from "react";


const MealContext = createContext();

export const useMeal = () => {
    return useContext(MealContext);
}


export const MealProvider = ({ children }) => {
    const [counter, setCounter] = useState(3);

    const updateCounterByRemove = () => {
        setCounter((prev) => prev - 1);
    }
    const updateCounterByAdd = () => {
        setCounter((prev) => prev + 1);
    }

    return (
        <MealContext.Provider value={{ updateCounterByRemove,updateCounterByAdd, counter }}>
            {children}
        </MealContext.Provider>
    )

}
