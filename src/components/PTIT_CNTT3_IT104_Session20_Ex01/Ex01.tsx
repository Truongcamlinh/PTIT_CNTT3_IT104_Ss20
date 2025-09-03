import React from 'react'


function Ex01() {
    const [state, setState] = React.useState('');
    const isLong=state.length < 5;
    return (
        <div>
            <h2>Kiểm tra độ dài chuỗi nhập vào</h2>
            <input type="text" placeholder='Nhập vào đây' name='inputString' onChange={(e)=>setState(e.target.value)}/>
            {isLong && (<div style={{ color: 'red', border: '1px solid red', backgroundColor: '#FFE6E6', textAlign: 'center' }}>Chuỗi nhập vào dài hơn 5 ký tự!</div>)}
        </div>
    )
}

export default Ex01
