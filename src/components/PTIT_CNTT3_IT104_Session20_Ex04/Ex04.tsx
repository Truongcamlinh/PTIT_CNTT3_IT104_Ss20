import React from 'react'

function Ex04() {
    const [title, setTitle] = React.useState('')
    React.useEffect(() => {
        document.title = title||"Xin chào";
    }, [title]);
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value);
    }
  return (
    <div>
          <h2>Chào mừng bạn đến với trang của chung tôi</h2>
          <input type="text" name="title" placeholder='Nhập tiêu đề trang...' onChange={handleTitleChange}  value={title}/>
          <p>Tiêu đề trang sẽ thay đổi khi bạn nhập tên vào trường tên</p>
    </div>
  )
}

export default Ex04
