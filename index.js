document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");
    const popupClose = document.getElementById("popup-close");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บ

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            showPopup("โปรดกรอกข้อมูลให้ครบถ้วน");
            return;
        }

        if (!email.endsWith("@gmail.com")) {
            showPopup("โปรดกรอกอีเมลที่มี @gmail.com");
            return;
        }

        showPopup("ได้รับข้อมูลแล้ว โปรดรอการติดต่อกลับทางอีเมล");
        form.reset(); // ล้างข้อมูลในฟอร์ม
    });

    popupClose.addEventListener("click", () => {
        popup.classList.add("hidden");
    });

    function showPopup(message) {
        popupMessage.textContent = message;
        popup.classList.remove("hidden");
    }
});
