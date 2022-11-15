import './App.css';
import React,{useState} from 'react'

export default function App() {
  let count = 0
  const [count2,setCount2] = useState(0)
  const increase = () =>{
    count = count+1  // state를 update 하기 위해 함수 전체가 다시 진행되므로 0으로 초기화 된다.
    setCount2(count2+1)
    console.log("count work?",count,"state Count2",count2)
  }
  return (
    <main>
      <div>{count}</div>
      <div>state:{count2}</div>
      <button onClick={increase}>증가</button>
    </main>
  )
}


// state 변수값들은 비동기적이다. 함수가 전체가 끝나야 변수값이 한번에 변경된다.