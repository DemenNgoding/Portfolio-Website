document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".type_job");
    const texts = ["PHOTOGRAPHER", "VIDEOGRAPHER"];
    let index = 0;

    function typeText() {
        textElement.textContent = "";
        let currentText = texts[index];
        let i = 0;

        const typingInterval = setInterval(() => {
            textElement.textContent += currentText.charAt(i);
            i++;
            if (i > currentText.length) {
                clearInterval(typingInterval);
                setTimeout(() => {
                    deleteText();
                }, 1000);
            }
        }, 100);
    }

    function deleteText() {
        let i = textElement.textContent.length;

        const deletingInterval = setInterval(() => {
            textElement.textContent = textElement.textContent.substring(0, i - 1);
            i--;
            if (i < 0) {
                clearInterval(deletingInterval);
                index = (index + 1) % texts.length;
                setTimeout(() => {
                    typeText();
                }, 500);
            }
        }, 50);
    }

    typeText();
});
