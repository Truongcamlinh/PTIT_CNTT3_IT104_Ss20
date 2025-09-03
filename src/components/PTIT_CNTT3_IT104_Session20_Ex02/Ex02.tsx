import React from 'react'

type State = {
    name: string,
    email: string
}
function Ex02() {
    const [form, setForm] = React.useState<State>({ name: '', email: '' });
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);
    };
    return (
        <div>
            <h2>Thông tin người dùng</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Nhập tên' name='name' onChange={handleChange} /><br />
                <input type="email" placeholder='Nhập email' name='email' onChange={handleChange} /><br />
                <button type='submit'>Gửi</button>
            </form>
            
            {isSubmitted&&(<div>
                <h3>Thông tin đã nhập:</h3>
                <p>Tên: {form.name}</p>
                <p>Email: {form.email}</p>
            </div>)}
        </div>
    )
}

export default Ex02
