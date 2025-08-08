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

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'reg.html'));
});

// POST route สำหรับการลงทะเบียน (ส่งข้อมูลไปยัง register.php)
app.post('/register', (req, res) => {
    // รับข้อมูลจากฟอร์ม
    const { username, email, password } = req.body;

    // เชื่อมต่อกับ PHP หรือฐานข้อมูลตามต้องการ
    // ตัวอย่าง:
    // res.send("Registration successful for " + username);

    res.send("Registration successful for " + username);
});
const axios = require('axios');

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // ส่งข้อมูลไปยัง PHP script
    axios.post('http://localhost/register.php', {
        username: username,
        email: email,
        password: password
    })
    .then(response => {
        res.send('Registration successful: ' + response.data);
    })
    .catch(error => {
        res.status(500).send('Error: ' + error);
    });
});


// เริ่มต้นเซิร์ฟเวอร์
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
