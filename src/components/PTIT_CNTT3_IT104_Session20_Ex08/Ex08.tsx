import React, { useReducer } from "react";
type State = {
  name: string;
  email: string;
};
type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "RESET" };
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "RESET":
      return { name: "", email: "" };
    default:
      return state;
  }
}

export default function Ex08() {
  const [state, dispatch] = useReducer(reducer, { name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Tên: ${state.name}\nEmail: ${state.email}`);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Form thông tin người dùng</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên: </label>
          <input
            type="text"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />
        </div>
        <button type="submit" style={{ marginRight: "10px" }}>
          Gửi
        </button>
        <button type="button" onClick={() => dispatch({ type: "RESET" })}>
          Reset
        </button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h3>Thông tin hiện tại:</h3>
        <p>Tên: {state.name}</p>
        <p>Email: {state.email}</p>
      </div>
    </div>
  );
}
