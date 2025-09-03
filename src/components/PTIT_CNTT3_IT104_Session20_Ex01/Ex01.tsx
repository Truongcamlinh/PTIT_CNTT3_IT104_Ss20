import React from 'react'


function Ex01() {
 const [text, setText] = React.useState("");

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Kiểm tra độ dài chuỗi</h2>
      <input
        type="text"
        placeholder="Nhập chuỗi..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />
      {text.length > 5 && (
        <p style={{ color: "red", marginTop: "10px" }}>
          Chuỗi bạn nhập dài hơn 5 ký tự!
        </p>
      )}
    </div>
  );}

export default Ex01
