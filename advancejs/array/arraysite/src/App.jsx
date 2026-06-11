import React, { useState } from 'react'
import './App.css'

function App() {
  const [activeMethod, setActiveMethod] = useState('map')
  const [demoArray, setDemoArray] = useState([1, 2, 3, 4, 5])
  const [demoResult, setDemoResult] = useState(null)
  const [showAdvancedInfo, setShowAdvancedInfo] = useState(false)
  const [customValue, setCustomValue] = useState('')

  // Complete Array Methods with Enhanced Details
  const arrayMethods = {
    // Higher-Order Array Methods
    map: {
      name: 'map()',
      category: 'Higher-Order',
      description: 'Creates a new array by applying a function to each element',
      fullDescription: 'The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. It is commonly used when you want to transform each element of an array and get a new array of the same length.',
      syntax: 'array.map((currentValue, index, array) => { return transformedValue; })',
      parameters: [
        'currentValue (required): The current element being processed',
        'index (optional): The index of the current element',
        'array (optional): The array map was called upon'
      ],
      returns: 'A new array with each element being the result of the callback function',
      useCase: 'Transforming data, formatting values, extracting properties from objects',
      timeComplexity: 'O(n) - visits each element once',
      mutatesArray: 'No - returns a new array',
      example: 'arr.map(x => x * 2)',
      advancedExample: 'const users = [{name: "John", age: 25}, {name: "Jane", age: 30}];\nconst names = users.map(user => user.name);\n// Result: ["John", "Jane"]',
      execute: () => {
        const result = demoArray.map(x => x * 2)
        setDemoResult({
          original: demoArray,
          result: result,
          operation: 'map',
          message: `Each element multiplied by 2`,
          explanation: `The map() method iterated through each element [${demoArray}] and applied the function x => x * 2, resulting in [${result}]`
        })
      }
    },
    filter: {
      name: 'filter()',
      category: 'Higher-Order',
      description: 'Creates a new array with elements that pass a test',
      fullDescription: 'The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.',
      syntax: 'array.filter((currentValue, index, array) => { return condition; })',
      parameters: [
        'currentValue (required): The current element being processed',
        'index (optional): The index of the current element',
        'array (optional): The array filter was called upon'
      ],
      returns: 'A new array with the elements that pass the test. If no elements pass, an empty array is returned.',
      useCase: 'Removing unwanted items, searching, data validation, filtering lists',
      timeComplexity: 'O(n) - visits each element once',
      mutatesArray: 'No - returns a new array',
      example: 'arr.filter(x => x > 2)',
      advancedExample: 'const products = [\n  {name: "Laptop", price: 1000, inStock: true},\n  {name: "Phone", price: 500, inStock: false},\n  {name: "Tablet", price: 300, inStock: true}\n];\nconst available = products.filter(p => p.inStock && p.price < 600);\n// Result: [{name: "Tablet", price: 300, inStock: true}]',
      execute: () => {
        const result = demoArray.filter(x => x > 2)
        setDemoResult({
          original: demoArray,
          result: result,
          operation: 'filter',
          message: `Elements greater than 2`,
          explanation: `The filter() method checked each element in [${demoArray}] and kept only those greater than 2, resulting in [${result}]`
        })
      }
    },
    reduce: {
      name: 'reduce()',
      category: 'Higher-Order',
      description: 'Reduces array to a single value by applying a function',
      fullDescription: 'The reduce() method executes a reducer function on each element of the array, resulting in a single output value. The reducer function takes an accumulator and the current value, then returns the updated accumulator.',
      syntax: 'array.reduce((accumulator, currentValue, index, array) => { return newAccumulator; }, initialValue)',
      parameters: [
        'accumulator (required): Accumulates the callback\'s return values',
        'currentValue (required): The current element being processed',
        'index (optional): The index of the current element',
        'array (optional): The array reduce was called upon',
        'initialValue (optional): Value to use as the first argument to the first call'
      ],
      returns: 'The single value that results from the reduction',
      useCase: 'Summing values, counting occurrences, flattening arrays, grouping data',
      timeComplexity: 'O(n) - visits each element once',
      mutatesArray: 'No - returns a single value',
      example: 'arr.reduce((acc, curr) => acc + curr, 0)',
      advancedExample: 'const orders = [100, 200, 150, 300];\nconst total = orders.reduce((sum, price) => sum + price, 0);\n// Result: 750\n\nconst fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];\nconst count = fruits.reduce((acc, fruit) => {\n  acc[fruit] = (acc[fruit] || 0) + 1;\n  return acc;\n}, {});\n// Result: {apple: 3, banana: 2, orange: 1}',
      execute: () => {
        const result = demoArray.reduce((acc, curr) => acc + curr, 0)
        setDemoResult({
          original: demoArray,
          result: result,
          operation: 'reduce',
          message: `Sum of all elements`,
          explanation: `The reduce() method started with an accumulator of 0, then added each element: 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15, resulting in ${result}`
        })
      }
    },
   forEach: {
  name: 'forEach()',
  category: 'Higher-Order',
  description: 'Executes a function for each array element',
  fullDescription: 'The forEach() method executes a provided function once for each array element. Unlike map(), it does not return a new array. It is used for side effects like logging, updating external variables, or modifying the DOM.',
  syntax: 'array.forEach((currentValue, index, array) => { // do something })',
  parameters: [
    'currentValue (required): The current element being processed',
    'index (optional): The index of the current element',
    'array (optional): The array forEach was called upon'
  ],
  returns: 'undefined (does not return anything)',
  useCase: 'Logging, updating UI, performing side effects, animations',
  timeComplexity: 'O(n) - visits each element once',
  mutatesArray: 'No - but can modify external variables',
  example: 'arr.forEach(x => console.log(x))',
  advancedExample: 'let sum = 0;\nconst numbers = [1, 2, 3, 4, 5];\nnumbers.forEach(num => sum += num);\nconsole.log(sum); // 15',
  execute: () => {
    let result = []
    demoArray.forEach(x => result.push(x * 2))
    setDemoResult({
      original: demoArray,
      result: result,
      operation: 'forEach',
      message: `Each element doubled`,
      explanation: `The forEach() method iterated through each element and doubled it, storing results in a new array: [${result}]`
    })
  }
},
    some: {
      name: 'some()',
      category: 'Higher-Order',
      description: 'Checks if at least one element passes a test',
      fullDescription: 'The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true immediately when it finds an element that passes, improving performance.',
      syntax: 'array.some((currentValue, index, array) => { return condition; })',
      parameters: [
        'currentValue (required): The current element being processed',
        'index (optional): The index of the current element',
        'array (optional): The array some was called upon'
      ],
      returns: 'true if at least one element passes the test, otherwise false',
      useCase: 'Validation, checking permissions, searching for existence',
      timeComplexity: 'O(n) worst case, stops early when condition is met',
      mutatesArray: 'No - returns a boolean',
      example: 'arr.some(x => x > 3)',
      advancedExample: 'const users = [\n  {name: "John", role: "admin"},\n  {name: "Jane", role: "user"},\n  {name: "Bob", role: "user"}\n];\nconst hasAdmin = users.some(user => user.role === "admin");\n// Result: true',
      execute: () => {
        const result = demoArray.some(x => x > 3)
        setDemoResult({
          original: demoArray,
          result: result,
          operation: 'some',
          message: `Any element greater than 3?`,
          explanation: `The some() method checked if any element in [${demoArray}] is greater than 3. ${result ? 'Found 4 and 5 that are greater than 3.' : 'No elements greater than 3 found.'}`
        })
      }
    },
    every: {
      name: 'every()',
      category: 'Higher-Order',
      description: 'Checks if all elements pass a test',
      fullDescription: 'The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns false immediately when it finds an element that fails the test.',
      syntax: 'array.every((currentValue, index, array) => { return condition; })',
      parameters: [
        'currentValue (required): The current element being processed',
        'index (optional): The index of the current element',
        'array (optional): The array every was called upon'
      ],
      returns: 'true if all elements pass the test, otherwise false',
      useCase: 'Validation (all fields filled), checking requirements',
      timeComplexity: 'O(n) worst case, stops early when condition fails',
      mutatesArray: 'No - returns a boolean',
      example: 'arr.every(x => x > 0)',
      advancedExample: 'const formData = {name: "John", email: "john@example.com", age: 25};\nconst allFieldsFilled = Object.values(formData).every(value => value !== "");\n// Result: true',
      execute: () => {
        const result = demoArray.every(x => x > 0)
        setDemoResult({
          original: demoArray,
          result: result,
          operation: 'every',
          message: `All elements greater than 0?`,
          explanation: `The every() method checked if every element in [${demoArray}] is greater than 0. ${result ? 'All elements are positive numbers.' : 'Some elements are not greater than 0.'}`
        })
      }
    },
    find: {
      name: 'find()',
      category: 'Higher-Order',
      description: 'Returns the first element that passes a test',
      fullDescription: 'The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.',
      syntax: 'array.find((currentValue, index, array) => { return condition; })',
      parameters: [
        'currentValue (required): The current element being processed',
        'index (optional): The index of the current element',
        'array (optional): The array find was called upon'
      ],
      returns: 'The first element that passes the test, otherwise undefined',
      useCase: 'Finding specific items in an array, searching by ID',
      timeComplexity: 'O(n) worst case, stops when element is found',
      mutatesArray: 'No - returns an element',
      example: 'arr.find(x => x > 2)',
      advancedExample: 'const users = [\n  {id: 1, name: "John"},\n  {id: 2, name: "Jane"},\n  {id: 3, name: "Bob"}\n];\nconst user = users.find(u => u.id === 2);\n// Result: {id: 2, name: "Jane"}',
      execute: () => {
        const result = demoArray.find(x => x > 2)
        setDemoResult({
          original: demoArray,
          result: result,
          operation: 'find',
          message: `First element greater than 2`,
          explanation: `The find() method searched through [${demoArray}] and returned the first element greater than 2, which is ${result}`
        })
      }
    },
    findIndex: {
      name: 'findIndex()',
      category: 'Higher-Order',
      description: 'Returns index of first element that passes a test',
      fullDescription: 'The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.',
      syntax: 'array.findIndex((currentValue, index, array) => { return condition; })',
      parameters: [
        'currentValue (required): The current element being processed',
        'index (optional): The index of the current element',
        'array (optional): The array findIndex was called upon'
      ],
      returns: 'The index of the first element that passes the test, otherwise -1',
      useCase: 'Finding position of elements, updating arrays by index',
      timeComplexity: 'O(n) worst case, stops when element is found',
      mutatesArray: 'No - returns an index',
      example: 'arr.findIndex(x => x > 2)',
      advancedExample: 'const numbers = [5, 12, 8, 130, 44];\nconst index = numbers.findIndex(num => num > 13);\n// Result: 3 (value 130 is at index 3)',
      execute: () => {
        const result = demoArray.findIndex(x => x > 2)
        setDemoResult({
          original: demoArray,
          result: result,
          operation: 'findIndex',
          message: `Index of first element greater than 2`,
          explanation: `The findIndex() method found the first element greater than 2 at index ${result} (value ${demoArray[result]})`
        })
      }
    },
    sort: {
      name: 'sort()',
      category: 'Higher-Order',
      description: 'Sorts array elements',
      fullDescription: 'The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings.',
      syntax: 'array.sort(compareFunction)',
      parameters: [
        'compareFunction (optional): Specifies a function that defines the sort order. If omitted, elements are converted to strings and sorted by UTF-16 code units.'
      ],
      returns: 'The sorted array (same array reference, modified in place)',
      useCase: 'Ordering lists, ranking, preparing data for display',
      timeComplexity: 'O(n log n) time complexity',
      mutatesArray: 'Yes - modifies the original array',
      example: 'arr.sort((a,b) => a - b)',
      advancedExample: 'const items = [40, 1, 5, 200];\nitems.sort((a, b) => a - b);\n// Result: [1, 5, 40, 200]\n\nconst names = ["John", "Alice", "Bob"];\nnames.sort();\n// Result: ["Alice", "Bob", "John"]',
      execute: () => {
        const unsorted = [5, 2, 8, 1, 9]
        const result = [...unsorted].sort((a, b) => a - b)
        setDemoResult({
          original: unsorted,
          result: result,
          operation: 'sort',
          message: `Array sorted in ascending order`,
          explanation: `The sort() method arranged [${unsorted}] in ascending order: [${result}]`
        })
        setDemoArray(unsorted)
      }
    },

    // Basic Array Methods
    push: {
      name: 'push()',
      category: 'Basic',
      description: 'Adds element(s) to the end of array',
      fullDescription: 'The push() method adds one or more elements to the end of an array and returns the new length of the array. This method changes the original array.',
      syntax: 'array.push(element1, element2, ..., elementN)',
      parameters: [
        'elementN (required): The elements to add to the end of the array. You can add multiple elements separated by commas.'
      ],
      returns: 'The new length property of the object upon which the method was called',
      useCase: 'Adding items to a list, appending data to an array',
      timeComplexity: 'O(1) amortized - very fast',
      mutatesArray: 'Yes - modifies the original array',
      example: 'arr.push(6)',
      advancedExample: 'const stack = [1, 2, 3];\nstack.push(4, 5, 6);\n// stack becomes [1, 2, 3, 4, 5, 6]\n// Returns: 6',
      execute: () => {
        const newArray = [...demoArray, 6]
        setDemoArray(newArray)
        setDemoResult({
          original: demoArray,
          result: newArray,
          operation: 'push',
          message: `Added 6 to the end`,
          explanation: `The push() method added 6 to the end of [${demoArray}], resulting in [${newArray}]`
        })
      }
    },
    pop: {
      name: 'pop()',
      category: 'Basic',
      description: 'Removes last element from array',
      fullDescription: 'The pop() method removes the last element from an array and returns that element. This method changes the length of the array. If the array is empty, it returns undefined.',
      syntax: 'array.pop()',
      parameters: ['No parameters'],
      returns: 'The removed element from the array, or undefined if the array is empty',
      useCase: 'Implementing stacks (LIFO), removing last item',
      timeComplexity: 'O(1) - very fast',
      mutatesArray: 'Yes - modifies the original array',
      example: 'arr.pop()',
      advancedExample: 'const stack = [1, 2, 3, 4, 5];\nconst last = stack.pop();\n// last = 5\n// stack becomes [1, 2, 3, 4]',
      execute: () => {
        const newArray = [...demoArray]
        const removed = newArray.pop()
        setDemoArray(newArray)
        setDemoResult({
          original: demoArray,
          result: newArray,
          operation: 'pop',
          message: `Removed ${removed} from the end`,
          explanation: `The pop() method removed the last element (${removed}) from [${demoArray}], resulting in [${newArray}]`
        })
      }
    },
    shift: {
      name: 'shift()',
      category: 'Basic',
      description: 'Removes first element from array',
      fullDescription: 'The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array. All other elements have their indexes decreased by 1.',
      syntax: 'array.shift()',
      parameters: ['No parameters'],
      returns: 'The removed element from the array, or undefined if the array is empty',
      useCase: 'Implementing queues (FIFO), removing first item',
      timeComplexity: 'O(n) - all elements need to be reindexed',
      mutatesArray: 'Yes - modifies the original array',
      example: 'arr.shift()',
      advancedExample: 'const queue = [1, 2, 3, 4, 5];\nconst first = queue.shift();\n// first = 1\n// queue becomes [2, 3, 4, 5]',
      execute: () => {
        const newArray = [...demoArray]
        const removed = newArray.shift()
        setDemoArray(newArray)
        setDemoResult({
          original: demoArray,
          result: newArray,
          operation: 'shift',
          message: `Removed ${removed} from the start`,
          explanation: `The shift() method removed the first element (${removed}) from [${demoArray}], resulting in [${newArray}]`
        })
      }
    },
    unshift: {
      name: 'unshift()',
      category: 'Basic',
      description: 'Adds element(s) to the beginning of array',
      fullDescription: 'The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. All other elements have their indexes increased by the number of added elements.',
      syntax: 'array.unshift(element1, element2, ..., elementN)',
      parameters: ['elementN (required): The elements to add to the front of the array'],
      returns: 'The new length property of the object upon which the method was called',
      useCase: 'Adding items to the beginning of a list, prepending data',
      timeComplexity: 'O(n) - all elements need to be reindexed',
      mutatesArray: 'Yes - modifies the original array',
      example: 'arr.unshift(0)',
      advancedExample: 'const numbers = [3, 4, 5];\nnumbers.unshift(1, 2);\n// numbers becomes [1, 2, 3, 4, 5]\n// Returns: 5',
      execute: () => {
        const newArray = [0, ...demoArray]
        setDemoArray(newArray)
        setDemoResult({
          original: demoArray,
          result: newArray,
          operation: 'unshift',
          message: `Added 0 at the start`,
          explanation: `The unshift() method added 0 to the beginning of [${demoArray}], resulting in [${newArray}]`
        })
      }
    },
    concat: {
      name: 'concat()',
      category: 'Basic',
      description: 'Merges two or more arrays',
      fullDescription: 'The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. It can also accept values that are not arrays.',
      syntax: 'array.concat(value1, value2, ..., valueN)',
      parameters: ['valueN (optional): Arrays and/or values to concatenate into a new array'],
      returns: 'A new Array instance containing the concatenated results',
      useCase: 'Combining arrays, adding multiple items, cloning arrays',
      timeComplexity: 'O(n) where n is total length of all arrays',
      mutatesArray: 'No - returns a new array',
      example: 'arr.concat([6,7,8])',
      advancedExample: 'const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst arr3 = [7, 8, 9];\nconst merged = arr1.concat(arr2, arr3, 10, 11);\n// Result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]',
      execute: () => {
        const result = demoArray.concat([6, 7, 8])
        setDemoResult({
          original: demoArray,
          result: result,
          operation: 'concat',
          message: `Concatenated with [6,7,8]`,
          explanation: `The concat() method merged [${demoArray}] with [6,7,8], resulting in [${result}]`
        })
      }
    },
    slice: {
      name: 'slice()',
      category: 'Basic',
      description: 'Returns a portion of array',
      fullDescription: 'The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.',
      syntax: 'array.slice(start, end)',
      parameters: [
        'start (optional): Zero-based index at which to start extraction. If negative, it is treated as array.length + start.',
        'end (optional): Zero-based index at which to end extraction. slice extracts up to but not including end.'
      ],
      returns: 'A new array containing the extracted elements',
      useCase: 'Copying arrays, extracting portions, pagination',
      timeComplexity: 'O(n) where n is the number of elements extracted',
      mutatesArray: 'No - returns a new array',
      example: 'arr.slice(1, 3)',
      advancedExample: 'const numbers = [1, 2, 3, 4, 5, 6, 7, 8];\nconst middle = numbers.slice(2, 6);\n// Result: [3, 4, 5, 6]\nconst copy = numbers.slice();\n// Result: [1, 2, 3, 4, 5, 6, 7, 8] (shallow copy)',
      execute: () => {
        const result = demoArray.slice(1, 3)
        setDemoResult({
          original: demoArray,
          result: result,
          operation: 'slice',
          message: `Extracted elements from index 1 to 3`,
          explanation: `The slice() method extracted elements from index 1 to 3 (excluding index 3) from [${demoArray}], resulting in [${result}]`
        })
      }
    },
    splice: {
      name: 'splice()',
      category: 'Basic',
      description: 'Adds/removes elements from array',
      fullDescription: 'The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It can add, remove, or replace elements at any position in the array.',
      syntax: 'array.splice(start, deleteCount, item1, item2, itemN)',
      parameters: [
        'start (required): Index at which to start changing the array. If negative, it will begin that many elements from the end.',
        'deleteCount (optional): Number of elements to remove. If 0 or negative, no elements are removed.',
        'itemN (optional): Elements to add to the array, beginning from start.'
      ],
      returns: 'An array containing the deleted elements',
      useCase: 'Inserting, removing, or replacing elements at specific positions',
      timeComplexity: 'O(n) - may need to shift elements',
      mutatesArray: 'Yes - modifies the original array',
      example: 'arr.splice(1, 2, 99, 100)',
      advancedExample: 'const months = ["Jan", "March", "April", "June"];\nmonths.splice(1, 0, "Feb");\n// Inserts "Feb" at index 1\n// months becomes ["Jan", "Feb", "March", "April", "June"]\n\nmonths.splice(4, 1, "May");\n// Replaces "June" with "May"',
      execute: () => {
        const newArray = [...demoArray]
        const deleted = newArray.splice(1, 2, 99, 100)
        setDemoArray(newArray)
        setDemoResult({
          original: demoArray,
          result: newArray,
          operation: 'splice',
          message: `Removed [${deleted}] at index 1, added 99,100`,
          explanation: `The splice() method removed 2 elements starting at index 1 ([${deleted}]) and added 99,100, resulting in [${newArray}]`
        })
      }
    },
    indexOf: {
      name: 'indexOf()',
      category: 'Basic',
      description: 'Returns first index of an element',
      fullDescription: 'The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. It uses strict equality (===) for comparison.',
      syntax: 'array.indexOf(searchElement, fromIndex)',
      parameters: [
        'searchElement (required): Element to locate in the array',
        'fromIndex (optional): The index to start the search at. If negative, it is taken as array.length + fromIndex.'
      ],
      returns: 'The first index of the element in the array, or -1 if not found',
      useCase: 'Finding position of elements, checking if element exists',
      timeComplexity: 'O(n) - linear search',
      mutatesArray: 'No - returns an index',
      example: 'arr.indexOf(3)',
      advancedExample: 'const colors = ["red", "blue", "green", "blue"];\nconst firstBlue = colors.indexOf("blue");\n// Result: 1\nconst secondBlue = colors.indexOf("blue", 2);\n// Result: 3',
      execute: () => {
        const result = demoArray.indexOf(3)
        setDemoResult({
          original: demoArray,
          result: result,
          operation: 'indexOf',
          message: `Index of element 3`,
          explanation: `The indexOf() method searched for element 3 in [${demoArray}] and found it at index ${result}`
        })
      }
    },
    includes: {
      name: 'includes()',
      category: 'Basic',
      description: 'Checks if array contains an element',
      fullDescription: 'The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. It uses SameValueZero algorithm for comparison.',
      syntax: 'array.includes(searchElement, fromIndex)',
      parameters: [
        'searchElement (required): The value to search for',
        'fromIndex (optional): The position in the array at which to begin the search. Default is 0.'
      ],
      returns: 'true if the value is found, otherwise false',
      useCase: 'Checking existence, validation, permission checks',
      timeComplexity: 'O(n) - linear search',
      mutatesArray: 'No - returns a boolean',
      example: 'arr.includes(3)',
      advancedExample: 'const fruits = ["apple", "banana", "orange"];\nconst hasApple = fruits.includes("apple");\n// Result: true\nconst hasGrape = fruits.includes("grape");\n// Result: false',
      execute: () => {
        const result = demoArray.includes(3)
        setDemoResult({
          original: demoArray,
          result: result,
          operation: 'includes',
          message: `Does the array include 3?`,
          explanation: `The includes() method checked if 3 exists in [${demoArray}]. Result: ${result}`
        })
      }
    },
    join: {
      name: 'join()',
      category: 'Basic',
      description: 'Joins array elements into a string',
      fullDescription: 'The join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, that item will be returned without using the separator.',
      syntax: 'array.join(separator)',
      parameters: ['separator (optional): Specifies a string to separate each pair of adjacent elements. If omitted, the array elements are separated with a comma (",").'],
      returns: 'A string with all array elements joined. If the array is empty, an empty string is returned.',
      useCase: 'Creating CSV strings, generating display strings, URL construction',
      timeComplexity: 'O(n) - builds string progressively',
      mutatesArray: 'No - returns a string',
      example: 'arr.join(" - ")',
      advancedExample: 'const elements = ["Fire", "Air", "Water"];\nconst result1 = elements.join();\n// Result: "Fire,Air,Water"\nconst result2 = elements.join(" - ");\n// Result: "Fire - Air - Water"\nconst result3 = elements.join("");\n// Result: "FireAirWater"',
      execute: () => {
        const result = demoArray.join(" - ")
        setDemoResult({
          original: demoArray,
          result: result,
          operation: 'join',
          message: `Joined with " - " separator`,
          explanation: `The join() method converted [${demoArray}] to a string with " - " separator: "${result}"`
        })
      }
    },
    reverse: {
      name: 'reverse()',
      category: 'Basic',
      description: 'Reverses array order',
      fullDescription: 'The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. It modifies the original array.',
      syntax: 'array.reverse()',
      parameters: ['No parameters'],
      returns: 'The reversed array (same array reference, modified in place)',
      useCase: 'Reversing order, creating descending sequences',
      timeComplexity: 'O(n) - swaps elements in place',
      mutatesArray: 'Yes - modifies the original array',
      example: 'arr.reverse()',
      advancedExample: 'const numbers = [1, 2, 3, 4, 5];\nconst reversed = numbers.reverse();\n// numbers becomes [5, 4, 3, 2, 1]\n// reversed references the same array',
      execute: () => {
        const newArray = [...demoArray].reverse()
        setDemoArray(newArray)
        setDemoResult({
          original: demoArray,
          result: newArray,
          operation: 'reverse',
          message: `Array reversed`,
          explanation: `The reverse() method reversed the order of [${demoArray}], resulting in [${newArray}]`
        })
      }
    },
    flat: {
      name: 'flat()',
      category: 'Modern',
      description: 'Flattens nested arrays',
      fullDescription: 'The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. It removes empty slots from the array.',
      syntax: 'array.flat(depth)',
      parameters: ['depth (optional): The depth level specifying how deep a nested array structure should be flattened. Default is 1.'],
      returns: 'A new array with the sub-array elements concatenated into it',
      useCase: 'Simplifying nested data, processing recursive structures',
      timeComplexity: 'O(n) where n is total number of elements after flattening',
      mutatesArray: 'No - returns a new array',
      example: 'arr.flat()',
      advancedExample: 'const nested = [1, [2, [3, [4, 5]]]];\nconst flat1 = nested.flat();\n// Result: [1, 2, [3, [4, 5]]]\nconst flat2 = nested.flat(2);\n// Result: [1, 2, 3, [4, 5]]\nconst flat3 = nested.flat(Infinity);\n// Result: [1, 2, 3, 4, 5]',
      execute: () => {
        const nested = [1, [2, 3], [4, [5, 6]]]
        const result = nested.flat(2)
        setDemoResult({
          original: nested,
          result: result,
          operation: 'flat',
          message: `Flattened nested array`,
          explanation: `The flat() method flattened the nested array [${JSON.stringify(nested)}] to depth 2, resulting in [${result}]`
        })
      }
    },
    flatMap: {
      name: 'flatMap()',
      category: 'Modern',
      description: 'Maps then flattens the result',
      fullDescription: 'The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1, but slightly more efficient.',
      syntax: 'array.flatMap(callback, thisArg)',
      parameters: [
        'callback (required): Function that produces an element of the new Array',
        'thisArg (optional): Value to use as this when executing callback'
      ],
      returns: 'A new array with each element being the result of the callback function and flattened by depth of 1',
      useCase: 'Mapping to multiple items, filtering and mapping in one pass',
      timeComplexity: 'O(n) - more efficient than separate map and flat',
      mutatesArray: 'No - returns a new array',
      example: 'arr.flatMap(x => [x, x*2])',
      advancedExample: 'const sentences = ["Hello world", "How are you"];\nconst words = sentences.flatMap(sentence => sentence.split(" "));\n// Result: ["Hello", "world", "How", "are", "you"]\n\nconst numbers = [1, 2, 3, 4];\nconst result = numbers.flatMap(x => [x, x * 2]);\n// Result: [1, 2, 2, 4, 3, 6, 4, 8]',
      execute: () => {
        const result = demoArray.flatMap(x => [x, x * 2])
        setDemoResult({
          original: demoArray,
          result: result,
          operation: 'flatMap',
          message: `Mapped to [x, x*2] then flattened`,
          explanation: `The flatMap() method applied x => [x, x*2] to each element, then flattened: [${result}]`
        })
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

  const addCustomValue = () => {
    if (customValue && !isNaN(customValue)) {
      setDemoArray([...demoArray, Number(customValue)])
      setCustomValue('')
    }
  }

  const currentMethod = arrayMethods[activeMethod]

  return (
    <div className="app">
      <header className="header">
        <h1>📚 JavaScript Array Methods Encyclopedia</h1>
        <p>Interactive guide to all JavaScript array methods and higher-order functions</p>
        <div className="header-stats">
          <div className="stat-badge">
            <span className="stat-number">{Object.keys(arrayMethods).length}</span>
            <span className="stat-label">Methods</span>
          </div>
          <div className="stat-badge">
            <span className="stat-number">3</span>
            <span className="stat-label">Categories</span>
          </div>
          <div className="stat-badge">
            <span className="stat-number">Live</span>
            <span className="stat-label">Examples</span>
          </div>
        </div>
      </header>

      <div className="container">
        <aside className="sidebar">
          <h2>📖 Method Library</h2>
          <div className="search-box">
            <input 
              type="text" 
              placeholder="🔍 Search methods..." 
              id="methodSearch"
              onChange={(e) => {
                const searchTerm = e.target.value.toLowerCase()
                const buttons = document.querySelectorAll('.method-btn')
                buttons.forEach(btn => {
                  const text = btn.textContent.toLowerCase()
                  btn.style.display = text.includes(searchTerm) ? 'flex' : 'none'
                })
              }}
            />
          </div>
          <div className="methods-list">
            <h3>⚡ Higher-Order Methods</h3>
            {['map', 'filter', 'reduce', 'forEach', 'some', 'every', 'find', 'findIndex', 'sort'].map(method => (
              <button
                key={method}
                className={`method-btn ${activeMethod === method ? 'active' : ''}`}
                onClick={() => {
                  setActiveMethod(method)
                  executeMethod(method)
                }}
              >
                <span className="method-icon">→</span>
                {method}()
                <span className="method-badge">{arrayMethods[method].category}</span>
              </button>
            ))}
            
            <h3>📦 Basic Array Methods</h3>
            {['push', 'pop', 'shift', 'unshift', 'concat', 'slice', 'splice', 'indexOf', 'includes', 'join', 'reverse'].map(method => (
              <button
                key={method}
                className={`method-btn ${activeMethod === method ? 'active' : ''}`}
                onClick={() => {
                  setActiveMethod(method)
                  executeMethod(method)
                }}
              >
                <span className="method-icon">→</span>
                {method}()
                <span className="method-badge">{arrayMethods[method].category}</span>
              </button>
            ))}
            
            <h3>✨ Modern ES6+ Methods</h3>
            {['flat', 'flatMap'].map(method => (
              <button
                key={method}
                className={`method-btn ${activeMethod === method ? 'active' : ''}`}
                onClick={() => {
                  setActiveMethod(method)
                  executeMethod(method)
                }}
              >
                <span className="method-icon">→</span>
                {method}()
                <span className="method-badge">{arrayMethods[method].category}</span>
              </button>
            ))}
          </div>
        </aside>

        <main className="main-content">
          <div className="demo-section">
            <div className="current-array">
              <div>
                <h3>📊 Current Array</h3>
                <div className="array-value">[{demoArray.join(', ')}]</div>
                <div className="array-meta">
                  <span>Length: {demoArray.length}</span>
                  <span>Type: Number Array</span>
                </div>
              </div>
              <div className="array-controls">
                <div className="add-value">
                  <input
                    type="number"
                    placeholder="Add value..."
                    value={customValue}
                    onChange={(e) => setCustomValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addCustomValue()}
                  />
                  <button onClick={addCustomValue} className="add-btn">+ Add</button>
                </div>
                <button className="reset-btn" onClick={resetArray}>⟳ Reset Array</button>
              </div>
            </div>

            <div className="method-info">
              <div className="method-header">
                <h2>
                  <span className="method-name">{activeMethod}</span>
                  <span className="method-parens">()</span>
                </h2>
                <button 
                  className="info-toggle"
                  onClick={() => setShowAdvancedInfo(!showAdvancedInfo)}
                >
                  {showAdvancedInfo ? '📖 Hide Details' : '📖 Show Details'}
                </button>
              </div>
              
              <p className="description">{currentMethod?.description}</p>
              
              {showAdvancedInfo && (
                <div className="advanced-info">
                  <div className="info-section">
                    <h4>📝 Full Description</h4>
                    <p>{currentMethod?.fullDescription}</p>
                  </div>
                  
                  <div className="info-grid">
                    <div className="info-card">
                      <h4>📐 Syntax</h4>
                      <code className="syntax">{currentMethod?.syntax}</code>
                    </div>
                    
                    <div className="info-card">
                      <h4>🔄 Returns</h4>
                      <p>{currentMethod?.returns}</p>
                    </div>
                    
                    <div className="info-card">
                      <h4>⚡ Time Complexity</h4>
                      <p>{currentMethod?.timeComplexity}</p>
                    </div>
                    
                    <div className="info-card">
                      <h4>✏️ Mutates Original?</h4>
                      <p className={currentMethod?.mutatesArray === 'Yes' ? 'mutates' : 'immutable'}>
                        {currentMethod?.mutatesArray}
                      </p>
                    </div>
                  </div>
                  
                  <div className="info-section">
                    <h4>⚙️ Parameters</h4>
                    <ul className="params-list">
                      {currentMethod?.parameters?.map((param, i) => (
                        <li key={i}>{param}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="info-section">
                    <h4>💡 Common Use Cases</h4>
                    <p>{currentMethod?.useCase}</p>
                  </div>
                  
                  <div className="info-section">
                    <h4>🎯 Advanced Example</h4>
                    <pre className="advanced-example">{currentMethod?.advancedExample}</pre>
                  </div>
                </div>
              )}
              
              <div className="example">
                <strong>💡 Basic Example:</strong> 
                <code>{currentMethod?.example}</code>
              </div>
            </div>

            <button 
              className="execute-btn"
              onClick={() => executeMethod(activeMethod)}
            >
              🚀 Execute {activeMethod}()
            </button>

            {demoResult && (
              <div className="result">
                <div className="result-header">
                  <span className="result-icon">✅</span>
                  <strong>Operation Result</strong>
                </div>
                {typeof demoResult === 'string' ? (
                  <p>{demoResult}</p>
                ) : (
                  <div className="result-content">
                    <div className="result-line">
                      <span className="result-label">Original:</span>
                      <span className="result-value">[{demoResult.original}]</span>
                    </div>
                    <div className="result-line">
                      <span className="result-label">Operation:</span>
                      <span className="result-value">{demoResult.message}</span>
                    </div>
                    <div className="result-line">
                      <span className="result-label">Result:</span>
                      <span className="result-value highlight">
                        {Array.isArray(demoResult.result) ? `[${demoResult.result}]` : demoResult.result}
                      </span>
                    </div>
                    <div className="result-line">
                      <span className="result-label">Explanation:</span>
                      <span className="result-value">{demoResult.explanation}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="methods-reference">
            <h3>📌 Quick Reference</h3>
            <div className="reference-grid">
              <div className="ref-card">
                <h4>⚡ Higher-Order Methods</h4>
                <ul>
                  <li><code>map()</code> - Transform each element → New array</li>
                  <li><code>filter()</code> - Filter elements → New array</li>
                  <li><code>reduce()</code> - Reduce to single value</li>
                  <li><code>forEach()</code> - Iterate (no return)</li>
                  <li><code>some()</code> - Check if any passes → Boolean</li>
                  <li><code>every()</code> - Check if all pass → Boolean</li>
                  <li><code>find()</code> - Find first match → Element</li>
                  <li><code>findIndex()</code> - Find index of match → Number</li>
                  <li><code>sort()</code> - Sort elements → Sorted array</li>
                </ul>
              </div>
              <div className="ref-card">
                <h4>📦 Mutating Methods</h4>
                <ul>
                  <li><code>push()</code> - Add to end (returns new length)</li>
                  <li><code>pop()</code> - Remove from end (returns removed)</li>
                  <li><code>shift()</code> - Remove from start (returns removed)</li>
                  <li><code>unshift()</code> - Add to start (returns new length)</li>
                  <li><code>splice()</code> - Add/remove anywhere (returns removed)</li>
                  <li><code>reverse()</code> - Reverse order (returns reversed)</li>
                  <li><code>sort()</code> - Sort elements (returns sorted)</li>
                </ul>
              </div>
              <div className="ref-card">
                <h4>✨ Non-Mutating Methods</h4>
                <ul>
                  <li><code>concat()</code> - Merge arrays → New array</li>
                  <li><code>slice()</code> - Extract portion → New array</li>
                  <li><code>map()</code> - Transform → New array</li>
                  <li><code>filter()</code> - Filter → New array</li>
                  <li><code>flat()</code> - Flatten → New array</li>
                  <li><code>flatMap()</code> - Map & flatten → New array</li>
                  <li><code>join()</code> - Join to string → String</li>
                  <li><code>indexOf()</code> / <code>includes()</code> - Search → Number/Boolean</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pro Tips Section */}
          <div className="pro-tips">
            <h3>💡 Pro Tips & Best Practices</h3>
            <div className="tips-grid">
              <div className="tip-card">
                <span className="tip-icon">🎯</span>
                <h4>Chain Methods</h4>
                <p>Combine methods like <code>arr.filter().map().reduce()</code> for powerful data transformations</p>
              </div>
              <div className="tip-card">
                <span className="tip-icon">⚡</span>
                <h4>Immutability</h4>
                <p>Methods like map(), filter(), reduce() don't modify original arrays - always return new ones</p>
              </div>
              <div className="tip-card">
                <span className="tip-icon">🚀</span>
                <h4>Performance</h4>
                <p>Use forEach() for operations, map() for transformations, filter() for removing items</p>
              </div>
              <div className="tip-card">
                <span className="tip-icon">📝</span>
                <h4>Arrow Functions</h4>
                <p>Use concise arrow functions: <code>arr.map(x ={'>'} x * 2)</code> instead of <code>function(x) {'{'} return x * 2 {'}'}</code></p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}


export default App