import React, { useReducer } from 'react';

type State = { name: string; email: string };
type Action =
    | { type: 'CHANGE'; field: keyof State; value: string }
    | { type: 'RESET' };

const initialState: State = { name: '', email: '' };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'CHANGE':
            return { ...state, [action.field]: action.value };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

function Ex08() {
    const [form, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch({ type: 'CHANGE', field: name as keyof State, value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div>
            <h2>User Information Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                />
                <br />
            </form>

            <div>
                <h3>Thông tin người dùng:</h3>
                <p>Tên: {form.name || 'Chưa nhập'}</p>
                <p>Email: {form.email || 'Chưa nhập'}</p>
            </div>
        </div>
    );
}
export default Ex08;