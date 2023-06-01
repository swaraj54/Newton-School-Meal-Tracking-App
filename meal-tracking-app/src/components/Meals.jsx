import React, { useState } from 'react';
import { useMeal } from '../context/mealContext';

const Meals = () => {
    const { updateCounterByRemove, updateCounterByAdd, counter } = useMeal();
    const [prevStateFor1, setPrevStatefor1] = useState(true);
    const [prevStateFor2, setPrevStatefor2] = useState(true);
    const [prevStateFor3, setPrevStatefor3] = useState(true);
    function handleChangeFor1() {
        if (prevStateFor1) {
            updateCounterByRemove()
            setPrevStatefor1(false);
        } else {
            updateCounterByAdd()
            setPrevStatefor1(true);
        }
    }
    function handleChangeFor2() {
        if (prevStateFor2) {
            updateCounterByRemove()
            setPrevStatefor2(false);
        } else {
            updateCounterByAdd()
            setPrevStatefor2(true);
        }
    }
    function handleChangeFor3() {
        if (prevStateFor3) {
            updateCounterByRemove()
            setPrevStatefor3(false);
        } else {
            updateCounterByAdd()
            setPrevStatefor3(true);
        }
    }
    return (
        <div style={{ width: "30%", margin: "auto" }}>
            <ul>
                <li style={{ height: '40px' }}>
                    <div style={{ display: 'flex', }}>
                        <input onChange={handleChangeFor1} type='checkbox' />
                        <p>Baked Beans</p>
                    </div>
                </li>
                <li style={{ height: '40px' }}>
                    <div style={{ display: 'flex', }}>
                        <input onChange={handleChangeFor2} type='checkbox' />
                        <p>Baked Sweet Potatoes</p>
                    </div>
                </li>
                <li style={{ height: '40px' }}>
                    <div style={{ display: 'flex', }}>
                        <input onChange={handleChangeFor3} type='checkbox' />
                        <p>Baked Potatoes</p>
                    </div>
                </li>
            </ul >
        </div >
    )
}

export default Meals