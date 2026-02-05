import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCounter, decreaseCounter, increaseCounter } from '../../store/slices/counter'
import Button from '../../components/Button'
import { useCounter } from '../../hooks/useCounter'

export default function Home() {

  const [counter,increase,decrease,change]=useCounter()
  return (
    <>
      <h1>Home</h1>
      <h4>Counter is : {counter}</h4>
      <button className='btn btn-primary' onClick={() => { change(10)}}>change counter</button>
      <button className='btn btn-success' onClick={() => { increase() }}>+</button>
      <button className='btn btn-danger' onClick={() => { decrease() }}>-</button>
      <hr />

      {/* <Button>
        <h1>Click</h1>
      </Button>
      <Button>
        <span>Mona</span>
      </Button>
      <Button>
        <img src='' />
      </Button> */}

    </>

  )
}



// theme  >> light  ,  dark