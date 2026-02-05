import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCounter, decreaseCounter, increaseCounter } from '../../store/slices/counter'

export default function Home() {

  const counter = useSelector((state) => state.counter.counter)
  const dispatch = useDispatch()

  const handleChange = () => {
    dispatch(changeCounter(10))
  }

  const increase=()=>{
    dispatch(increaseCounter())
  }
  const decrease=()=>{
    dispatch(decreaseCounter())
  }

  return (
    <>
      <h1>Home</h1>
      <h4>Counter is : {counter}</h4>
      <button className='btn btn-primary' onClick={() => { handleChange() }}>change counter</button>
      <button className='btn btn-success' onClick={()=>{increase()}}>+</button>
      <button className='btn btn-danger' onClick={()=>{decrease()}}>-</button>

    </>

  )
}



// theme  >> light  ,  dark