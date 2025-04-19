
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("qr-modal");
    const openBtn = document.getElementById("qr-toggle-btn");
    const closeBtn = document.getElementById("qr-close-btn");
    const qrContainer = document.getElementById("qr-code-container");
    let qrGenerated = false;

    const pageUrl = openBtn.dataset.url;

    openBtn.addEventListener("click", function () {
        modal.style.display = "flex"; // Tailwindのhiddenを使っていない場合はこれ！

        if (!qrGenerated) {
            new QRCode(qrContainer, {
                text: pageUrl,
                width: 128,
                height: 128,
            });
            qrGenerated = true;
        }
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});