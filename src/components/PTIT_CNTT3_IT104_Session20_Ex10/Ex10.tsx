import React from 'react'

const data = [
    { id: 1, title: "Hướng dẫn sử dụng React" },
    { id: 2, title: "Tìm hiểu về TypeScript" },
    { id: 3, title: "Xây dựng ứng dụng với Next.js" },
    { id: 4, title: "Lập trình ứng dụng với Node.js" },

]
function Ex10() {
    const [unreadPosts, setUnreadPosts] = React.useState(data)
    const [readPosts, setReadPosts] = React.useState<{ id: number, title: string }[]>([])
    return (
        <div>
            <h2>Danh sách bài viết</h2>
            <div>
                <h3>Bài viết chưa đọc</h3>
                {unreadPosts.length > 0 ? (<ul>
                    {unreadPosts.map(item => (
                        <li key={item.id}>{item.title} <button onClick={() => {
                            setReadPosts([...readPosts, item])
                            setUnreadPosts(unreadPosts.filter(post => post.id !== item.id))
                        }}>Đánh dấu đã đọc</button></li>
                    ))}
                </ul>) : (<p>Không có bài viết chưa đọc</p>)}
            </div>
            <div>
                <h3>Bài viết đã đọc</h3>
                {readPosts.length > 0 ? (<ul>
                    {readPosts.map(item => (
                        <li key={item.id}>{item.title} <button onClick={() => {
                            setUnreadPosts([...unreadPosts, item])
                            setReadPosts(readPosts.filter(post => post.id !== item.id))
                        }}>Đánh dấu chưa đọc</button></li>
                    ))}
                </ul>) : (<p>Không có bài viết đã đọc</p>)}
            </div>
        </div>
    )
}

export default Ex10
