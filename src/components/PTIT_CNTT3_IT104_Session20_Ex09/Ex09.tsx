import  { useState } from "react";

const data = [
  { id: 1, name: "Apple iPhone 13", description: "Smartphone mới nhất của Apple" },
  { id: 2, name: "Samsung Galaxy S21", description: "Smartphone flagship của Samsung" },
  { id: 3, name: "OnePlus 9 Pro", description: "Smartphone hiệu suất cao từ OnePlus" },
  { id: 4, name: "Google Pixel 6", description: "Điện thoại thông minh của Google" },
  { id: 5, name: "Xiaomi Mi 11", description: "Điện thoại thông minh giá rẻ" },
];

export default function Ex09() {
  const [keyword, setKeyword] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase()) ||
      item.description.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Tìm kiếm sản phẩm</h2>
      <input
        type="text"
        placeholder="Nhập từ khóa..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ padding: "8px", width: "300px", marginBottom: "20px" }}
      />
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              <strong>{item.name}</strong>
              <p>{item.description}</p>
            </li>
          ))
        ) : (
          <p>Không tìm thấy sản phẩm phù hợp.</p>
        )}
      </ul>
    </div>
  );
}
