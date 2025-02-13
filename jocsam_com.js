document.addEventListener('DOMContentLoaded', function() {
    const item = document.querySelectorAll('.item');

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                
            }else {
                entry.target.classList.remove("visible");
            }
        });
    }, options);

    item.forEach(item => {
        observer.observe(item);
    });


    const brandProducts = document.getElementsByClassName('brand-product')
    const rightPane = document.getElementById('right-pane')

    const Cars = {
        Volkswagen: [
            {name: 'volkswagen 1', price: '$100', image: '/images/car1.jpg'},
            {name: 'volkswagen 2', price: '$200', image: '/images/car2.jpg'},
            {name: 'volkswagen 3', price: '$300', image: '/images/car3.png'},
        ],
        Toyota: [
            {name: 'toyata 1', price: '$100', image: '/images/car4.png'},
            {name: 'toyata 1', price: '$100', image: '/images/car5.png'},
            {name: 'toyata 1', price: '$100', image: '/images/car1.jpg'},
        ],
        Benz: [
            {name: 'Benz 1', price: '$100', image: 'Benz-1.jpg'},
            {name: 'Benz 1', price: '$100', image: 'Benz-1.jpg'},
            {name: 'Benz 1', price: '$100', image: 'Benz-1.jpg'},
        ],
        Ford: [
            {name: 'Ford 1', price: '$100', image: 'Ford-1.jpg'},
            {name: 'Ford 1', price: '$100', image: 'Ford-1.jpg'},
            {name: 'Ford 1', price: '$100', image: 'Ford-1.jpg'},
        ],
        General: [
            {name: 'General 1', price: '$100', image: 'General-1.jpg'},
            {name: 'General 1', price: '$100', image: 'General-1.jpg'},
            {name: 'General 1', price: '$100', image: 'General-1.jpg'},
        ],
        BMW: [
            {name: 'BMW 1', price: '$100', image: 'BMW-1.jpg'},
            {name: 'BMW 1', price: '$100', image: 'BMW-1.jpg'},
            {name: 'BMW 1', price: '$100', image: 'BMW-1.jpg'},
        ],
        Hyundai: [
            {name: 'Hyundai 1', price: '$100', image: 'Hyundai-1.jpg'},
            {name: 'Hyundai 1', price: '$100', image: 'Hyundai-1.jpg'},
            {name: 'Hyundai 1', price: '$100', image: 'Hyundai-1.jpg'},
        ],

        SAIC: [
            {name: 'SAIC 1', price: '$100', image: 'SAIC-1.jpg'},
            {name: 'SAIC 1', price: '$100', image: 'SAIC-1.jpg'},
            {name: 'SAIC 1', price: '$100', image: 'SAIC-1.jpg'},
        ],

        FAW: [
            {name: 'FAW 1', price: '$100', image: 'FAW-1.jpg'},
            {name: 'FAW 1', price: '$100', image: 'FAW-1.jpg'},
            {name: 'FAW 1', price: '$100', image: 'FAW-1.jpg'},
        ],

        Dongfeng: [
            {name: 'Dongfeng 1', price: '$100', image: 'Dongfeng-1.jpg'},
            {name: 'Dongfeng 1', price: '$100', image: 'Dongfeng-1.jpg'},
            {name: 'Dongfeng 1', price: '$100', image: 'Dongfeng-1.jpg'},
        ],

        Tesla: [
            {name: 'Tesla 1', price: '$100', image: 'Tesla-1.jpg'},
            {name: 'Tesla 1', price: '$100', image: 'Tesla-1.jpg'},
            {name: 'Tesla 1', price: '$100', image: 'Tesla-1.jpg'},
        ],

        Nissan: [
            {name: 'Nissan 1', price: '$100', image: 'Nissan-1.jpg'},
            {name: 'Nissan 1', price: '$100', image: 'Nissan-1.jpg'},
            {name: 'Nissan 1', price: '$100', image: 'Nissan-1.jpg'},
        ],

        GAC: [
            {name: 'GAC 1', price: '$100', image: 'GAC-1.jpg'},
            {name: 'GAC 1', price: '$100', image: 'GAC-1.jpg'},
            {name: 'GAC 1', price: '$100', image: 'GAC-1.jpg'},
        ],

        KIA: [
            {name: 'KIA 1', price: '$100', image: 'KIA-1.jpg'},
            {name: 'KIA 1', price: '$100', image: 'KIA-1.jpg'},
            {name: 'KIA 1', price: '$100', image: 'KIA-1.jpg'},
        ],

        Renault: [
            {name: 'Renault 1', price: '$100', image: 'Renault-1.jpg'},
            {name: 'Renault 1', price: '$100', image: 'Renault-1.jpg'},
            {name: 'Renault 1', price: '$100', image: 'Renault-1.jpg'},
        ],

        BYDa: [
            {name: 'BYD 1', price: '$100', image: 'BYD-1.jpg'},
            {name: 'BYD 1', price: '$100', image: 'BYD-1.jpg'},
            {name: 'BYD 1', price: '$100', image: 'BYD-1.jpg'},
        ],

        Tata: [
            {name: 'Honda 1', price: '$100', image: 'Tata-1.jpg'},
            {name: 'Honda 1', price: '$100', image: 'Tata-1.jpg'},
            {name: 'Honda 1', price: '$100', image: 'Tata-1.jpg'},
        ],

        Suzuki: [
            {name: 'Suzuki 1', price: '$100', image: 'Suzuki-1.jpg'},
            {name: 'Suzuki 1', price: '$100', image: 'Suzuki-1.jpg'},
            {name: 'Suzuki 1', price: '$100', image: 'Suzuki-1.jpg'},
        ],

        Mazda: [
            {name: 'Mazda 1', price: '$100', image: 'Mazda-1.jpg'},
            {name: 'Mazda 1', price: '$100', image: 'Mazda-1.jpg'},
            {name: 'Mazda 1', price: '$100', image: 'Mazda-1.jpg'},
        ],

        BAIC: [
            {name: 'BAIC 1', price: '$100', image: 'BAIC-1.jpg'},
            {name: 'BAIC 1', price: '$100', image: 'BAIC-1.jpg'},
            {name: 'BAIC 1', price: '$100', image: 'BAIC-1.jpg'},
        ],

        Izuzu: [
            {name: 'Izuzu 1', price: '$100', image: 'Izuzu-1.jpg'},
            {name: 'Izuzu 1', price: '$100', image: 'Izuzu-1.jpg'},
            {name: 'Izuzu 1', price: '$100', image: 'Izuzu-1.jpg'},
        ],

        Geely: [
            {name: 'Geely 1', price: '$100', image: 'Geely-1.jpg'},
            {name: 'Geely 1', price: '$100', image: 'Geely-1.jpg'},
            {name: 'Geely 1', price: '$100', image: 'Geely-1.jpg'},
        ],

        Subara: [
            {name: 'Subara 1', price: '$100', image: 'Subara-1.jpg'},
            {name: 'Subara 1', price: '$100', image: 'Subara-1.jpg'},
            {name: 'Subara 1', price: '$100', image: 'Subara-1.jpg'},
        ],
        
    } 


    const Bikes = {
        Honda: [
            {name: 'volkswagen 1', price: '$100', image: '/images/bike1.jfif'},
            {name: 'volkswagen 2', price: '$200', image: '/images/bike2.jfif'},
            {name: 'volkswagen 3', price: '$300', image: '/images/bike3.png'},
        ],
        Hero: [
            {name: 'toyata 1', price: '$100', image: '/images/bike4.png'},
            {name: 'toyata 1', price: '$100', image: '/images/bike1.jfif'},
            {name: 'toyata 1', price: '$100', image: '/images/bike2.jfif'},
        ],
        Yamaha: [
            {name: 'Benz 1', price: '$100', image: 'Benz-1.jpg'},
            {name: 'Benz 1', price: '$100', image: 'Benz-1.jpg'},
            {name: 'Benz 1', price: '$100', image: 'Benz-1.jpg'},
        ],
        Yadea: [
            {name: 'Ford 1', price: '$100', image: 'Ford-1.jpg'},
            {name: 'Ford 1', price: '$100', image: 'Ford-1.jpg'},
            {name: 'Ford 1', price: '$100', image: 'Ford-1.jpg'},
        ],
        TVS: [
            {name: 'General 1', price: '$100', image: 'General-1.jpg'},
            {name: 'General 1', price: '$100', image: 'General-1.jpg'},
            {name: 'General 1', price: '$100', image: 'General-1.jpg'},
        ],
        Bajaj: [
            {name: 'BMW 1', price: '$100', image: 'BMW-1.jpg'},
            {name: 'BMW 1', price: '$100', image: 'BMW-1.jpg'},
            {name: 'BMW 1', price: '$100', image: 'BMW-1.jpg'},
        ],
        Haojue: [
            {name: 'Hyundai 1', price: '$100', image: 'Hyundai-1.jpg'},
            {name: 'Hyundai 1', price: '$100', image: 'Hyundai-1.jpg'},
            {name: 'Hyundai 1', price: '$100', image: 'Hyundai-1.jpg'},
        ],

        Suzuki: [
            {name: 'SAIC 1', price: '$100', image: 'SAIC-1.jpg'},
            {name: 'SAIC 1', price: '$100', image: 'SAIC-1.jpg'},
            {name: 'SAIC 1', price: '$100', image: 'SAIC-1.jpg'},
        ],

        Loncin: [
            {name: 'FAW 1', price: '$100', image: 'FAW-1.jpg'},
            {name: 'FAW 1', price: '$100', image: 'FAW-1.jpg'},
            {name: 'FAW 1', price: '$100', image: 'FAW-1.jpg'},
        ],

        Zongshen: [
            {name: 'Dongfeng 1', price: '$100', image: 'Dongfeng-1.jpg'},
            {name: 'Dongfeng 1', price: '$100', image: 'Dongfeng-1.jpg'},
            {name: 'Dongfeng 1', price: '$100', image: 'Dongfeng-1.jpg'},
        ],

        Harley: [
            {name: 'Tesla 1', price: '$100', image: 'Tesla-1.jpg'},
            {name: 'Tesla 1', price: '$100', image: 'Tesla-1.jpg'},
            {name: 'Tesla 1', price: '$100', image: 'Tesla-1.jpg'},
        ],

    } 


    const Bicycles = {
        Giant: [
            {name: 'volkswagen 1', price: '$100', image: '/images/bicycle1.jpg'},
            {name: 'volkswagen 2', price: '$200', image: '/images/bicycle2.jpg'},
            {name: 'volkswagen 3', price: '$300', image: '/images/bicycle3.png'},
        ],

        Trek: [
            {name: 'toyata 1', price: '$100', image: '/images/bicycle4.png'},
            {name: 'toyata 1', price: '$100', image: '/images/bicycle5.png'},
            {name: 'toyata 1', price: '$100', image: '/images/bicycle1.jpg'},
        ],

        Cannondale: [
            {name: 'Benz 1', price: '$100', image: 'Benz-1.jpg'},
            {name: 'Benz 1', price: '$100', image: 'Benz-1.jpg'},
            {name: 'Benz 1', price: '$100', image: 'Benz-1.jpg'},
        ],

        Bianchi: [
            {name: 'Ford 1', price: '$100', image: 'Ford-1.jpg'},
            {name: 'Ford 1', price: '$100', image: 'Ford-1.jpg'},
            {name: 'Ford 1', price: '$100', image: 'Ford-1.jpg'},
        ],

        Scott: [
            {name: 'General 1', price: '$100', image: 'General-1.jpg'},
            {name: 'General 1', price: '$100', image: 'General-1.jpg'},
            {name: 'General 1', price: '$100', image: 'General-1.jpg'},
        ],

        Merida: [
            {name: 'BMW 1', price: '$100', image: 'BMW-1.jpg'},
            {name: 'BMW 1', price: '$100', image: 'BMW-1.jpg'},
            {name: 'BMW 1', price: '$100', image: 'BMW-1.jpg'},
        ],

        Colnado: [
            {name: 'Hyundai 1', price: '$100', image: 'Hyundai-1.jpg'},
            {name: 'Hyundai 1', price: '$100', image: 'Hyundai-1.jpg'},
            {name: 'Hyundai 1', price: '$100', image: 'Hyundai-1.jpg'},
        ],

        Fuji: [
            {name: 'SAIC 1', price: '$100', image: 'SAIC-1.jpg'},
            {name: 'SAIC 1', price: '$100', image: 'SAIC-1.jpg'},
            {name: 'SAIC 1', price: '$100', image: 'SAIC-1.jpg'},
        ],

        Brompton: [
            {name: 'FAW 1', price: '$100', image: 'FAW-1.jpg'},
            {name: 'FAW 1', price: '$100', image: 'FAW-1.jpg'},
            {name: 'FAW 1', price: '$100', image: 'FAW-1.jpg'},
        ],
        
    } 
    

    

    const Products = { Cars, Bikes, Bicycles };

    function updateProductList(category, brand) {
        console.log(`Updating product list for category: ${category}, brand: ${brand}`); // Debugging
        // Clear the existing product list
        const productList = document.getElementById(`${category}-product-list`);
        productList.innerHTML = '';

        if (Products[category] && Products[category][brand]) {
            Products[category][brand].forEach(product => {
                const productItem = document.createElement('div');
                productItem.className = 'product-item';
                
                const productImage = document.createElement('img');
                productImage.src = product.image;
                productImage.alt = product.name;
                productImage.className = 'thumbnail';

                const productInfo = document.createElement('div');
                productInfo.className = 'product-info';
                productInfo.innerHTML = `${product.name} <br> ${product.price}`;

                productItem.appendChild(productImage);
                productItem.appendChild(productInfo);
                productList.appendChild(productItem);

                productItem.addEventListener('click', () => {
                    displayLargeImage(category, brand, product);
                });
            });
        } else {
            console.log('Brand not found in the selected category')
        }
    }

    function displayLargeImage(category, brand, product) {
        console.log(`large image for category: ${category}, brand: ${brand} product: ${product.name}`)
        
        
        const rightPane = document.getElementById(`${category}-right-pane`);
        const largeImage = rightPane.querySelector('.large-image');
        largeImage.src = product.image;
        largeImage.alt = product.name;
        rightPane.style.display = 'block';
        rightPane.style.width = '60%';
        rightPane.style.height = '70vh';

        // Close the right pane when the user clicks outside of it
        window.addEventListener('click', (e) => {
            if (e.target === rightPane) {
                rightPane.style.display = 'none';
                rightPane.style.width = '0';
                rightPane.style.height = '0';
            }
        });
        
        let currentProductIndex = Products[category][brand].indexOf(product);
        // move to the next product in the category when the the next button is clicked
        const nextButton = rightPane.querySelector('.next-button');
        nextButton.addEventListener('click', () => {
            const nextProductIndex = (currentProductIndex + 1) % Products[category][brand].length;
            const nextProduct = Products[category][brand][nextProductIndex];
            console.log(displayLargeImage(category, brand, nextProduct));

            });

        // move to the previous product in the category when the the prev button is clicked
        const prevButton = rightPane.querySelector('.prev-button');
        prevButton.addEventListener('click', () => {
            const prevProductIndex = (currentProductIndex - 1 + Products[category][brand].length) % Products[category][brand].length;
            const prevProduct = Products[category][brand][prevProductIndex];
            displayLargeImage(category, brand, prevProduct);
        });

        const purchaseButton = rightPane.querySelector('.purchase-button')
        purchaseButton.addEventListener('click', () => {
            alert(`Downloading category: ${category}, brand: ${brand} and product: ${product.name}`)
        })
        
    };

    

    const carBrands = document.getElementById('car-brands');
    const bikeBrands = document.getElementById('bike-brands');
    const bicycleBrands = document.getElementById('bicycle-brands');

    carBrands.addEventListener('change', (e) => {
        updateProductList('Cars', e.target.value);
    });
    
    bikeBrands.addEventListener('change', (e) => {
        updateProductList('Bikes', e.target.value);
    });
    
    bicycleBrands.addEventListener('change', (e) => {
        updateProductList('Bicycles', e.target.value);
    });


    let selectProducts = document.getElementById('ind_products');
    selectProducts.addEventListener('change', () => {
        selectedProducts = selectProducts.value
        if (selectedProducts) {
            document.getElementById(selectedProducts).scrollIntoView({behavior: 'smooth'})
        }
    })();

    const navToggleBtn = document.querySelector('.toggle-nav-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Initially hide the nav menu
    navMenu.classList.add('slide-out-menu');

    // Toggle navigation menu on click
    navToggleBtn.addEventListener('click', function() {
        // Check if the menu is currently open
        if (navMenu.classList.contains('slide-in-menu')) {
            // If it is open, close it
            navMenu.classList.remove('slide-in-menu');
            navMenu.classList.add('slide-out-menu');
            navToggleBtn.classList.remove('close');
            navToggleBtn.classList.add('open');
        } else {
            // If it is closed, open it
            navMenu.classList.remove('slide-out-menu');
            navMenu.classList.add('slide-in-menu');
            navToggleBtn.classList.remove('open');
            navToggleBtn.classList.add('close');
        }
    });

    // Close the nav menu when a link is clicked
    navMenu.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            navMenu.classList.remove('slide-in-menu');
            navMenu.classList.add('slide-out-menu');
            navToggleBtn.classList.remove('close');
            navToggleBtn.classList.add('open');
        }
    });

    // Close the nav menu when the window is resized
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('slide-in-menu');
            navMenu.classList.add('slide-out-menu');
            navToggleBtn.classList.remove('close');
            navToggleBtn.classList.add('open');
        }
    });

    // Close the nav menu when the user clicks outside of it
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !navToggleBtn.contains(event.target)) {
            navMenu.classList.remove('slide-in-menu');
            navMenu.classList.add('slide-out-menu');
            navToggleBtn.classList.remove('close');
            navToggleBtn.classList.add('open');
        }
    });

});


