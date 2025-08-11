// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// ใช้ body-parser เพื่อจัดการกับข้อมูลที่มาจาก form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ใช้ middleware สำหรับการให้บริการไฟล์ static
app.use(express.static(path.join(__dirname,)));

// Routing สำหรับหน้า HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
