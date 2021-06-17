import React, { useState } from 'react';

function Example() {
  debugger;
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <p>You clicked {count} times</p> */}
      <p>Like {count} </p>
      <button onClick={() => setCount(count + 1)}>
        Like
      </button>
    </div>
  );
}
export default Example;
//https://reactjs.org/docs/hooks-state.html