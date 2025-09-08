import React, { useState, useEffect } from "react";
import { Table, Button, Input, Modal, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface Book {
  id: number;
  title: string;
}

function B4() {
  const [books, setBooks] = useState<Book[]>(() => {
    const saved = localStorage.getItem("books");
    return saved ? JSON.parse(saved) : [
      { id: 1, title: "Clean Code" },
      { id: 2, title: "Design Patterns" },
      { id: 3, title: "Refactoring" },
      { id: 4, title: "Domain Driven Design" },
      { id: 5, title: "The Pragmatic Programmer" },
    ];
  });
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [modal, setModal] = useState<{ open: boolean; id: number | null }>({ open: false, id: null });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleAddOrUpdate = () => {
    const title = input.trim();
    if (!title) return;
    if (editingId !== null) {
      setBooks(books.map(b => b.id === editingId ? { ...b, title } : b));
      setEditingId(null);
    } else {
      const nextId = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
      setBooks([...books, { id: nextId, title }]);
    }
    setInput("");
  };

  const handleEdit = (id: number) => {
    const book = books.find(b => b.id === id);
    if (book) {
      setEditingId(id);
      setInput(book.title);
    }
  };

  const handleDelete = (id: number) => {
    setBooks(books.filter(b => b.id !== id));
    setModal({ open: false, id: null });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: 60,
      align: "center" as const,
    },
    {
      title: "Tiêu đề lẻ",
      dataIndex: "title",
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: "Hành động",
      dataIndex: "action",
      align: "center" as const,
      width: 120,
      render: (_: any, record: Book) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            size="small"
            onClick={() => handleEdit(record.id)}
          />
          <Button
            icon={<DeleteOutlined />}
            size="small"
            danger
            onClick={() => setModal({ open: true, id: record.id })}
          />
        </Space>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #eee", padding: 24 }}>
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 0 }}>
          <span style={{ marginRight: 8 }}>📚</span>Quản lý sách
        </h1>
        <div style={{ color: "#888", fontSize: 15 }}>
          Quản lý, chỉnh sửa và cập nhật danh sách sách trong hệ thống.
        </div>
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <Input
          placeholder="Nhập tiêu đề sách"
          value={input}
          onChange={e => setInput(e.target.value)}
          onPressEnter={handleAddOrUpdate}
          style={{ flex: 1 }}
        />
        <Button type="primary" onClick={handleAddOrUpdate}>
          {editingId !== null ? "Cập nhật" : "Thêm sách"}
        </Button>
      </div>
      <Table
        dataSource={books}
        columns={columns}
        rowKey="id"
        pagination={false}
        bordered
      />
      <Modal
        open={modal.open}
        onOk={() => handleDelete(modal.id!)}
        onCancel={() => setModal({ open: false, id: null })}
        okText="OK"
        cancelText="Cancel"
      >
        <div style={{ fontSize: 16 }}>Bạn chắc chắn muốn xóa?</div>
      </Modal>
    </div>
  );
}

export default B4;