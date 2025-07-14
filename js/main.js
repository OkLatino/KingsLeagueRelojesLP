// *** CAMBIO CLAVE: USAR 'DOMContentLoaded' PARA CARGA RÁPIDA ***
document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const productsData = [{
        id: 1,
        collection: "smartwatches Kings League",
        name: "Kingssmart smartwatch 44mm",
        model: "Kingssmart",
        sku: "KLSW-01",
        price: 1299.00,
        fullPrice: 3998.00,
        description: "Smartwatch moderno con estilo deportivo y funcionalidad digital. Equipado con una pantalla LED de fácil lectura, caja de aleación con recubrimiento IPB y acabado pulido que brinda un look sofisticado. Su correa de silicona ofrece comodidad durante todo el día. Resistencia al agua de 3 ATM, ideal para el uso diario.",
        mainImage: 'assets/relojes/klsw-01/klsw-01(1).webp',
        gallery: [
            'assets/relojes/klsw-01/klsw-01(1).webp',
            'assets/relojes/klsw-01/klsw-01(2).webp',
            'assets/relojes/klsw-01/klsw-01(3).webp',
            'assets/relojes/klsw-01/klsw-01(4).webp',
            'assets/relojes/klsw-01/klsw-01(5).webp'
        ],
        specifications: [
            "Extensible de silicona, digital, 3 ATM, Caja de Aleación con recubrimiento IPB y pulido, pantalla Led",
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
    }, {
        id: 2,
        collection: "STREET SERIES",
        name: "Black Crown Cuarzo 44mm",
        model: "Black Crown",
        sku: "STKL-01",
        price: 999.00,
        fullPrice: 2398.00,
        description: "Diseño negro con detalles amarillos, Minimalismo con poder y presencia. Luce el estilo único de la Kings League con este reloj de colección. Cuenta con extensible de silicona, de movimiento de cuarzo, y resistencia al agua de 3 ATM. Su caja de aleación con recubrimiento IPB pulido y cristal mineral lo hacen resistente y con gran presencia. Lidera con estilo. Domina tu tiempo.",
        mainImage: 'assets/relojes/stkl-01/stkl-01(1).webp',
        gallery: ['assets/relojes/stkl-01/stkl-01(1).webp', 'assets/relojes/stkl-01/stkl-01(2).webp', 'assets/relojes/stkl-01/stkl-01(3).webp', 'assets/relojes/stkl-01/stkl-01(4).webp', 'assets/relojes/stkl-01/stkl-01(5).webp', 'assets/relojes/stkl-01/stkl-01(6).webp'],
        specifications: ["Extensible de silicona", "Cuarzo", "3 ATM", "Caja de Aleación con recubrimiento IPB y pulido", "Cristal de mineral"]
    }, {
        id: 3,
        collection: "ICONIC SERIES",
        name: "Orange Guard Cuarzo 44mm",
        model: "Orange Guard",
        sku: "STKL-02",
        price: 999.00,
        fullPrice: 2398.00,
        description: "Degradado naranja con líneas dinámicas. Energía visual en movimiento. Luce el estilo único de la Kings League con este reloj de colección. Cuenta con extensible de silicona, de movimiento de cuarzo, y resistencia al agua de 3 ATM. Su caja de aleación con recubrimiento IPB pulido y cristal mineral lo hacen resistente y con gran presencia.",
        mainImage: 'assets/relojes/stkl-02/stkl-02(1).webp',
        gallery: ['assets/relojes/stkl-02/stkl-02(1).webp', 'assets/relojes/stkl-02/stkl-02(2).webp', 'assets/relojes/stkl-02/stkl-02(3).webp', 'assets/relojes/stkl-02/stkl-02(4).webp', 'assets/relojes/stkl-02/stkl-02(5).webp', 'assets/relojes/stkl-02/stkl-02(6).webp'],
        specifications: ["Extensible de silicona", "Cuarzo", "3 ATM", "Caja de Aleación con recubrimiento IPB y pulido", "Cristal de mineral"]
    }, {
        id: 4,
        collection: "STREET SERIES",
        name: "Sunstrike Cuarzo 44mm",
        model: "Sunstrike",
        sku: "STKL-03",
        price: 999.00,
        fullPrice: 2398.00,
        description: "Correa bicolor con el logo frontal dominante. Estética directa y atrevida. Luce el estilo único de la Kings League con este reloj de colección. Cuenta con extensible de silicona, de movimiento de cuarzo, y resistencia al agua de 3 ATM. Su caja de aleación con recubrimiento IPB pulido y cristal mineral lo hacen resistente y con gran presencia.",
        mainImage: 'assets/relojes/stkl-03/stkl-03(1).webp',
        gallery: ['assets/relojes/stkl-03/stkl-03(1).webp', 'assets/relojes/stkl-03/stkl-03(2).webp', 'assets/relojes/stkl-03/stkl-03(3).webp', 'assets/relojes/stkl-03/stkl-03(4).webp', 'assets/relojes/stkl-03/stkl-03(5).webp', 'assets/relojes/stkl-03/stkl-03(6).webp'],
        specifications: ["Extensible de silicona", "Cuarzo", "3 ATM", "Caja de Aleación con recubrimiento IPB y pulido", "Cristal de mineral"]
    }, {
        id: 5,
        collection: "ICONIC SERIES",
        name: "Origen Cuarzo 44mm",
        model: "Origen",
        sku: "STKL-04",
        price: 999.00,
        fullPrice: 2398.00,
        description: "Carátula limpia con el logo triple y estética institucional. Identidad pura. Luce el estilo único de la Kings League con este reloj de colección. Cuenta con extensible de silicona, de movimiento de cuarzo, y resistencia al agua de 3 ATM. Su caja de aleación con recubrimiento IPB pulido y cristal mineral lo hacen resistente y con gran presencia.",
        mainImage: 'assets/relojes/stkl-04/stkl-04(1).webp',
        gallery: ['assets/relojes/stkl-04/stkl-04(1).webp', 'assets/relojes/stkl-04/stkl-04(2).webp', 'assets/relojes/stkl-04/stkl-04(3).webp', 'assets/relojes/stkl-04/stkl-04(4).webp', 'assets/relojes/stkl-04/stkl-04(5).webp', 'assets/relojes/stkl-04/stkl-04(6).webp'],
        specifications: ["Extensible de silicona", "Cuarzo", "3 ATM", "Caja de Aleación con recubrimiento IPB y pulido", "Cristal de mineral"]
    }, {
        id: 6,
        collection: "ICONIC SERIES",
        name: "Commander Cuarzo 44mm",
        model: "Commander",
        sku: "STKL-05",
        price: 999.00,
        fullPrice: 2398.00,
        description: "Flechas ascendentes en la correa y rostro del rey al centro. Liderazgo visual. Luce el estilo único de la Kings League con este reloj de colección. Cuenta con extensible de silicona, de movimiento de cuarzo, y resistencia al agua de 3 ATM. Su caja de aleación con recubrimiento IPB pulido y cristal mineral lo hacen resistente y con gran presencia.",
        mainImage: 'assets/relojes/stkl-05/stkl-05(1).webp',
        gallery: ['assets/relojes/stkl-05/stkl-05(1).webp', 'assets/relojes/stkl-05/stkl-05(2).webp', 'assets/relojes/stkl-05/stkl-05(3).webp', 'assets/relojes/stkl-05/stkl-05(4).webp', 'assets/relojes/stkl-05/stkl-05(5).webp', 'assets/relojes/stkl-05/stkl-05(6).webp'],
        specifications: ["Extensible de silicona", "Cuarzo", "3 ATM", "Caja de Aleación con recubrimiento IPB y pulido", "Cristal de mineral"]
    }, {
        id: 7,
        collection: "STREET SERIES",
        name: "Kingslam Cuarzo 44mm",
        model: "Kingslam",
        sku: "STKL-06",
        price: 999.00,
        fullPrice: 2398.00,
        description: "Correa bicolor con el logo frontal dominante. Estética directa y atrevida. Luce el estilo único de la Kings League con este reloj de colección. Cuenta con extensible de silicona, de movimiento de cuarzo, y resistencia al agua de 3 ATM. Su caja de aleación con recubrimiento IPB pulido y cristal mineral lo hacen resistente y con gran presencia.",
        mainImage: 'assets/relojes/stkl-06/stkl-06(1).webp',
        gallery: ['assets/relojes/stkl-06/stkl-06(1).webp', 'assets/relojes/stkl-06/stkl-06(2).webp', 'assets/relojes/stkl-06/stkl-06(3).webp', 'assets/relojes/stkl-06/stkl-06(4).webp', 'assets/relojes/stkl-06/stkl-06(5).webp', 'assets/relojes/stkl-06/stkl-06(6).webp'],
        specifications: ["Extensible de silicona", "Cuarzo", "3 ATM", "Caja de Aleación con recubrimiento IPB y pulido", "Cristal de mineral"]
    }, {
        id: 8,
        collection: "PERFORMANCE SERIES",
        name: "Golden Play Cronógrafo 44mm",
        model: "Golden Play",
        sku: "STKL-07",
        price: 1299.00,
        fullPrice: 2998.00,
        description: "Carátula blanca y correa amarilla. Claridad táctica con diseño llamativo. Diseñado para los verdaderos fans, este reloj Kings League combina estética moderna y precisión. Incorpora extensible de silicona, movimiento de cuarzo, cronógrafo funcional y calendario, además de resistencia al agua de 3 ATM. Su caja de aleación con recubrimiento IPB pulido y cristal mineral lo hacen resistente y llamativo.",
        mainImage: 'assets/relojes/stkl-07/stkl-07(1).webp',
        gallery: ['assets/relojes/stkl-07/stkl-07(1).webp', 'assets/relojes/stkl-07/stkl-07(2).webp', 'assets/relojes/stkl-07/stkl-07(3).webp', 'assets/relojes/stkl-07/stkl-07(4).webp', 'assets/relojes/stkl-07/stkl-07(5).webp', 'assets/relojes/stkl-07/stkl-07(6).webp'],
        specifications: ["Extensible de silicona", "Cuarzo", "Cronógrafo funcional", "Calendario", "3 ATM", "Caja de Aleación con recubrimiento IPB y pulido", "Cristal de mineral"]
    }, {
        id: 9,
        collection: "PERFORMANCE SERIES",
        name: "Golden Pass Cronógrafo 44mm",
        model: "Golden Pass",
        sku: "STKL-08",
        price: 1299.00,
        fullPrice: 2998.00,
        description: "Cronografo negro con detalles dorados. Precisión, fuerza y estilo competitivo. Diseñado para los verdaderos fans, este reloj Kings League combina estética moderna y precisión. Incorpora extensible de silicona, movimiento de cuarzo, cronógrafo funcional y calendario, además de resistencia al agua de 3 ATM. Su caja de aleación con recubrimiento IPB pulido y cristal mineral lo hacen resistente y llamativo.",
        mainImage: 'assets/relojes/stkl-08/stkl-08(1).webp',
        gallery: ['assets/relojes/stkl-08/stkl-08(1).webp', 'assets/relojes/stkl-08/stkl-08(2).webp', 'assets/relojes/stkl-08/stkl-08(3).webp', 'assets/relojes/stkl-08/stkl-08(4).webp', 'assets/relojes/stkl-08/stkl-08(5).webp', 'assets/relojes/stkl-08/stkl-08(6).webp'],
        specifications: ["Extensible de silicona", "Cuarzo", "Cronógrafo funcional", "Calendario", "3 ATM", "Caja de Aleación con recubrimiento IPB y pulido", "Cristal de mineral"]
    }, {
        id: 10,
        collection: "ICONIC SERIES",
        name: "Crown Code Cuarzo 44mm",
        model: "Crown Code",
        sku: "STKL-09",
        price: 999.00,
        fullPrice: 2598.00,
        description: "Caja tonneau, marcadores tipo joya y rostro real en gran escala. Estatus puro. Reloj exclusivo de la Kings League con extensible de silicona, movimiento de cuarzo y resistencia al agua de 3 ATM. Destaca por su caja cuadrada de aleación con recubrimiento IPB pulido y cristal mineral. Un accesorio con estilo único y actitud deportiva.",
        mainImage: 'assets/relojes/stkl-09/stkl-09(1).webp',
        gallery: ['assets/relojes/stkl-09/stkl-09(1).webp', 'assets/relojes/stkl-09/stkl-09(2).webp', 'assets/relojes/stkl-09/stkl-09(3).webp', 'assets/relojes/stkl-09/stkl-09(4).webp', 'assets/relojes/stkl-09/stkl-09(5).webp', 'assets/relojes/stkl-09/stkl-09(6).webp'],
        specifications: ["Extensible de silicona", "Cuarzo", "3 ATM", "Caja de Aleación con recubrimiento IPB y pulido", "Cristal de mineral"]
    }];


    let products = productsData.map((p) => {
        return {
            ...p,
            reviews: [{
                author: 'Juan P.',
                rating: 5,
                text: '¡Increíble! Es más resistente de lo que imaginé.'
            }, {
                author: 'Ana G.',
                rating: 4,
                text: 'Muy buen diseño y la pantalla se ve genial.'
            }]
        };
    });

    const presidents = [{
        name: "'Chicharito' Hernández",
        team: 'Olimpo United',
        logo: 'assets/escudos/OlimpoUnitedFC.webp',
        background: 'assets/presidentes/CH14.webp'
    }, {
        name: 'Hnos. Montiel',
        team: 'Peluche Caligari',
        logo: 'assets/escudos/PelucheCaligariFC.webp',
        background: 'assets/presidentes/ESCORPION.webp'
    }, {
        name: 'Alana + Barcagamer',
        team: 'Raniza FC',
        logo: 'assets/escudos/RanizaFC.webp',
        background: 'assets/presidentes/ALANA.webp'
    }, {
        name: 'NataliaMX + PipePunk',
        team: 'Club de Cuervos',
        logo: 'assets/escudos/ClubDeCuervosFC.webp',
        background: 'assets/presidentes/PIPEYNATA.webp'
    }, ];

    const teams = [{
        name: 'Peluche Caligari',
        logo: 'assets/escudos/PelucheCaligariFC.webp'
    }, {
        name: 'Raniza FC',
        logo: 'assets/escudos/RanizaFC.webp'
    }, {
        name: 'Real Titán',
        logo: 'assets/escudos/TitanFC.webp'
    }, {
        name: 'Muchachos FC',
        logo: 'assets/escudos/MuchachosFC.webp'
    }, {
        name: 'West Santos FC',
        logo: 'assets/escudos/WestSantosFC.webp'
    }, {
        name: 'Olimpo United',
        logo: 'assets/escudos/OlimpoUnitedFC.webp'
    }, {
        name: 'Galácticos del Caribe',
        logo: 'assets/escudos/GalacticosDelCaribeFC.webp'
    }, {
        name: 'Club de Cuervos',
        logo: 'assets/escudos/ClubDeCuervosFC.webp'
    }, {
        name: 'Los Aliens FC',
        logo: 'assets/escudos/LosAliens.webp'
    }, {
        name: 'Atlético Parceros FC',
        logo: 'assets/escudos/ParcerosFC.webp'
    }, {
        name: 'Persas FC',
        logo: 'assets/escudos/PersasFC.webp'
    }, {
        name: 'Los Chamos FC',
        logo: 'assets/escudos/ChamosFC.webp'
    }, ];

    const teams2 = [...teams].sort(() => Math.random() - 0.5); // Shuffled teams for the second ticker

    const reviewsData = [{
        author: 'Michelle C.',
        rating: 5,
        text: 'Ok, era escéptica sobre este reloj...',
        image: './img/reviews/review-1.jpg'
    }, {
        author: 'Nick R.',
        rating: 5,
        text: 'Este reloj hace casi todo lo que necesito...',
        image: './img/reviews/review-2.jpg'
    }, {
        author: 'Jeffrey A.',
        rating: 4,
        text: 'Mi mejor reloj hasta ahora...',
        image: './img/reviews/review-3.jpg'
    }, {
        author: 'Cherrie L.',
        rating: 5,
        text: 'El reloj llegó en 7 días...',
        image: './img/reviews/review-4.jpg'
    }, ];

    // --- DOM ELEMENTS ---
    let cart = [];
    let wishlist = [];
    const getEl = (id) => document.getElementById(id);
    const preloader = getEl('preloader');
    const collectionsContainer = getEl('collections-container');
    const presidentsGrid = getEl('presidents-grid');
    const reviewsGrid = getEl('reviews-grid-container');
    const teamTickerContainer1 = getEl('teams-ticker');
    const teamTickerTrack1 = getEl('team-ticker-track');
    const teamTickerContainer2 = getEl('teams-ticker-2');
    const teamTickerTrack2 = getEl('team-ticker-track-2');
    const modal = getEl('product-modal');
    const closeModalBtn = getEl('close-modal');
    const modalName = getEl('modal-product-name');
    const modalPrice = getEl('modal-product-price');
    const modalDescription = getEl('modal-product-description');
    const modalModelSku = getEl('modal-product-model-sku');
    const modalMainImage = getEl('modal-main-image');
    const modalSpecifications = getEl('modal-specifications');
    const modalThumbnailGallery = getEl('modal-thumbnail-gallery');
    const modalReviewsContainer = getEl('modal-reviews-container');
    const modalSmartwatchFeatures = getEl('modal-smartwatch-features');
    const modalOtherWatchFeatures = getEl('modal-other-watch-features'); // New element
    const quantityInput = getEl('quantity-input');
    const quantityPlus = getEl('quantity-plus');
    const quantityMinus = getEl('quantity-minus');
    const addToCartBtn = getEl('add-to-cart-btn');
    const cartBtn = getEl('cart-btn');
    const cartCount = getEl('cart-count');
    const header = getEl('header');
    const cartModal = getEl('cart-modal');
    const closeCartModalBtn = getEl('close-cart-modal');
    const cartItemsContainer = getEl('cart-items-container');
    const cartSubtotal = getEl('cart-subtotal');
    const wishlistBtn = getEl('wishlist-btn');
    const wishlistCount = getEl('wishlist-count');
    const wishlistModal = getEl('wishlist-modal');
    const closeWishlistModalBtn = getEl('close-wishlist-modal');
    const wishlistItemsContainer = getEl('wishlist-items-container');

    // --- NEW HEADER ELEMENTS ---
    const mobileMenuBtn = getEl('mobile-menu-btn');
    const mobileMenu = getEl('mobile-menu');
    const closeMobileMenuBtn = getEl('close-mobile-menu-btn');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const mobileSearchInput = getEl('mobile-search-input');


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
    const renderAllCollections = () => {
        collectionsContainer.innerHTML = '';
        const collectionOrder = ["smartwatches Kings League", "PERFORMANCE SERIES", "ICONIC SERIES", "STREET SERIES"];

        collectionOrder.forEach(collectionName => {
            const productsInCollection = products.filter(p => p.collection === collectionName);
            if (productsInCollection.length > 0) {
                const collectionSection = document.createElement('div');
                collectionSection.className = 'mb-16';

                const collectionTitle = document.createElement('h2');
                collectionTitle.className = 'text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-12 reveal-fade';
                collectionTitle.style.color = '#f4af23';
                collectionTitle.textContent = collectionName;
                collectionSection.appendChild(collectionTitle);

                const productGrid = document.createElement('div');
                productGrid.className = 'flex overflow-x-auto horizontal-scroll md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pb-4';

                productsInCollection.forEach(product => {
                    const card = document.createElement('div');
                    card.className = 'product-card rounded-lg overflow-hidden shadow-lg flex-shrink-0 w-[320px] sm:w-[400px] md:w-auto flex flex-col md:flex-row';
                    card.dataset.productId = product.id;

                    const isWishlisted = wishlist.includes(product.id);

                    card.innerHTML = `
                                <div class="md:w-1/2 relative">
                                    <img src="${product.mainImage}" alt="${product.name}" class="w-full h-48 md:h-full object-cover cursor-pointer" onclick="openModal(${product.id})">
                                    <button class="wishlist-btn-card absolute top-2 right-2 bg-black/50 p-2 rounded-full text-white hover:text-red-500" data-product-id="${product.id}">
                                        <svg class="w-6 h-6 heart-icon ${isWishlisted ? 'filled' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="md:w-1/2 p-3 sm:p-4 flex flex-col justify-center cursor-pointer" onclick="openModal(${product.id})">
                                    <h3 class="text-lg sm:text-xl font-primary text-white whitespace-normal">${product.name}</h3>
                                    <div class="flex items-baseline gap-2 mt-1">
                                        <p class="text-md sm:text-lg kings-gradient-text font-bold">$${product.price.toFixed(2)}</p>
                                        <p class="text-xs text-gray-400 line-through">$${product.fullPrice.toFixed(2)}</p>
                                    </div>
                                </div>`;
                    productGrid.appendChild(card);
                });
                collectionSection.appendChild(productGrid);
                collectionsContainer.appendChild(collectionSection);
            }
        });
        // Add event listeners after rendering
        document.querySelectorAll('.wishlist-btn-card').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent modal from opening
                const productId = parseInt(btn.dataset.productId);
                toggleWishlist(productId);
            });
        });
        // Make sure openModal is globally accessible for inline onclick
        window.openModal = openModal;
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

    const renderTeamTicker = (trackElement, teamsArray) => {
        trackElement.innerHTML = ''; // Clear previous items
        const allTeamLogos = [...teamsArray, ...teamsArray, ...teamsArray]; // Triple the content to ensure seamless loop
        allTeamLogos.forEach(team => {
            const item = document.createElement('div');
            item.className = 'team-logo-item';
            item.innerHTML = `<img src="${team.logo}" alt="${team.name}" title="${team.name}">`;
            trackElement.appendChild(item);
        });
    };

    const renderReviews = () => {
        reviewsGrid.innerHTML = '';
        reviewsData.forEach(review => {
            const card = document.createElement('div');
            card.className = 'review-card p-4 sm:p-6 rounded-lg flex flex-col gap-4';
            let stars = Array.from({
                length: 5
            }, (_, i) => `<span class="text-xl text-${i < review.rating ? 'yellow-400' : 'gray-500'}">★</span>`).join('');
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

    // --- MODAL & CART & WISHLIST LOGIC ---
    const showGalleryImage = (index) => {
        if (index < 0) {
            index = currentProductGallery.length - 1;
        } else if (index >= currentProductGallery.length) {
            index = 0;
        }
        modalMainImage.src = currentProductGallery[index];
        currentGalleryIndex = index;
    };

    function getIconForSpec(spec) {
        const s = spec.toLowerCase();
        if (s.includes('cuarzo')) return `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>`;
        if (s.includes('atm')) return `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013-3.812A8.223 8.223 0 0115.362 5.214z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a8.966 8.966 0 01-5.272-1.761l-.001-.001-.002-.001a.5.5 0 01.606-.784l.008.006a7.034 7.034 0 004.658 0l.008-.006a.5.5 0 01.606.784l-.002.001-.001.001A8.966 8.966 0 0112 18z" /></svg>`;
        if (s.includes('cronógrafo')) return `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
        if (s.includes('calendario')) return `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z" /></svg>`;
        if (s.includes('cristal')) return `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>`;
        if (s.includes('silicona')) return `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" /></svg>`;
        return `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.438.995a6.427 6.427 0 010 .255c0 .382.145.755.438.995l1.003.827c.424.35.534.954.26 1.431l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.217-.456c-.355-.133-.75-.072-1.075.124a6.57 6.57 0 01-.22.127c-.332.183-.582.495-.645.87l-.213 1.281c-.09.543-.56.94-1.11.94h-2.593c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a6.52 6.52 0 01-.22-.127c-.324-.196-.72-.257-1.075-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.431l1.003-.827c.293-.24.438.613.438-.995a6.427 6.427 0 010-.255c0-.382-.145-.755-.438-.995l-1.003-.827a1.125 1.125 0 01-.26-1.431l1.296-2.247a1.125 1.125 0 011.37-.49l1.217.456c.355.133.75.072 1.075-.124a6.57 6.57 0 01.22-.127c.332-.183-.582-.495-.645-.87l.213-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`;
    }


    const openModal = (productId) => {
        const product = products.find(p => p.id == productId);
        if (!product) return;

        currentProductGallery = product.gallery;
        currentGalleryIndex = 0;

        modalName.textContent = product.name;
        modalModelSku.textContent = `Modelo: ${product.model} | SKU: ${product.sku}`;
        modalDescription.textContent = product.description;
        modalPrice.innerHTML = `
                    <p class="text-2xl sm:text-3xl md:text-4xl font-bold kings-gradient-text">$${product.price.toFixed(2)}</p>
                    <p class="text-lg sm:text-xl md:text-2xl text-gray-400 line-through">$${product.fullPrice.toFixed(2)}</p>
                    `;

        showGalleryImage(currentGalleryIndex);

        addToCartBtn.dataset.productId = product.id;
        quantityInput.value = 1;

        // Clear both feature containers initially
        modalSmartwatchFeatures.innerHTML = '';
        modalSmartwatchFeatures.classList.add('hidden');
        modalOtherWatchFeatures.innerHTML = '';
        modalOtherWatchFeatures.classList.add('hidden');


        // Show smartwatch-specific features only for product ID 1
        if (product.id === 1) {
            modalSmartwatchFeatures.innerHTML = `
                        <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 border-b-2 border-orange-500/50 pb-2">
                            Funcionalidad sin Límites
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div class="feature-card p-4 rounded-2xl">
                                <div class="kings-gradient-text mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 class="text-xl font-bold mb-1 text-white">CAJA RESISTENTE</h3>
                                <p class="text-gray-400 text-sm">Fabricado con aleación de Zinc+ABS y protección IP68.</p>
                            </div>
                            <div class="feature-card p-4 rounded-2xl">
                                <div class="kings-gradient-text mb-2">
                                    <svg class="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 class="text-xl font-bold mb-1 text-white">BATERÍA DE 600mAh</h3>
                                <p class="text-gray-400 text-sm">Batería de larga duración y conexión Bluetooth 5.2.</p>
                            </div>
                            <div class="feature-card p-4 rounded-2xl">
                                <div class="kings-gradient-text mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 class="text-xl font-bold mb-1 text-white">MONITOREO DE SALUD</h3>
                                <p class="text-gray-400 text-sm">Mide tu oxígeno en sangre, ritmo cardiaco y sueño.</p>
                            </div>
                        </div>
                    `;
            modalSmartwatchFeatures.classList.remove('hidden');
        } else {
            // Build and show compact feature panels for other watches
            const featuresHTML = product.specifications.map(spec => {
                let iconSVG = getIconForSpec(spec);
                return `
                            <div class="compact-feature-card">
                                ${iconSVG}
                                <h4 class="text-sm font-bold text-white uppercase">${spec}</h4>
                            </div>
                        `;
            }).join('');

            modalOtherWatchFeatures.innerHTML = `
                        <h3 class="text-2xl sm:text-3xl font-bold text-white mb-4 border-b-2 border-orange-500/50 pb-2">
                            Componentes
                        </h3>
                        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                            ${featuresHTML}
                        </div>
                    `;
            modalOtherWatchFeatures.classList.remove('hidden');
        }


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
            let stars = Array.from({
                length: 5
            }, (_, i) => `<span class="text-xl text-${i < review.rating ? 'yellow-400' : 'gray-500'}">★</span>`).join('');
            return `<div class="info-panel p-4 rounded-lg"><div class="flex items-center mb-2"><p class="font-bold text-white mr-2">${review.author}</p><div class="flex">${stars}</div></div><p class="text-gray-300">${review.text}</p></div>`;
        }).join('') : `<p class="text-gray-400">No hay reseñas todavía.</p>`;

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };
    window.openModal = openModal;

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

    const openWishlistModal = () => {
        renderWishlist();
        wishlistModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    const closeWishlistModal = () => {
        wishlistModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    const updateCartCount = () => {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.classList.toggle('hidden', totalItems === 0);
    };

    const updateWishlistCount = () => {
        wishlistCount.textContent = wishlist.length;
        wishlistCount.classList.toggle('hidden', wishlist.length === 0);
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

    const toggleWishlist = (productId) => {
        const index = wishlist.indexOf(productId);
        if (index > -1) {
            wishlist.splice(index, 1);
        } else {
            wishlist.push(productId);
        }
        updateWishlistCount();
        renderAllCollections(); // Re-render to update heart icons
        renderWishlist(); // Also update the wishlist modal if it's open
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

    const renderWishlist = () => {
        wishlistItemsContainer.innerHTML = '';
        if (wishlist.length === 0) {
            wishlistItemsContainer.innerHTML = `<p class="text-gray-400 text-center">Tu lista de deseos está vacía.</p>`;
            return;
        }
        wishlist.forEach(productId => {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            const itemEl = document.createElement('div');
            itemEl.className = 'flex items-center gap-3 sm:gap-4';
            itemEl.innerHTML = `
                        <img src="${product.mainImage}" alt="${product.name}" class="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover">
                        <div class="flex-grow">
                            <h4 class="text-base sm:text-lg font-bold text-white">${product.name}</h4>
                            <p class="text-gray-400 text-sm sm:text-base">$${product.price.toFixed(2)}</p>
                        </div>
                        <button data-id="${product.id}" class="wishlist-item-remove text-red-500 hover:text-red-400 p-1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </button>`;
            wishlistItemsContainer.appendChild(itemEl);
        });
        wishlistItemsContainer.querySelectorAll('.wishlist-item-remove').forEach(btn => btn.onclick = (e) => {
            const id = parseInt(e.currentTarget.dataset.id);
            toggleWishlist(id);
        });
    };

    // --- EVENT LISTENERS ---
    window.addEventListener('scroll', () => {
        header.classList.toggle('header-shrink', window.scrollY > 50)
    });

    addToCartBtn.addEventListener('click', (e) => {
        const productId = parseInt(e.target.dataset.productId);
        const quantity = parseInt(quantityInput.value);
        const existingItem = cart.find(item => item.productId === productId);
        if (existingItem) existingItem.quantity += quantity;
        else cart.push({
            productId,
            quantity
        });
        updateCartCount();
        closeModal();
    });

    cartBtn.addEventListener('click', openCartModal);
    closeCartModalBtn.addEventListener('click', closeCartModal);
    wishlistBtn.addEventListener('click', openWishlistModal);
    closeWishlistModalBtn.addEventListener('click', closeWishlistModal);

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) closeCartModal();
    });
    wishlistModal.addEventListener('click', (e) => {
        if (e.target === wishlistModal) closeWishlistModal();
    });
    quantityPlus.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });
    quantityMinus.addEventListener('click', () => {
        if (parseInt(quantityInput.value) > 1) quantityInput.value = parseInt(quantityInput.value) - 1;
    });

    // --- NEW MOBILE MENU LOGIC ---
    const openMobileMenu = () => {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    const closeMobileMenu = () => {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    mobileMenuBtn.addEventListener('click', openMobileMenu);
    closeMobileMenuBtn.addEventListener('click', closeMobileMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    mobileSearchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        // This will need adjustment to search across all collections
        // For now, it just re-renders, a search implementation would be more complex
        renderAllCollections();
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
    function initializeTicker(container, track, teams, reverse = false) {
        renderTeamTicker(track, teams);

        // Set initial position for the reverse ticker to create a different starting point
        if (reverse) {
            const trackWidth = track.scrollWidth / 3;
            track.style.transform = `translateX(${-trackWidth}px)`;
        }

        let isPaused = false;

        container.addEventListener('mouseenter', () => isPaused = true);
        container.addEventListener('mouseleave', () => isPaused = false);

        function animate() {
            if (!isPaused) {
                const currentTransform = new DOMMatrix(getComputedStyle(track).transform);
                let currentX = currentTransform.m41;

                let newX = currentX + (reverse ? 0.5 : -0.5); // Speed of the scroll

                const trackWidth = track.scrollWidth / 3; // Width of one block of logos

                // ===== SEAMLESS LOOP LOGIC =====
                if (reverse) {
                    // Scrolling right (from negative to positive transform)
                    if (newX >= 0) {
                        // When the ticker is about to show the gap at the beginning,
                        // reset its position by subtracting the width of one logo block.
                        newX -= trackWidth;
                    }
                } else {
                    // Scrolling left (from positive to negative transform)
                    if (Math.abs(newX) >= trackWidth) {
                        // When the ticker has scrolled one full block,
                        // reset its position by adding the width of one logo block.
                        newX += trackWidth;
                    }
                }
                track.style.transform = `translateX(${newX}px)`;
            }

            // This part highlights the logo in the center of the screen
            const screenCenter = window.innerWidth / 2;
            for (let item of track.children) {
                const rect = item.getBoundingClientRect();
                const itemCenter = rect.left + rect.width / 2;
                const distanceFromCenter = Math.abs(screenCenter - itemCenter);
                const img = item.querySelector('img');

                if (img && distanceFromCenter < 75) {
                    img.classList.add('is-active');
                } else if (img) {
                    img.classList.remove('is-active');
                }
            }

            requestAnimationFrame(animate);
        }
        animate();
    }


    // --- INITIALIZATION ---
    showSlide(0); // Initialize carousel
    startAutoSlide(); // Start automatic sliding
    renderAllCollections();
    renderPresidents();

    initializeTicker(teamTickerContainer1, teamTickerTrack1, teams, false);
    initializeTicker(teamTickerContainer2, teamTickerTrack2, teams2, true);

    renderReviews();

    // --- HIDE PRELOADER ---
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('preloader-hidden');
        }, 500); // A small delay
    }

    // --- SCROLL ANIMATIONS ---
    const sr = ScrollReveal({
        distance: '50px',
        duration: 800,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false
    });
    sr.reveal('.reveal-up', {
        origin: 'bottom',
        interval: 100
    });
    sr.reveal('.reveal-fade', {
        opacity: 0,
        interval: 100
    });
    sr.reveal('.reveal-feature', {
        origin: 'bottom',
        interval: 150,
        viewFactor: 0.3
    });
    // *** CAMBIO REALIZADO AQUÍ ***
    // Se quitaron .product-card y .president-card para evitar la animación en ellos
    sr.reveal('.review-card', {
        origin: 'bottom',
        interval: 50,
        viewFactor: 0.1
    });
});
