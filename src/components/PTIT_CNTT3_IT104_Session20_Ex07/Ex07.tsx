import React from 'react'

function Ex07() {
    const [count, dispatch] = React.useReducer((state: number, action: 'increase' | 'decrease') => {
        switch (action) {
            case 'increase':
                return state + 1;
            case 'decrease':
                return state - 1;
        }
    }, 0);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch('increase')}>Tăng</button>
      <button onClick={() => dispatch('decrease')}>Giảm</button>
    </div>
  )
}

export default Ex07
