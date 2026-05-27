const products = [
    { 
        name: "Stridex Premium Casual shoes", brand: "Stridex",
        oldPrice: 2999, newPrice: 500, stock: 5, sizes: [6, 7, 9], 
        mainImg: "photo-1542291026-7eec264c27ff.jpg",
        gallery: ["photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg"] 
    },
    { 
        name: "Stridex Premium Casual shoes", brand: "Stridex",
        oldPrice: 2999, newPrice: 1292, stock: 5, sizes: [6, 7, 9], 
        mainImg: "photo-1542291026-7eec264c27ff.jpg",
        gallery: ["photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg"] 
    },
    // প্রোডাক্ট ২ (এভাবে কমা দিয়ে নতুনটি যোগ করুন)
    { 
        name: "Running Sports Shoes", brand: "Nike",
        oldPrice: 4000, newPrice: 1500, stock: 8, sizes: [7, 8, 10], 
        mainImg: "photo-1483985988355-763728e1935b.jpg",
        gallery: ["photo-1483985988355-763728e1935b.jpg", "photo-1508685096489-7aacd43bd3b1.jpg"] 
    },
    // প্রোডাক্ট ৩ (আরেকটি যোগ করুন)
    { 
        name: "Casual Loafers", brand: "Bata",
        oldPrice: 1200, newPrice: 800, stock: 2, sizes: [6, 9], 
        mainImg: "photo-1517336714731-489689fd1ca8.jpg",
        gallery: ["photo-1517336714731-489689fd1ca8.jpg"] 
    },
    { 
        name: "Stridex Premium Casual shoes", brand: "Stridex",
        oldPrice: 2999, newPrice: 1292, stock: 5, sizes: [6, 7, 9], 
        mainImg: "photo-1542291026-7eec264c27ff.jpg",
        gallery: ["photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg"] 
    },
    { 
        name: "Stridex Premium Casual shoes", brand: "Stridex",
        oldPrice: 2999, newPrice: 1292, stock: 5, sizes: [6, 7, 9], 
        mainImg: "photo-1542291026-7eec264c27ff.jpg",
        gallery: ["photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg"] 
    },
    // প্রোডাক্ট ২ (এভাবে কমা দিয়ে নতুনটি যোগ করুন)
    { 
        name: "Running Sports Shoes", brand: "Nike",
        oldPrice: 4000, newPrice: 1500, stock: 8, sizes: [7, 8, 10], 
        mainImg: "photo-1483985988355-763728e1935b.jpg",
        gallery: ["photo-1483985988355-763728e1935b.jpg", "photo-1508685096489-7aacd43bd3b1.jpg"] 
    },
    // প্রোডাক্ট ৩ (আরেকটি যোগ করুন)
    { 
        name: "Casual Loafers", brand: "Bata",
        oldPrice: 1200, newPrice: 800, stock: 2, sizes: [6, 9], 
        mainImg: "photo-1517336714731-489689fd1ca8.jpg",
        gallery: ["photo-1517336714731-489689fd1ca8.jpg"] 
    },
    { 
        name: "Stridex Premium Casual shoes", brand: "Stridex",
        oldPrice: 2999, newPrice: 1292, stock: 5, sizes: [6, 7, 9], 
        mainImg: "photo-1542291026-7eec264c27ff.jpg",
        gallery: ["photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg"] 
    },
    { 
        name: "Stridex Premium Casual shoes", brand: "Stridex",
        oldPrice: 2999, newPrice: 1292, stock: 5, sizes: [6, 7, 9], 
        mainImg: "photo-1542291026-7eec264c27ff.jpg",
        gallery: ["photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg","photo-1542291026-7eec264c27ff.jpg", "photo-1505740420928-5e560c06d30e.jpg"] 
    },
    // প্রোডাক্ট ২ (এভাবে কমা দিয়ে নতুনটি যোগ করুন)
    { 
        name: "Running Sports Shoes", brand: "Nike",
        oldPrice: 4000, newPrice: 1500, stock: 8, sizes: [7, 8, 10], 
        mainImg: "photo-1483985988355-763728e1935b.jpg",
        gallery: ["photo-1483985988355-763728e1935b.jpg", "photo-1508685096489-7aacd43bd3b1.jpg"] 
    },
    // প্রোডাক্ট ৩ (আরেকটি যোগ করুন)
    { 
        name: "Casual Loafers", brand: "Bata",
        oldPrice: 1200, newPrice: 800, stock: 2, sizes: [6, 9], 
        mainImg: "photo-1517336714731-489689fd1ca8.jpg",
        gallery: ["photo-1517336714731-489689fd1ca8.jpg"] 
    },
];


const container = document.getElementById('productContainer');

// পণ্যগুলো স্ক্রিনে প্রদর্শন করা
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

// গ্যালারি ওপেন করা
function openGallery(id) {
    const p = products.find(prod => prod.id === id);
    if (!p) return; // আইডি না পেলে ফাংশনটি বন্ধ হবে
    document.getElementById("galleryTitle").innerText = p.name;
    document.getElementById("galleryImages").innerHTML = p.gallery
        .map(img => `<img src="${img}" class="gallery-img" onclick="openLightbox('${img}')">`)
        .join('');
    document.getElementById("galleryModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

// লাইটবক্স ওপেন করা
function openLightbox(imgSrc) {
    document.getElementById("lightboxModal").style.display = "block";
    document.getElementById("fullImage").src = imgSrc;
}

// হোয়াটসঅ্যাপে অর্ডার করার লজিক
function orderNow(productName, price) {
    const phoneNumber = "01311657122"; 
    const message = `হ্যালো, আমি এই পণ্যটি অর্ডার করতে চাই: ${productName}। দাম: ₹${price}। দয়া করে বিস্তারিত জানান।`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// মোডাল বন্ধ করা
function closeLightbox() {
    document.getElementById("lightboxModal").style.display = "none";
}

function closeModal() {
    document.getElementById("galleryModal").style.display = "none";
    document.body.style.overflow = "auto";
}