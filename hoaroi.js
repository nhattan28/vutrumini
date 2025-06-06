const createPetal = () => {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.innerText = '🌸'; // bạn có thể thay bằng hình khác như 🌼 ❀ ✿
    
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = 5 + Math.random() * 5 + 's';
    petal.style.opacity = Math.random();
    petal.style.fontSize = Math.random() * 10 + 10 + 'px';

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000); // xóa sau 10s
};

setInterval(createPetal, 300); // tạo hoa mỗi 300ms
