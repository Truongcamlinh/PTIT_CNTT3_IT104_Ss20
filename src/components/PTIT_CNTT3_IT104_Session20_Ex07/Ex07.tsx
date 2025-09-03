import { useReducer } from "react";

type State = { count: number };
type Action = { type: "INCREMENT" } | { type: "DECREMENT" };
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Ex07() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Counter với useReducer</h2>
      <p>Số đếm hiện tại: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })} style={{ marginRight: "10px", padding: "6px 12px" }}>
        Tăng
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })} style={{ padding: "6px 12px" }}>
        Giảm
      </button>
    </div>
  );
}
