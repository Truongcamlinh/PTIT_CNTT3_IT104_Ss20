import { useEffect } from 'react'

function Ex03() {
    useEffect(()=>console.log('Mounted'),[])
  return (
    <div>
      Chào mừng bạn đến với ứng dụng của tôi!
    </div>
  )
}

export default Ex03
