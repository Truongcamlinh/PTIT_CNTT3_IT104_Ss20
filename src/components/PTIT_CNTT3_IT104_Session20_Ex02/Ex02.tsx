import React, { useState } from 'react'

type State = {
    name: string,
    email: string
}
function Ex02() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div style={{padding: "20px" }}>
            <h2>Nhập thông tin người dùng</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="name">Tên: </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Nhập tên..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="email">Email: </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Nhập email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ padding: "5px" }}
                    />
                </div>
                <button type="submit" style={{ padding: "6px 12px" }}>
                    Gửi
                </button>
            </form>

            {submitted && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Thông tin đã nhập:</h3>
                    <p><strong>Tên:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                </div>
            )}
        </div>
    );
}

export default Ex02
