import React, { useRef } from 'react'
import "./style.css"
function Ex06() {
    const [open, setOpen] = React.useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (open) {
            const t = setTimeout(() => inputRef.current?.focus(), 0);
            return () => clearTimeout(t);
        }
    }, [open]);
    return (
        <div>
            <h2>Ứng dụng React với Modal và Focus Input</h2>
            <button onClick={() => setOpen(true)}>Mở Modal</button>

            {open && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Đăng nhập</h3>
                        <input
                            ref={inputRef}
                            type="text"
                        />
                        <button onClick={() => setOpen(false)}>Đóng</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Ex06
