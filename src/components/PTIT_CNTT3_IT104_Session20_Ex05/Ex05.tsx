import React, { useEffect } from 'react'

function Ex05() {
    const [seconds, setSeconds] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(true);
    useEffect(() => {
        if (!isRunning) return;
        const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <div>
            <h2>Bộ đếm:</h2>
            <p>{seconds} giây</p>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Dừng' : 'Bắt đầu'}
            </button>
            <button onClick={() => setSeconds(0)}>
                Đặt lại
            </button>
        </div>
    )
}
export default Ex05
