import { useDispatch, useSelector } from "react-redux";
import { changeCounter, decreaseCounter, increaseCounter } from "../store/slices/counter";

export function useCounter() {
    const counter = useSelector((state) => state.counter.counter)
    const dispatch = useDispatch()

    const increase = () => {
        dispatch(increaseCounter())
    }

    const decrease = () => {
        dispatch(decreaseCounter())
    }

    const change = (val) => {
        dispatch(changeCounter(val))
    }

    return [counter, increase, decrease, change]
}