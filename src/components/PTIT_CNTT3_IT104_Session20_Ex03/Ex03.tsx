import React, { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    console.log("Component Welcome vừa được render lần đầu!");
  }, []);
  return (
    <div>
      <h1>Xin chào!</h1>
      <p>Chào mừng bạn đến với ứng dụng React.</p>
    </div>
  );
}
