import React from 'react'
import { useDispatch } from 'react-redux';
import { increaseCounterAction, decreaceCounterAction } from '../../redux/actions/counterAction';
import { useSelector } from 'react-redux';


const Counter = () => {
    const { counterState } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const increase = () => {
        dispatch(increaseCounterAction(counterState + 1))
    }

    const decrease = () => {
        dispatch(decreaceCounterAction(counterState - 1))
    }

    return (
        <div>
            <button onClick={increase}>+</button>
            <span>{counterState}</span>
            <button onClick={decrease}>-</button>
        </div>
    )
}

export default Counter
