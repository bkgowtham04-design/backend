import React, { useState } from 'react'
import '..componets/array.css'

const array = () => {
  const [activeMethod, setActiveMethod] = useState('map')
  const [demoArray, setDemoArray] = useState([1, 2, 3, 4, 5])
  const [demoResult, setDemoResult] = useState(null)

  // Basic Array Methods
  const arrayMethods = {
    // Higher-Order Array Methods
    map: {
      description: 'Creates a new array by applying a function to each element',
      example: 'arr.map(x => x * 2)',
      execute: () => {
        const result = demoArray.map(x => x * 2)
        setDemoResult(`Original: [${demoArray}] → Mapped: [${result}]`)
      }
    },
    filter: {
      description: 'Creates a new array with elements that pass a test',
      example: 'arr.filter(x => x > 2)',
      execute: () => {
        const result = demoArray.filter(x => x > 2)
        setDemoResult(`Original: [${demoArray}] → Filtered: [${result}]`)
      }
    },
    reduce: {
      description: 'Reduces array to a single value by applying a function',
      example: 'arr.reduce((acc, curr) => acc + curr, 0)',
      execute: () => {
        const result = demoArray.reduce((acc, curr) => acc + curr, 0)
        setDemoResult(`Original: [${demoArray}] → Sum: ${result}`)
      }
    },
    forEach: {
      description: 'Executes a function for each array element',
      example: 'arr.forEach(x => console.log(x))',
      execute: () => {
        let result = []
        demoArray.forEach(x => result.push(x * 2))
        setDemoResult(`Original: [${demoArray}] → Each element doubled: [${result}]`)
      }
    },
    some: {
      description: 'Checks if at least one element passes a test',
      example: 'arr.some(x => x > 3)',
      execute: () => {
        const result = demoArray.some(x => x > 3)
        setDemoResult(`Original: [${demoArray}] → Any element > 3? ${result}`)
      }
    },
    every: {
      description: 'Checks if all elements pass a test',
      example: 'arr.every(x => x > 0)',
      execute: () => {
        const result = demoArray.every(x => x > 0)
        setDemoResult(`Original: [${demoArray}] → All elements > 0? ${result}`)
      }
    },
    find: {
      description: 'Returns the first element that passes a test',
      example: 'arr.find(x => x > 2)',
      execute: () => {
        const result = demoArray.find(x => x > 2)
        setDemoResult(`Original: [${demoArray}] → First element > 2: ${result}`)
      }
    },
    findIndex: {
      description: 'Returns index of first element that passes a test',
      example: 'arr.findIndex(x => x > 2)',
      execute: () => {
        const result = demoArray.findIndex(x => x > 2)
        setDemoResult(`Original: [${demoArray}] → Index of first element > 2: ${result}`)
      }
    },
    sort: {
      description: 'Sorts array elements',
      example: 'arr.sort((a,b) => a - b)',
      execute: () => {
        const unsorted = [5, 2, 8, 1, 9]
        const result = [...unsorted].sort((a, b) => a - b)
        setDemoResult(`Original: [${unsorted}] → Sorted: [${result}]`)
        setDemoArray(unsorted)
      }
    },

    // Basic Array Methods
    push: {
      description: 'Adds element(s) to the end of array',
      example: 'arr.push(6)',
      execute: () => {
        const newArray = [...demoArray, 6]
        setDemoArray(newArray)
        setDemoResult(`Added 6: [${newArray}]`)
      }
    },
    pop: {
      description: 'Removes last element from array',
      example: 'arr.pop()',
      execute: () => {
        const newArray = [...demoArray]
        const removed = newArray.pop()
        setDemoArray(newArray)
        setDemoResult(`Removed ${removed}: [${newArray}]`)
      }
    },
    shift: {
      description: 'Removes first element from array',
      example: 'arr.shift()',
      execute: () => {
        const newArray = [...demoArray]
        const removed = newArray.shift()
        setDemoArray(newArray)
        setDemoResult(`Removed ${removed}: [${newArray}]`)
      }
    },
    unshift: {
      description: 'Adds element(s) to the beginning of array',
      example: 'arr.unshift(0)',
      execute: () => {
        const newArray = [0, ...demoArray]
        setDemoArray(newArray)
        setDemoResult(`Added 0 at start: [${newArray}]`)
      }
    },
    concat: {
      description: 'Merges two or more arrays',
      example: 'arr.concat([6,7,8])',
      execute: () => {
        const result = demoArray.concat([6, 7, 8])
        setDemoResult(`Original: [${demoArray}] + [6,7,8] = [${result}]`)
      }
    },
    slice: {
      description: 'Returns a portion of array',
      example: 'arr.slice(1, 3)',
      execute: () => {
        const result = demoArray.slice(1, 3)
        setDemoResult(`Original: [${demoArray}] → Slice(1,3): [${result}]`)
      }
    },
    splice: {
      description: 'Adds/removes elements from array',
      example: 'arr.splice(1, 2, 99, 100)',
      execute: () => {
        const newArray = [...demoArray]
        newArray.splice(1, 2, 99, 100)
        setDemoArray(newArray)
        setDemoResult(`Removed 2 elements at index 1, added 99,100: [${newArray}]`)
      }
    },
    indexOf: {
      description: 'Returns first index of an element',
      example: 'arr.indexOf(3)',
      execute: () => {
        const result = demoArray.indexOf(3)
        setDemoResult(`Original: [${demoArray}] → Index of 3: ${result}`)
      }
    },
    lastIndexOf: {
      description: 'Returns last index of an element',
      example: 'arr.lastIndexOf(3)',
      execute: () => {
        const arrWithDuplicates = [1, 2, 3, 2, 3, 4]
        const result = arrWithDuplicates.lastIndexOf(3)
        setDemoResult(`Array: [1,2,3,2,3,4] → Last index of 3: ${result}`)
      }
    },
    includes: {
      description: 'Checks if array contains an element',
      example: 'arr.includes(3)',
      execute: () => {
        const result = demoArray.includes(3)
        setDemoResult(`Original: [${demoArray}] → Includes 3? ${result}`)
      }
    },
    reverse: {
      description: 'Reverses array order',
      example: 'arr.reverse()',
      execute: () => {
        const newArray = [...demoArray].reverse()
        setDemoArray(newArray)
        setDemoResult(`Reversed: [${newArray}]`)
      }
    },
    join: {
      description: 'Joins array elements into a string',
      example: 'arr.join(" - ")',
      execute: () => {
        const result = demoArray.join(" - ")
        setDemoResult(`Original: [${demoArray}] → Joined: "${result}"`)
      }
    },
    flat: {
      description: 'Flattens nested arrays',
      example: 'arr.flat()',
      execute: () => {
        const nested = [1, [2, 3], [4, [5, 6]]]
        const result = nested.flat(2)
        setDemoResult(`Original: [1,[2,3],[4,[5,6]]] → Flattened: [${result}]`)
      }
    },
    flatMap: {
      description: 'Maps then flattens the result',
      example: 'arr.flatMap(x => [x, x*2])',
      execute: () => {
        const result = demoArray.flatMap(x => [x, x * 2])
        setDemoResult(`Original: [${demoArray}] → FlatMap: [${result}]`)
      }
    },
    fill: {
      description: 'Fills array with a static value',
      example: 'arr.fill(0, 1, 3)',
      execute: () => {
        const newArray = [...demoArray]
        newArray.fill(0, 1, 3)
        setDemoArray(newArray)
        setDemoResult(`Filled with 0 from index 1-3: [${newArray}]`)
      }
    },
    copyWithin: {
      description: 'Copys array elements within the array',
      example: 'arr.copyWithin(1, 2)',
      execute: () => {
        const newArray = [...demoArray]
        newArray.copyWithin(1, 2)
        setDemoArray(newArray)
        setDemoResult(`CopyWithin(1,2): [${newArray}]`)
      }
    }
  }

  const resetArray = () => {
    setDemoArray([1, 2, 3, 4, 5])
    setDemoResult('Array reset to [1, 2, 3, 4, 5]')
  }

  const executeMethod = (methodKey) => {
    if (arrayMethods[methodKey]) {
      arrayMethods[methodKey].execute()
    }
  }

  return (
    <div className="array-methods-container">
      <header className="header">
        <h1>📚 JavaScript Array Methods Encyclopedia</h1>
        <p>Interactive guide to all JavaScript array methods and higher-order functions</p>
      </header>

      <div className="container">
        <aside className="sidebar">
          <h2>📖 Methods</h2>
          <div className="methods-list">
            <h3>Higher-Order Methods</h3>
            {['map', 'filter', 'reduce', 'forEach', 'some', 'every', 'find', 'findIndex', 'sort'].map(method => (
              <button
                key={method}
                className={`method-btn ${activeMethod === method ? 'active' : ''}`}
                onClick={() => {
                  setActiveMethod(method)
                  executeMethod(method)
                }}
              >
                {method}()
              </button>
            ))}
            
            <h3>Basic Array Methods</h3>
            {['push', 'pop', 'shift', 'unshift', 'concat', 'slice', 'splice', 'indexOf', 'lastIndexOf', 'includes', 'reverse', 'join', 'flat', 'flatMap', 'fill', 'copyWithin'].map(method => (
              <button
                key={method}
                className={`method-btn ${activeMethod === method ? 'active' : ''}`}
                onClick={() => {
                  setActiveMethod(method)
                  executeMethod(method)
                }}
              >
                {method}()
              </button>
            ))}
          </div>
        </aside>

        <main className="main-content">
          <div className="demo-section">
            <div className="current-array">
              <h3>Current Array: <span className="array-value">[{demoArray.join(', ')}]</span></h3>
              <button className="reset-btn" onClick={resetArray}>Reset Array</button>
            </div>

            <div className="method-info">
              <h2>{activeMethod}()</h2>
              <p className="description">{arrayMethods[activeMethod]?.description}</p>
              <div className="example">
                <strong>Example:</strong> <code>{arrayMethods[activeMethod]?.example}</code>
              </div>
            </div>

            <button 
              className="execute-btn"
              onClick={() => executeMethod(activeMethod)}
            >
              Execute {activeMethod}()
            </button>

            {demoResult && (
              <div className="result">
                <strong>Result:</strong>
                <p>{demoResult}</p>
              </div>
            )}
          </div>

          <div className="methods-reference">
            <h3>📌 Quick Reference</h3>
            <div className="reference-grid">
              <div className="ref-card">
                <h4>Higher-Order Methods</h4>
                <ul>
                  <li><code>map()</code> - Transform each element</li>
                  <li><code>filter()</code> - Filter elements</li>
                  <li><code>reduce()</code> - Reduce to single value</li>
                  <li><code>forEach()</code> - Iterate over elements</li>
                </ul>
              </div>
              <div className="ref-card">
                <h4>Mutating Methods</h4>
                <ul>
                  <li><code>push/pop</code> - Add/remove from end</li>
                  <li><code>shift/unshift</code> - Add/remove from start</li>
                  <li><code>splice()</code> - Add/remove anywhere</li>
                  <li><code>sort()</code> - Sort elements</li>
                </ul>
              </div>
              <div className="ref-card">
                <h4>Non-Mutating Methods</h4>
                <ul>
                  <li><code>concat()</code> - Merge arrays</li>
                  <li><code>slice()</code> - Extract portion</li>
                  <li><code>map/filter</code> - Create new arrays</li>
                  <li><code>flat()</code> - Flatten nested arrays</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default array