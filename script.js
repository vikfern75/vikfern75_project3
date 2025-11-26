document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('#questionButton');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("Feel free to ask any questions!");
        });
    });
});
