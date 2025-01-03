document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality can be added here if needed
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('click', function() {
        handleSearch();
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    function handleSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Handle search - you can implement your search logic here
            console.log('Searching for:', searchTerm);
        }
    }

    // Category select functionality
    const categorySelect = document.querySelector('.category-select select');
    categorySelect.addEventListener('change', function() {
        const selectedCategory = this.value;
        console.log('Selected category:', selectedCategory);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const cards = document.querySelectorAll('.product-card');

    let currentIndex = 0;
    let cardsPerView = 4; // Default to 4 cards visible at a time

    function updateCarousel() {
        const containerWidth = carousel.offsetWidth;
        const totalCardsWidth = containerWidth * cards.length / cardsPerView;
        const translateX = -(currentIndex * (containerWidth / cardsPerView));
        carousel.style.transform = `translateX(${translateX}px)`;  // Fixed line 68
    }

    function showPrevCard() {
        if (currentIndex > 0) currentIndex--;
        updateCarousel();
    }

    function showNextCard() {
        if (currentIndex < cards.length - cardsPerView) currentIndex++;
        updateCarousel();
    }

    prevBtn.addEventListener('click', showPrevCard);
    nextBtn.addEventListener('click', showNextCard);

    // Update cards per view based on screen size
    function updateCardsPerView() {
        const isMobile = window.innerWidth < 768;
        cardsPerView = isMobile ? 1 : 4; // Adjust based on breakpoints
        currentIndex = 0; // Reset index
        cards.forEach(card => {
            card.style.flex = `0 0 ${100 / cardsPerView}%`;  // Fixed line 46
        });
        updateCarousel();
    }

    window.addEventListener('resize', updateCardsPerView);
    updateCardsPerView(); // Initial call
});

document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });

    // Optional: Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });

    // Mobile menu functionality can be added here if needed
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('click', function() {
        handleSearch();
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    function handleSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Handle search - you can implement your search logic here
            console.log('Searching for:', searchTerm);
        }
    }

    // Category select functionality
    const categorySelect = document.querySelector('.category-select select');
    categorySelect.addEventListener('change', function() {
        const selectedCategory = this.value;
        console.log('Selected category:', selectedCategory);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Handle wishlist functionality
    const wishlistButtons = document.querySelectorAll('.action-btn[title="Add to Wishlist"]');
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const icon = this.querySelector('i');
            if (this.classList.contains('active')) {
                icon.style.color = '#ff6b6b';
                showNotification('Added to wishlist');
            } else {
                icon.style.color = '#666';
                showNotification('Removed from wishlist');
            }
        });
    });

    // Handle quick view functionality
    const quickViewButtons = document.querySelectorAll('.action-btn[title="Quick View"]');
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productTitle = productCard.querySelector('.product-title').textContent;
            showNotification(`Quick view: ${productTitle}`);
        });
    });

    // Handle compare functionality
    const compareButtons = document.querySelectorAll('.action-btn[title="Compare"]');
    compareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productTitle = productCard.querySelector('.product-title').textContent;
            showNotification(`Added to compare: ${productTitle}`);
        });
    });

    // Handle add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productTitle = productCard.querySelector('.product-title').textContent;
            showNotification(`Added to cart: ${productTitle}`);
        });
    });

    // Notification system
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // Add styles to notification
        Object.assign(notification.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: '#333',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            zIndex: '1000',
            opacity: '0',
            transition: 'opacity 0.3s ease'
        });

        document.body.appendChild(notification);
        
        // Trigger animation
        setTimeout(() => {
            notification.style.opacity = '1';
        }, 10);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Image loading animation
    const productImages = document.querySelectorAll('.product-image img');
    productImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Testimonial slider functionality
    const dots = document.querySelectorAll('.dot');
    const testimonials = [
        {
            name: 'Sushil Behera',
            text: 'I buy my daughters birthday gift every year at bluestone.. and my daughter really loves it.. I really appreciate the products delivered as before the said date and even the quality of the product..'
        },
        {
            name: 'Sarah Johnson',
            text: 'The craftsmanship of their jewelry is exceptional. I received so many compliments on my anniversary ring!'
        },
        {
            name: 'Michael Chen',
            text: 'Outstanding service and beautiful designs. The bespoke jewelry service exceeded my expectations.'
        }
    ];

    let currentTestimonial = 0;
    const testimonialContent = document.querySelector('.testimonial-content');

    function updateTestimonial(index) {
        // Update content
        testimonialContent.innerHTML = `
            <h3>${testimonials[index].name}</h3>
            <p>${testimonials[index].text}</p>
        `;

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // Add click handlers to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentTestimonial = index;
            updateTestimonial(currentTestimonial);
        });
    });

    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial(currentTestimonial);
    }, 5000);

    // Feature cards hover effect
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');

    const products = [
        {
            image: "https://www.arundhatijewellers.com/shop/wp-content/uploads/2024/04/necklace-long-37.jpg",
            title: "Pearl Diamond Ring",
            sku: "SKU:JBA12R23",
            price: 3320
        },
        {
            image: "https://www.arundhatijewellers.com/shop/wp-content/uploads/2024/04/necklace-long-37.jpg",
            title: "Pearl Diamond Ring",
            sku: "SKU:JBA12R23",
            price: 3320
        },
        {
            image: "https://www.arundhatijewellers.com/shop/wp-content/uploads/2024/04/necklace-long-37.jpg",
            title: "Pearl Diamond Ring",
            sku: "SKU:JBA12R23",
            price: 3320
        },
        {
            image: "https://www.arundhatijewellers.com/shop/wp-content/uploads/2024/04/necklace-long-37.jpg",
            title: "Pearl Diamond Ring",
            sku: "SKU:JBA12R23",
            price: 3320
        },
        {
            image: "https://www.arundhatijewellers.com/shop/wp-content/uploads/2024/04/necklace-long-37.jpg",
            title: "Pearl Diamond Ring",
            sku: "SKU:JBA12R23",
            price: 3320
        },
        {
            image: "https://www.arundhatijewellers.com/shop/wp-content/uploads/2024/04/necklace-long-37.jpg",
            title: "Pearl Diamond Ring",
            sku: "SKU:JBA12R23",
            price: 3320
        },
        // Add more product objects here...
    ];

    // Duplicate the products array to ensure infinite loop
    const allProducts = [...products, ...products];

    // Function to create a product card
    function createProductCard(product) {
        return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="product-actions">
                        <button class="action-btn" title="Add to Wishlist">
                            <i data-lucide="heart"></i>
                        </button>
                        <button class="action-btn" title="Quick View">
                            <i data-lucide="search"></i>
                        </button>
                        <button class="action-btn" title="Compare">
                            <i data-lucide="shuffle"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <div class="rating">
                        ${Array(5).fill('<i data-lucide="star" class="star filled"></i>').join('')}
                    </div>
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-sku">${product.sku}</div>
                    <div class="product-footer">
                        <div class="price">₹ ${product.price}</div>
                        <button class="add-to-cart">
                            <i data-lucide="shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // Function to render the products
    function renderProducts() {
        productGrid.innerHTML = allProducts.map(createProductCard).join('');
    }

    // Render products initially
    renderProducts();

    // Initialize carousel
    let currentIndex = 0;
    const cardsPerView = 4; // Default to 4 items visible

    prevButton.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        productGrid.style.transform = `translateX(-${currentIndex * 100 / cardsPerView}%)`;
    });

    nextButton.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, allProducts.length - cardsPerView);
        productGrid.style.transform = `translateX(-${currentIndex * 100 / cardsPerView}%)`;
    });
});
