// ฟอร์ม register
document.getElementById('register-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.post('/register', {
            username: username,
            email: email,
            password: password
        });

        // หากสมัครสมาชิกสำเร็จ ให้ไปที่หน้า Login
        alert('Registration successful! Redirecting to login...');
        window.location.href = '/login'; // เปลี่ยนเส้นทางไปยังหน้า login
    } catch (error) {
        console.error('Error registering:', error.response?.data || error.message);
        alert('Registration failed, please try again.');
    }
});


// ฟอร์มเข้าสู่ระบบ (Login Form)
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // หยุดการ submit แบบปกติของฟอร์ม

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // ส่งข้อมูลไปยังเซิร์ฟเวอร์เพื่อทำการตรวจสอบ login
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Invalid credentials') {
            // แสดงข้อความผิดพลาดในกรอบข้อความ
            document.getElementById('errorMessage').innerText = 'Invalid email or password.';
        } else if (data.redirect) {
            // ถ้าล็อกอินสำเร็จ ให้ไปที่หน้าอื่น
            window.location.href = data.redirect;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('errorMessage').innerText = 'Something went wrong. Please try again.';
    });
});
// Toggle password visibility function
function togglePassword() {
    const passwordField = document.getElementById('password');
    const passwordLabel = document.querySelector('.show-password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordLabel.textContent = 'Hide Password';
    } else {
        passwordField.type = 'password';
        passwordLabel.textContent = 'Show Password';
    }
}

// Display error message when login fails
function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
}

// ฟอร์มคำสั่งซื้อ
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('orderForm');
    const confirmationModalElement = document.getElementById('confirmationModal');
    const confirmationModal = new bootstrap.Modal(confirmationModalElement);

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บ

        const quantity = document.getElementById("quantity").value;

        // ตรวจสอบจำนวน
        if (quantity < 1) {
            alert("กรุณากรอกจำนวนที่ถูกต้อง");
            return;
        }

        // แสดง Modal ยืนยัน
        confirmationModal.show();
    });
});
