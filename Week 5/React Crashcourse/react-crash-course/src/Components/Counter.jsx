import "./Counter.css";
import React, { useState } from "react";

function Counter() {

  //Counter type A
  /*const [count, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((x) => x + 1);
  }

  function decrementCounter() {
    setCounter((prevCounter) => prevCounter - 1);
  }

  console.log(count);
  return (
    <div>
      <div className="btn-wrapper">
        <button onClick={decrementCounter} className="btn btn-minus">
          {" "}
          -{" "}
        </button>
        <div>{count}</div>
        <button onClick={incrementCounter} className="btn btn-plus">
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  ); */

  // Counter type B

 /* const [cart, setCart] = useState ({
    item: "apple",
    quantity: 0
  })

  function addApple (){
    setCart(prevCart =>({
      ...prevCart,
      quantity: prevCart.quantity + 1

    }))
  }

  function removeApple (){
    setCart(prevCart =>({
      ...prevCart,
      quantity: prevCart.quantity - 1

    }))
  }

  return (
    <div>
      <div className="btn-wrapper">
        <button onClick={removeApple} className="btn btn-minus">
          {" "}
          -{" "}
        </button>
        <div>{cart.item}
        {cart.quantity}
        </div>
        <button onClick={addApple} className="btn btn-plus">
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );*/

  const [arr , setArr] = useState([])
  
  function addPlus(){
    setArr(prevArr => [...prevArr, "+"])


  }

  function addMinus(){
    setArr(prevArr => [...prevArr, "-"])
  }

  return (
    <div>
      <div className="btn-wrapper">
       <button onClick={addMinus}>-</button>
       <button onClick={addPlus}>+</button>
       {arr}
      </div>
    </div>
  )

}

export default Counter;
