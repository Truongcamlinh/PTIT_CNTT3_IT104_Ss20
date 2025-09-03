import React from 'react'

function Ex04() {
  const [name, setName] = React.useState("");
  React.useEffect(() => {
    document.title = name ? `Xin chào, ${name}!` : "Trang React";
  }, [name]); return (
    <div>
      <h2>Chào mừng bạn đến với trang của chung tôi</h2>
      <input type="text" name="title" placeholder='Nhập tiêu đề trang...' onChange={(e) => setName(e.target.value)}
        value={name} />
      <p>Tiêu đề trang sẽ thay đổi khi bạn nhập tên vào trường tên</p>
    </div>
  )
}

export default Ex04