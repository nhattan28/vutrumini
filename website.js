const websites = [
    { url: "https://nhattan28.github.io/laygianongsan/", title: "Cập nhật giá nông nghiệp", desc: "Trang cập nhật giá nông sản hàng ngày, phục vụ nông dân và thương lái." },
    { url: "https://nhattan28.github.io/tracnghiem/", title: "Trắc nghiệm", desc: "Kiểm tra kiến thức qua các bài trắc nghiệm dựa vào file word." },
    { url: "https://nhattan28.github.io/phatvideohoathinh/", title: "Phát video hoạt hình", desc: "Trình phát video hoạt hình dành cho trẻ em và phụ huynh." },
    { url: "https://nhattan28.github.io/cuahangNhatTan/", title: "Cửa hàng Nhật Tân", desc: "Gian hàng online trưng bày và bán các sản phẩm của Nhật Tân." },
    { url: "https://nhattan28.github.io/tintucCNTT/", title: "Tin tức công nghệ", desc: "Cập nhật nhanh chóng các tin tức về công nghệ thông tin trong nước và thế giới." },
    { url: "https://nhattan28.github.io/hanggia/", title: "Hàng giả", desc: "Cảnh báo và chia sẻ thông tin liên quan đến hàng giả, hàng nhái." },
    { url: "https://nhattan28.github.io/tintuctonghop/", title: "Báo tổng hợp", desc: "Tổng hợp tin tức đa lĩnh vực: xã hội, đời sống, thể thao, giải trí..." },
    { url: "https://nhattan28.github.io/timbaihat/", title: "Tìm bài hát", desc: "Tìm tên bài hát qua lời, hỗ trợ tra cứu nhanh." },
    { url: "https://nhattan28.github.io/thoigian/", title: "Thời gian", desc: "Track thời gian. Không màu mè. Không thỏa hiệp. Chỉ hiệu suất." },
    { url: "https://nhattan28.github.io/lamdepcode/", title: "Đẹp code", desc: "Tối ưu và trình bày mã nguồn sạch, đẹp, chuẩn từng dòng."},
    { url: "https://nhattan28.github.io/sukhacnhau/", title: "So sánh", desc: "So sánh giữa sự khác nhau giữa các file."},
    { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-ecp7NlqtSfyunC8MBtCII_S_mAyRYbla8k9sRm0ZU0-pdc4UDDbpZAL-vvYyAzHZEKsMSPNENpA1/pubhtml", title: "Lịch thi & danh sách thi", desc: "Hiển thị lịch thi và danh sách thi"}
];

const itemsPerPage = 9;
let currentPage = 1;
let filteredWebsites = [...websites];

function normalizeString(str) {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function displayCards(page) {
    const container = document.getElementById('cardContainer');
    container.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = filteredWebsites.slice(start, end);

    pageItems.forEach(website => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${website.title}</h2>
            <p>${website.desc}</p>
        `;
        card.onclick = () => window.open(website.url, '_blank');
        container.appendChild(card);
    });

    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(filteredWebsites.length / itemsPerPage);
    document.getElementById('pageInfo').textContent = `Trang ${currentPage} / ${totalPages}`;
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages || totalPages === 0;
}

function searchCards() {
    const query = normalizeString(document.getElementById('searchBar').value);
    filteredWebsites = websites.filter(website =>
        normalizeString(website.title).includes(query) ||
        normalizeString(website.desc).includes(query)
    );
    currentPage = 1;
    displayCards(currentPage);
}

document.getElementById('searchBar').addEventListener('input', searchCards);
document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayCards(currentPage);
    }
});
document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < Math.ceil(filteredWebsites.length / itemsPerPage)) {
        currentPage++;
        displayCards(currentPage);
    }
});

displayCards(currentPage);
