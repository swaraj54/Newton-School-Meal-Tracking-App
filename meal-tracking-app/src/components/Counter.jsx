import React from 'react';
import { useMeal } from './../context/mealContext';

const Counter = () => {

    const { updateCounter, counter } = useMeal();

    return (
        <div>Meal Remaining : {counter}</div>
    )
}

export default Counter