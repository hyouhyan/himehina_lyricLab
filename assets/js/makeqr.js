document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("qr-modal");
    const openBtn = document.getElementById("qr-toggle-btn");
    const closeBtn = document.getElementById("qr-close-btn");
    const qrContainer = document.getElementById("qr-code-container");
    let qrGenerated = false;

    // モーダル開く
    openBtn.addEventListener("click", function () {
        modal.classList.remove("hidden");

        // QRコード生成（初回だけ）
        if (!qrGenerated) {
            new QRCode(qrContainer, {
                text: "{{ .Permalink }}",
                width: 128,
                height: 128,
            });
            qrGenerated = true;
        }
    });

    // モーダル閉じる
    closeBtn.addEventListener("click", function () {
        modal.classList.add("hidden");
    });

    // モーダル外クリックで閉じる
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });
});