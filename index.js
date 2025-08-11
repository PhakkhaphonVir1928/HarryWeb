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
