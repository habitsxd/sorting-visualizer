import React, { useState, useEffect } from "react";
import "./SortingVisualizer.css"

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [animations, setAnimations] = useState([]);
  const [barColors, setBarColors] = useState(Array(array.length).fill('initial'));


  function resetArray() {
    const newArray = [];
    for (let i = 0; i < 100; i++) {
      newArray.push(randomIntFromInterval(5, 500));
    }
    setArray(newArray);
  }

  useEffect(() => {
    resetArray();
  }, []);

  function bubbleSort() {
   //todo
}

  function mergeSort() {
    // Implementation of merge sort
  }

  function quickSort() {
    // Implementation of quick sort
  }

  function heapSort() {
    // Implementation of heap sort
  }

  return (
    <>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className= "array-bar"
            key={idx}
            style={{ height: `${value}px`, backgroundColor: barColors[idx] }}
          ></div>
        ))}
      </div>
      <div className="buttons-container">
        <button className="button1" onClick={() => resetArray()}>
          Generate New Array
        </button>
        <button className="button1" onClick={() => mergeSort()}>
          Merge Sort
        </button>
        <button className="button1" onClick={() => heapSort()}>
          Heap Sort
        </button>
        <button className="button1" onClick={() => quickSort()}>
          Quick Sort
        </button>
        <button className="button1" onClick={() => bubbleSort()}>
          Bubble Sort
        </button>
      </div>
    </>
  );
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


export default SortingVisualizer;
