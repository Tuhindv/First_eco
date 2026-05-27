const products = [
    { 
        id:1,
        name: "Stridex Premium Casual shoes", brand: "Stridex",
        oldPrice: 2999, newPrice: 500, stock: 5, sizes: [6, 7, 9], 
        mainImg: "photo-1542291026-7eec264c27ff.jpg",
        gallery: ["photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg"] 
    },
    { 
        id:2,
        name: "Stridex Premium Casual shoes", brand: "Stridex",
        oldPrice: 2999, newPrice: 1292, stock: 5, sizes: [6, 7, 9], 
        mainImg: "photo-1542291026-7eec264c27ff.jpg",
        gallery: ["photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg"] 
    },
    // প্রোডাক্ট ২ (এভাবে কমা দিয়ে নতুনটি যোগ করুন)
    {
        id:3,
        name: "Running Sports Shoes", brand: "Nike",
        oldPrice: 4000, newPrice: 1500, stock: 8, sizes: [7, 8, 10], 
        mainImg: "photo-1483985988355-763728e1935b.jpg",
        gallery: ["photo-1483985988355-763728e1935b.jpg", "photo-1508685096489-7aacd43bd3b1.jpg"] 
    },
    // প্রোডাক্ট ৩ (আরেকটি যোগ করুন)
    { 
        id:4,
        name: "Casual Loafers", brand: "Bata",
        oldPrice: 1200, newPrice: 800, stock: 2, sizes: [6, 9], 
        mainImg: "photo-1517336714731-489689fd1ca8.jpg",
        gallery: ["photo-1517336714731-489689fd1ca8.jpg"] 
    },
    { 
        id:5,
        name: "Stridex Premium Casual shoes", brand: "Stridex",
        oldPrice: 2999, newPrice: 1292, stock: 5, sizes: [6, 7, 9], 
        mainImg: "photo-1542291026-7eec264c27ff.jpg",
        gallery: ["photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg"] 
    },
    { 
        id:6,
        name: "Stridex Premium Casual shoes", brand: "Stridex",
        oldPrice: 2999, newPrice: 1292, stock: 5, sizes: [6, 7, 9], 
        mainImg: "photo-1542291026-7eec264c27ff.jpg",
        gallery: ["photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg"] 
    },
    // প্রোডাক্ট ২ (এভাবে কমা দিয়ে নতুনটি যোগ করুন)
    { 
        id:7,
        name: "Running Sports Shoes", brand: "Nike",
        oldPrice: 4000, newPrice: 1500, stock: 8, sizes: [7, 8, 10], 
        mainImg: "photo-1483985988355-763728e1935b.jpg",
        gallery: ["photo-1483985988355-763728e1935b.jpg", "photo-1508685096489-7aacd43bd3b1.jpg"] 
    },
    // প্রোডাক্ট ৩ (আরেকটি যোগ করুন)
    { 
        id:8,
        name: "Casual Loafers", brand: "Bata",
        oldPrice: 1200, newPrice: 800, stock: 2, sizes: [6, 9], 
        mainImg: "photo-1517336714731-489689fd1ca8.jpg",
        gallery: ["photo-1517336714731-489689fd1ca8.jpg"] 
    },
    { 
        id:9,
        name: "Stridex Premium Casual shoes", brand: "Stridex",
        oldPrice: 2999, newPrice: 1292, stock: 5, sizes: [6, 7, 9], 
        mainImg: "photo-1542291026-7eec264c27ff.jpg",
        gallery: ["photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg"] 
    },
    { 
        id:10,
        name: "Stridex Premium Casual shoes", brand: "Stridex",
        oldPrice: 2999, newPrice: 1292, stock: 5, sizes: [6, 7, 9], 
        mainImg: "photo-1542291026-7eec264c27ff.jpg",
        gallery: ["photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg"] 
    },
    // প্রোডাক্ট ২ (এভাবে কমা দিয়ে নতুনটি যোগ করুন)
    { 
        id:11,
        name: "Running Sports Shoes", brand: "Nike",
        oldPrice: 4000, newPrice: 1500, stock: 8, sizes: [7, 8, 10], 
        mainImg: "photo-1483985988355-763728e1935b.jpg",
        gallery: ["photo-1483985988355-763728e1935b.jpg", "photo-1508685096489-7aacd43bd3b1.jpg"] 
    },
    // প্রোডাক্ট ৩ (আরেকটি যোগ করুন)
    { 
        id:12,
        name: "Casual Loafers", brand: "Bata",
        oldPrice: 1200, newPrice: 800, stock: 2, sizes: [6, 9], 
        mainImg: "photo-1517336714731-489689fd1ca8.jpg",
        gallery: ["photo-1517336714731-489689fd1ca8.jpg"] 
    },
];


const container = document.getElementById('productContainer');

// ===== SHOW PRODUCTS =====
products.forEach(p => {
    const discount = Math.round(((p.oldPrice - p.newPrice) / p.oldPrice) * 100);

    container.innerHTML += `
        <div class="product-card">
            <img src="${p.mainImg}" alt="${p.name}">
            
            <div class="brand-name">${p.brand}</div>
            <div class="product-name">${p.name}</div>

            <div class="price-section">
                <span class="new-price">₹${p.newPrice}</span>
                <span class="old-price">₹${p.oldPrice}</span>
                <span class="discount">${discount}% off</span>
            </div>

            <div style="margin-bottom:15px; font-size:14px; color:#555;">
                <p>স্টক: ${p.stock} টি অবশিষ্ট</p>
            </div>

            <div class="btn-group">
                <button class="view-btn" onclick="openGallery(${p.id})">Gallery</button>
                <button class="order-btn" onclick="orderNow('${p.name}', ${p.newPrice})">Order 🛒</button>
            </div>
        </div>
    `;
});

// ===== OPEN GALLERY =====
function openGallery(id) {
    const p = products.find(prod => prod.id === id);
    if (!p) return;

    document.getElementById("galleryTitle").innerText = p.name;

    document.getElementById("galleryImages").innerHTML = p.gallery
        .map(img => `<img src="${img}" class="gallery-img" onclick="openLightbox('${img}')">`)
        .join('');

    document.getElementById("galleryModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

// ===== LIGHTBOX =====
function openLightbox(imgSrc) {
    document.getElementById("lightboxModal").style.display = "block";
    document.getElementById("fullImage").src = imgSrc;
}

// ===== WHATSAPP ORDER =====
function orderNow(productName, price) {
    const phoneNumber = "8801311657122"; 

    const message = `হ্যালো, আমি এই পণ্যটি অর্ডার করতে চাই: ${productName}। দাম: ₹${price}। দয়া করে বিস্তারিত জানান।`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
}

// ===== CLOSE MODALS =====
function closeLightbox() {
    document.getElementById("lightboxModal").style.display = "none";
}

function closeModal() {
    document.getElementById("galleryModal").style.display = "none";
    document.body.style.overflow = "auto";
}