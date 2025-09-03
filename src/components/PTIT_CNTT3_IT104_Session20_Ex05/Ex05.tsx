import { useEffect, useState } from 'react'

function Ex05() {
    const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Bộ đếm thời gian</h2>
      <p>Thời gian đã trôi qua: {seconds} giây</p>
    </div>
  );
}
export default Ex05
