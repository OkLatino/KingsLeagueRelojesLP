// *** CAMBIO CLAVE: USAR 'load' EN LUGAR DE 'DOMContentLoaded' ***
window.addEventListener('load', () => {
    // --- DATA ---
    const productsData = [
        {
            id: 1,
            sku: 'KLSW-01',
            price: 1299.00,
            fullPrice: 3998.00,
            mainImage: 'assets/relojes/klsw-01/klsw-01 (1).jpg',
            gallery: [
                'assets/relojes/klsw-01/klsw-01 (1).jpg',
                'assets/relojes/klsw-01/klsw-01 (2).jpg',
                'assets/relojes/klsw-01/klsw-01 (3).jpg',
                'assets/relojes/klsw-01/klsw-01 (4).jpg',
                'assets/relojes/klsw-01/klsw-01 (5).jpg'
            ],
            specifications: [
                "Caja resistente de Zinc + ABS",
                "Certificación IP68 a prueba de agua y polvo",
                "Batería de 600mAh de larga duración",
                "Linterna integrada y control de cámara",
                "Brújula, altitud y presión atmosférica",
                "Monitoreo de oxígeno en sangre, ritmo cardiaco y sueño",
                "Clima, control de música y deportes múltiples",
                "Bluetooth 5.2 para conexión rápida y estable",
                "Función de llamadas y notificaciones en tiempo real",
                "Pantalla personalizable",
                "Incluye: Smartwatch, cable de carga, manual y 2 juegos de extensibles."
            ]
        },
        {
            id: 2,
            sku: 'STKL-01',
            price: 999.00,
            fullPrice: 2398.00,
            mainImage: 'assets/relojes/stkl-01/stkl-01 (1).jpg',
            gallery: [
                'assets/relojes/stkl-01/stkl-01 (1).jpg',
                'assets/relojes/stkl-01/stkl-01 (2).jpg',
                'assets/relojes/stkl-01/stkl-01 (3).jpg',
                'assets/relojes/stkl-01/stkl-01 (4).jpg',
                'assets/relojes/stkl-01/stkl-01 (5).jpg',
                'assets/relojes/stkl-01/stkl-01 (6).jpg'
            ]
        },
        { id: 3, sku: 'STKL-02', price: 999.00, fullPrice: 2398.00, mainImage: 'assets/relojes/stkl-02/stkl-02 (1).jpg', gallery: ['assets/relojes/stkl-02/stkl-02 (1).jpg', 'assets/relojes/stkl-02/stkl-02 (2).jpg', 'assets/relojes/stkl-02/stkl-02 (3).jpg', 'assets/relojes/stkl-02/stkl-02 (4).jpg', 'assets/relojes/stkl-02/stkl-02 (5).jpg', 'assets/relojes/stkl-02/stkl-02 (6).jpg'] },
        { id: 4, sku: 'STKL-03', price: 999.00, fullPrice: 2398.00, mainImage: 'assets/relojes/stkl-03/stkl-03 (1).jpg', gallery: ['assets/relojes/stkl-03/stkl-03 (1).jpg', 'assets/relojes/stkl-03/stkl-03 (2).jpg', 'assets/relojes/stkl-03/stkl-03 (3).jpg', 'assets/relojes/stkl-03/stkl-03 (4).jpg', 'assets/relojes/stkl-03/stkl-03 (5).jpg', 'assets/relojes/stkl-03/stkl-03 (6).jpg'] },
        { id: 5, sku: 'STKL-04', price: 999.00, fullPrice: 2398.00, mainImage: 'assets/relojes/stkl-04/stkl-04 (1).jpg', gallery: ['assets/relojes/stkl-04/stkl-04 (1).jpg', 'assets/relojes/stkl-04/stkl-04 (2).jpg', 'assets/relojes/stkl-04/stkl-04 (3).jpg', 'assets/relojes/stkl-04/stkl-04 (4).jpg', 'assets/relojes/stkl-04/stkl-04 (5).jpg', 'assets/relojes/stkl-04/stkl-04 (6).jpg'] },
        { id: 6, sku: 'STKL-05', price: 999.00, fullPrice: 2398.00, mainImage: 'assets/relojes/stkl-05/stkl-05 (1).jpg', gallery: ['assets/relojes/stkl-05/stkl-05 (1).jpg', 'assets/relojes/stkl-05/stkl-05 (2).jpg', 'assets/relojes/stkl-05/stkl-05 (3).jpg', 'assets/relojes/stkl-05/stkl-05 (4).jpg', 'assets/relojes/stkl-05/stkl-05 (5).jpg', 'assets/relojes/stkl-05/stkl-05 (6).jpg'] },
        { id: 7, sku: 'STKL-06', price: 999.00, fullPrice: 2398.00, mainImage: 'assets/relojes/stkl-06/stkl-06 (1).jpg', gallery: ['assets/relojes/stkl-06/stkl-06 (1).jpg', 'assets/relojes/stkl-06/stkl-06 (2).jpg', 'assets/relojes/stkl-06/stkl-06 (3).jpg', 'assets/relojes/stkl-06/stkl-06 (4).jpg', 'assets/relojes/stkl-06/stkl-06 (5).jpg', 'assets/relojes/stkl-06/stkl-06 (6).jpg'] },
        { id: 8, sku: 'STKL-07', price: 1299.00, fullPrice: 2998.00, mainImage: 'assets/relojes/stkl-07/stkl-07 (1).jpg', gallery: ['assets/relojes/stkl-07/stkl-07 (1).jpg', 'assets/relojes/stkl-07/stkl-07 (2).jpg', 'assets/relojes/stkl-07/stkl-07 (3).jpg', 'assets/relojes/stkl-07/stkl-07 (4).jpg', 'assets/relojes/stkl-07/stkl-07 (5).jpg', 'assets/relojes/stkl-07/stkl-07 (6).jpg'] },
        { id: 9, sku: 'STKL-08', price: 1299.00, fullPrice: 2998.00, mainImage: 'assets/relojes/stkl-08/stkl-08 (1).jpg', gallery: ['assets/relojes/stkl-08/stkl-08 (1).jpg', 'assets/relojes/stkl-08/stkl-08 (2).jpg', 'assets/relojes/stkl-08/stkl-08 (3).jpg', 'assets/relojes/stkl-08/stkl-08 (4).jpg', 'assets/relojes/stkl-08/stkl-08 (5).jpg', 'assets/relojes/stkl-08/stkl-08 (6).jpg'] },
        { id: 10, sku: 'STKL-09', price: 999.00, fullPrice: 2598.00, mainImage: 'assets/relojes/stkl-09/stkl-09 (1).jpg', gallery: ['assets/relojes/stkl-09/stkl-09 (1).jpg', 'assets/relojes/stkl-09/stkl-09 (2).jpg', 'assets/relojes/stkl-09/stkl-09 (3).jpg', 'assets/relojes/stkl-09/stkl-09 (4).jpg', 'assets/relojes/stkl-09/stkl-09 (5).jpg', 'assets/relojes/stkl-09/stkl-09 (6).jpg'] }
    ];

    const analogWatchSpecs = [
        "Caja de acero inoxidable de 42mm",
        "Correa flexible y resistente de silicona",
        "Movimiento de cuarzo confiable",
        "Calendario con día del mes",
        "Función cronógrafo para cronometraje",
        "Diseño deportivo y moderno de la Colección Kings League"
    ];

    let products = productsData.map((p) => {
        return {
            ...p,
            name: p.sku, // Use SKU as the name
            specifications: p.specifications || analogWatchSpecs, // Assign specific or default specs
            reviews: [
                { author: 'Juan P.', rating: 5, text: '¡Increíble! Es más resistente de lo que imaginé.' },
                { author: 'Ana G.', rating: 4, text: 'Muy buen diseño y la pantalla se ve genial.' }
            ]
        };
    });

    const presidents = [
        { name: "'Chicharito' Hernández", team: 'Olimpo United', logo: 'assets/escudos/OlimpoUnitedFC.webp', background: 'assets/presidentes/CH14.png' },
        { name: 'Hnos. Montiel', team: 'Peluche Caligari', logo: 'assets/escudos/PelucheCaligariFC.webp', background: 'assets/presidentes/ESCORPION.png' },
        { name: 'Alana + Barcagamer', team: 'Raniza FC', logo: 'assets/escudos/RanizaFC.webp', background: 'assets/presidentes/ALANA.png' },
        { name: 'NataliaMX + PipePunk', team: 'Club de Cuervos', logo: 'assets/escudos/ClubDeCuervosFC.webp', background: 'assets/presidentes/PIPEYNATA.png' },
    ];

    const teams = [
        { name: 'Peluche Caligari', logo: 'assets/escudos/PelucheCaligariFC.webp' },
        { name: 'Raniza FC', logo: 'assets/escudos/RanizaFC.webp' },
        { name: 'Real Titán', logo: 'assets/escudos/TitanFC.webp' },
        { name: 'Muchachos FC', logo: 'assets/escudos/MuchachosFC.webp' },
        { name: 'West Santos FC', logo: 'assets/escudos/WestSantosFC.webp' },
        { name: 'Olimpo United', logo: 'assets/escudos/OlimpoUnitedFC.webp' },
        { name: 'Galácticos del Caribe', logo: 'assets/escudos/GalacticosDelCaribeFC.webp' },
        { name: 'Club de Cuervos', logo: 'assets/escudos/ClubDeCuervosFC.webp' },
        { name: 'Los Aliens FC', logo: 'assets/escudos/LosAliens.webp' },
        { name: 'Atlético Parceros FC', logo: 'assets/escudos/ParcerosFC.webp' },
        { name: 'Persas FC', logo: 'assets/escudos/PersasFC.webp' },
        { name: 'Los Chamos FC', logo: 'assets/escudos/ChamosFC.webp' },
    ];

    const reviewsData = [
        { author: 'Michelle C.', rating: 5, text: 'Ok, era escéptica sobre este reloj...', image: './img/reviews/review-1.jpg' },
        { author: 'Nick R.', rating: 5, text: 'Este reloj hace casi todo lo que necesito...', image: './img/reviews/review-2.jpg' },
        { author: 'Jeffrey A.', rating: 4, text: 'Mi mejor reloj hasta ahora...', image: './img/reviews/review-3.jpg' },
        { author: 'Cherrie L.', rating: 5, text: 'El reloj llegó en 7 días...', image: './img/reviews/review-4.jpg' },
    ];

    // --- DOM ELEMENTS ---
    let cart = [];
    const getEl = (id) => document.getElementById(id);
    const productGrid = getEl('product-grid');
    const presidentsGrid = getEl('presidents-grid');
    const reviewsGrid = getEl('reviews-grid-container');
    const teamTickerTrack = getEl('team-ticker-track');
    const modal = getEl('product-modal');
    const closeModalBtn = getEl('close-modal');
    const modalName = getEl('modal-product-name');
    const modalPrice = getEl('modal-product-price');
    const modalMainImage = getEl('modal-main-image');
    const modalSpecifications = getEl('modal-specifications');
    const modalThumbnailGallery = getEl('modal-thumbnail-gallery');
    const modalReviewsContainer = getEl('modal-reviews-container');
    const quantityInput = getEl('quantity-input');
    const quantityPlus = getEl('quantity-plus');
    const quantityMinus = getEl('quantity-minus');
    const addToCartBtn = getEl('add-to-cart-btn');
    const cartBtn = getEl('cart-btn');
    const cartCount = getEl('cart-count');
    const searchInput = getEl('search-input');
    const searchBtn = getEl('search-btn');
    const header = getEl('header');
    const cartModal = getEl('cart-modal');
    const closeCartModalBtn = getEl('close-cart-modal');
    const cartItemsContainer = getEl('cart-items-container');
    const cartSubtotal = getEl('cart-subtotal');
    const mobileMenuBtn = getEl('mobile-menu-btn');
    const mobileMenu = getEl('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // --- HERO CAROUSEL ELEMENTS ---
    const heroCarouselTrack = getEl('hero-carousel-track');
    const carouselDotsContainer = getEl('carousel-dots');
    const prevSlideBtn = getEl('prev-slide-btn');
    const nextSlideBtn = getEl('next-slide-btn');
    const buyMainProductBtn = getEl('buy-main-product-btn');

    // --- MODAL GALLERY ELEMENTS ---
    const modalPrevBtn = getEl('modal-prev-btn');
    const modalNextBtn = getEl('modal-next-btn');
    let currentGalleryIndex = 0;
    let currentProductGallery = [];

    // --- HERO CAROUSEL LOGIC ---
    const heroVideos = [
        'assets/logos/VIDEOHERO.mp4',
        'assets/logos/VIDEOHERO3.mp4',
        'assets/logos/VIDEOHERO2.mp4'
    ];
    let currentSlide = 0;
    let autoSlideInterval;

    // Populate carousel
    heroVideos.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.className = 'w-full flex-shrink-0';
        const video = document.createElement('video');
        video.src = src;
        video.className = 'w-full h-auto';
        video.muted = true;
        video.loop = true;
        video.playsInline = true; // Important for iOS
        video.setAttribute('autoplay', ''); // Ensure autoplay
        slide.appendChild(video);
        heroCarouselTrack.appendChild(slide);

        const dot = document.createElement('button');
        dot.className = 'w-3 h-3 rounded-full transition-colors';
        dot.dataset.index = index;
        carouselDotsContainer.appendChild(dot);
    });

    const slides = heroCarouselTrack.querySelectorAll('video');
    const dots = carouselDotsContainer.querySelectorAll('button');

    const showSlide = (index) => {
        heroCarouselTrack.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach((dot, i) => {
            dot.style.backgroundColor = i === index ? '#F59E0B' : '#888';
        });

        slides.forEach((video, i) => {
            if (i === index) {
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        // Autoplay was prevented.
                    });
                }
            } else {
                video.pause();
            }
        });

        currentSlide = index;
    };

    const nextSlide = () => {
        const nextSlideIndex = (currentSlide + 1) % slides.length;
        showSlide(nextSlideIndex);
    };

    const startAutoSlide = () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 7000);
    };

    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    };

    nextSlideBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    prevSlideBtn.addEventListener('click', () => {
        const prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevSlideIndex);
        resetAutoSlide();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            showSlide(index);
            resetAutoSlide();
        });
    });

    buyMainProductBtn.addEventListener('click', () => {
        openModal(1);
    });

    // --- RENDER FUNCTIONS ---
    const renderProducts = (productsToRender) => {
        productGrid.innerHTML = '';
        if (productsToRender.length === 0) {
            productGrid.innerHTML = `<p class="text-gray-400 col-span-full text-center">No se encontraron relojes.</p>`;
            return;
        }
        productsToRender.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card rounded-lg overflow-hidden shadow-lg cursor-pointer';
            card.dataset.productId = product.id;
            card.innerHTML = `
                <img src="${product.mainImage}" alt="${product.name}" class="w-full h-40 sm:h-56 object-cover">
                <div class="p-3 sm:p-4">
                    <h3 class="text-xl sm:text-2xl font-primary text-white truncate">${product.name}</h3>
                    <div class="flex items-baseline gap-2 mt-1">
                        <p class="text-lg sm:text-xl kings-gradient-text font-bold">$${product.price.toFixed(2)}</p>
                        <p class="text-sm text-gray-400 line-through">$${product.fullPrice.toFixed(2)}</p>
                    </div>
                </div>`;
            productGrid.appendChild(card);
            card.addEventListener('click', () => openModal(product.id));
        });
    };

    const renderPresidents = () => {
        presidentsGrid.innerHTML = '';
        presidents.forEach((president) => {
            const card = document.createElement('div');
            card.className = 'president-card relative rounded-lg overflow-hidden shadow-lg bg-cover bg-center w-64 md:w-auto h-96 flex-shrink-0';
            card.style.backgroundImage = `url('${president.background}')`;

            card.innerHTML = `
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                    <div>
                        <h3 class="text-xl font-primary text-white leading-tight">${president.name}</h3>
                        <p class="text-lg kings-gradient-text font-bold">${president.team}</p>
                    </div>
                    <img src="${president.logo}" alt="${president.team}" class="w-16 h-16 flex-shrink-0 ml-2">
                </div>`;
            presidentsGrid.appendChild(card);
        });
    };

    const renderTeamTicker = () => {
        const allTeamLogos = [...teams, ...teams];
        teamTickerTrack.innerHTML = allTeamLogos.map(team =>
            `<div class="team-logo-item"><img src="${team.logo}" alt="${team.name}" title="${team.name}"></div>`
        ).join('');
    };

    const renderReviews = () => {
        reviewsGrid.innerHTML = '';
        reviewsData.forEach(review => {
            const card = document.createElement('div');
            card.className = 'review-card p-4 sm:p-6 rounded-lg flex flex-col gap-4';
            let stars = Array.from({ length: 5 }, (_, i) => `<span class="text-xl text-${i < review.rating ? 'yellow-400' : 'gray-500'}">★</span>`).join('');
            card.innerHTML = `
                <img src="${review.image}" alt="Review de ${review.author}" class="rounded-lg w-full h-auto object-cover">
                <div>
                    <div class="flex items-center mb-2">${stars}</div>
                    <h3 class="font-bold text-white">${review.author} <span class="text-green-400 text-sm font-normal">✔ Verificado</span></h3>
                </div>
                <p class="text-gray-400 text-sm">${review.text}</p>`;
            reviewsGrid.appendChild(card);
        });
    };

    // --- MODAL & CART LOGIC ---
    const showGalleryImage = (index) => {
        if (index < 0) {
            index = currentProductGallery.length - 1;
        } else if (index >= currentProductGallery.length) {
            index = 0;
        }
        modalMainImage.src = currentProductGallery[index];
        currentGalleryIndex = index;
    };

    const openModal = (productId) => {
        const product = products.find(p => p.id == productId);
        if (!product) return;

        currentProductGallery = product.gallery;
        currentGalleryIndex = 0;

        modalName.textContent = product.name;
        modalPrice.innerHTML = `
            <p class="text-2xl sm:text-3xl md:text-4xl font-bold kings-gradient-text">$${product.price.toFixed(2)}</p>
            <p class="text-lg sm:text-xl md:text-2xl text-gray-400 line-through">$${product.fullPrice.toFixed(2)}</p>
        `;

        showGalleryImage(currentGalleryIndex);

        addToCartBtn.dataset.productId = product.id;
        quantityInput.value = 1;

        modalSpecifications.innerHTML = product.specifications.map(spec => `<li>${spec}</li>`).join('');

        modalThumbnailGallery.innerHTML = product.gallery.map((imgSrc, index) =>
            `<img src="${imgSrc}" alt="Thumbnail" data-index="${index}" class="w-full h-16 sm:h-20 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-orange-500">`
        ).join('');

        modalThumbnailGallery.querySelectorAll('img').forEach(thumb => {
            thumb.addEventListener('click', () => {
                showGalleryImage(parseInt(thumb.dataset.index));
            });
        });

        modalReviewsContainer.innerHTML = product.reviews.length > 0 ? product.reviews.map(review => {
            let stars = Array.from({ length: 5 }, (_, i) => `<span class="text-xl text-${i < review.rating ? 'yellow-400' : 'gray-500'}">★</span>`).join('');
            return `<div class="info-panel p-4 rounded-lg"><div class="flex items-center mb-2"><p class="font-bold text-white mr-2">${review.author}</p><div class="flex">${stars}</div></div><p class="text-gray-300">${review.text}</p></div>`;
        }).join('') : `<p class="text-gray-400">No hay reseñas todavía.</p>`;

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    const openCartModal = () => {
        renderCart();
        cartModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    const closeCartModal = () => {
        cartModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    const updateCartCount = () => {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.classList.toggle('hidden', totalItems === 0);
    };

    const updateCart = (productId, newQuantity) => {
        const itemIndex = cart.findIndex(item => item.productId === productId);
        if (itemIndex > -1) {
            if (newQuantity > 0) cart[itemIndex].quantity = newQuantity;
            else cart.splice(itemIndex, 1);
        }
        renderCart();
        updateCartCount();
    };

    const renderCart = () => {
        cartItemsContainer.innerHTML = '';
        let subtotal = 0;
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<p class="text-gray-400 text-center">Tu carrito está vacío.</p>`;
            cartSubtotal.textContent = '$0.00';
            return;
        }
        cart.forEach(cartItem => {
            const product = products.find(p => p.id === cartItem.productId);
            if (!product) return;
            subtotal += product.price * cartItem.quantity;
            const itemEl = document.createElement('div');
            itemEl.className = 'flex items-center gap-3 sm:gap-4';
            itemEl.innerHTML = `
                <img src="${product.mainImage}" alt="${product.name}" class="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover">
                <div class="flex-grow">
                    <h4 class="text-base sm:text-lg font-bold text-white">${product.name}</h4>
                    <p class="text-gray-400 text-sm sm:text-base">$${product.price.toFixed(2)}</p>
                </div>
                <div class="flex items-center gap-1 sm:gap-2">
                    <button data-id="${product.id}" class="cart-quantity-minus bg-gray-700 h-8 w-8 rounded-md text-white font-bold">-</button>
                    <span class="w-8 text-center font-bold">${cartItem.quantity}</span>
                    <button data-id="${product.id}" class="cart-quantity-plus bg-gray-700 h-8 w-8 rounded-md text-white font-bold">+</button>
                </div>
                <button data-id="${product.id}" class="cart-item-remove text-red-500 hover:text-red-400 p-1">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>`;
            cartItemsContainer.appendChild(itemEl);
        });
        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        cartItemsContainer.querySelectorAll('.cart-quantity-minus').forEach(btn => btn.onclick = (e) => {
            const id = parseInt(e.currentTarget.dataset.id);
            updateCart(id, cart.find(i => i.productId === id).quantity - 1);
        });
        cartItemsContainer.querySelectorAll('.cart-quantity-plus').forEach(btn => btn.onclick = (e) => {
            const id = parseInt(e.currentTarget.dataset.id);
            updateCart(id, cart.find(i => i.productId === id).quantity + 1);
        });
        cartItemsContainer.querySelectorAll('.cart-item-remove').forEach(btn => btn.onclick = (e) => {
            const id = parseInt(e.currentTarget.dataset.id);
            updateCart(id, 0);
        });
    };

    // --- EVENT LISTENERS ---
    window.addEventListener('scroll', () => header.classList.toggle('header-shrink', window.scrollY > 50));

    addToCartBtn.addEventListener('click', (e) => {
        const productId = parseInt(e.target.dataset.productId);
        const quantity = parseInt(quantityInput.value);
        const existingItem = cart.find(item => item.productId === productId);
        if (existingItem) existingItem.quantity += quantity;
        else cart.push({ productId, quantity });
        updateCartCount();
        closeModal();
    });

    cartBtn.addEventListener('click', openCartModal);
    closeCartModalBtn.addEventListener('click', closeCartModal);
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    cartModal.addEventListener('click', (e) => { if (e.target === cartModal) closeCartModal(); });
    quantityPlus.addEventListener('click', () => { quantityInput.value = parseInt(quantityInput.value) + 1; });
    quantityMinus.addEventListener('click', () => { if (parseInt(quantityInput.value) > 1) quantityInput.value = parseInt(quantityInput.value) - 1; });

    searchBtn.addEventListener('click', (e) => {
        if (!searchInput.classList.contains('w-48')) {
            searchInput.classList.add('w-48', 'px-4', 'pl-10');
            searchInput.focus();
        } else {
            if (searchInput.value === '') {
                searchInput.classList.remove('w-48', 'px-4', 'pl-10');
            }
        }
    });

    searchInput.addEventListener('blur', () => {
        if (searchInput.value === '') {
            searchInput.classList.remove('w-48', 'px-4', 'pl-10');
        }
    });

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        renderProducts(products.filter(p => p.name.toLowerCase().includes(searchTerm)));
    });

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('-translate-x-full');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('-translate-x-full');
        });
    });

    document.querySelectorAll('details').forEach((el) => {
        el.addEventListener('toggle', (e) => {
            const plusIcon = e.target.querySelector('.plus-icon');
            if (plusIcon) {
                plusIcon.textContent = e.target.open ? '-' : '+';
            }
        });
    });

    // *** EVENT LISTENERS PARA FLECHAS DEL MODAL ***
    modalNextBtn.addEventListener('click', () => {
        showGalleryImage(currentGalleryIndex + 1);
    });

    modalPrevBtn.addEventListener('click', () => {
        showGalleryImage(currentGalleryIndex - 1);
    });

    // --- TEAM TICKER ANIMATION ---
    const tickerTrack = getEl('team-ticker-track');
    const logoItems = tickerTrack.children;
    let position = 0;
    const speed = 0.5;

    function animateTeamTicker() {
        position -= speed;
        if (position <= - (tickerTrack.scrollWidth / 2)) {
            position = 0;
        }
        tickerTrack.style.transform = `translateX(${position}px)`;

        const screenCenter = window.innerWidth / 2;
        for (let item of logoItems) {
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.left + rect.width / 2;
            const distanceFromCenter = Math.abs(screenCenter - itemCenter);
            const img = item.querySelector('img');

            if (distanceFromCenter < (rect.width / 2) + 20) {
                img.classList.add('is-active');
            } else {
                img.classList.remove('is-active');
            }
        }

        requestAnimationFrame(animateTeamTicker);
    }


    // --- INITIALIZATION ---
    showSlide(0); // Initialize carousel
    startAutoSlide(); // Start automatic sliding
    renderProducts(products);
    renderPresidents();
    renderTeamTicker();
    animateTeamTicker(); // Start team ticker animation
    renderReviews();

    // --- SCROLL ANIMATIONS ---
    const sr = ScrollReveal({ distance: '50px', duration: 800, easing: 'cubic-bezier(0.5, 0, 0, 1)', reset: false });
    sr.reveal('.reveal-up', { origin: 'bottom', interval: 100 });
    sr.reveal('.reveal-fade', { opacity: 0, interval: 100 });
    sr.reveal('.reveal-feature', { origin: 'bottom', interval: 150, viewFactor: 0.3 });
    sr.reveal('.review-card, .product-card, .president-card', { origin: 'bottom', interval: 50, viewFactor: 0.1 });
});
