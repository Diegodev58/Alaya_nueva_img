document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      menuToggle.classList.toggle("active")
    })
  }

  // Testimonial Slider
  const testimonials = document.querySelectorAll(".testimonial")
  const prevBtn = document.querySelector(".prev")
  const nextBtn = document.querySelector(".next")

  if (testimonials.length > 0 && prevBtn && nextBtn) {
    let currentIndex = 0

    function showTestimonial(index) {
      testimonials.forEach((testimonial) => testimonial.classList.remove("active"))
      testimonials[index].classList.add("active")
    }

    function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length
      showTestimonial(currentIndex)
    }

    function prevTestimonial() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length
      showTestimonial(currentIndex)
    }

    nextBtn.addEventListener("click", nextTestimonial)
    prevBtn.addEventListener("click", prevTestimonial)

    // Auto slide every 5 seconds
    setInterval(nextTestimonial, 5000)
  }

  // Datos de productos
  const anillos = [
    {
      id: 1,
      name: "Anillos",
      price: "2,50 $",
      image: "anillos/anillo-1.jpg",
      description:
        "Elegante anillo bañado en oro de 18k con diseño minimalista que realza cualquier atuendo. Perfecto para ocasiones especiales o uso diario.",
      features:
        "Material: Aleación de zinc bañada en oro de 18k,Tamaños disponibles: 5-9,Hipoalergénico,Resistente al agua,Incluye estuche de regalo",
      category: "anillos",
    },
    {
      id: 2,
      name: "Anillos",
      price: "2,50 $",
      image: "anillos/anillo-2.jpg",
      description:
        "Anillo de eslabones dorados con cierre seguro. Su diseño atemporal lo convierte en un accesorio versátil para cualquier ocasión.",
      features:
        "Material: Aleación de zinc bañada en oro,Tamaños disponibles: 5-9,Cierre de mosquetón,Resistente al agua,Incluye estuche de regalo",
      category: "anillos",
    },
    {
      id: 3,
      name: "Anillos",
      price: "2,50 $",
      image: "anillos/anillo-3.jpg",
      description:
        "Anillo de eslabones dorados con cierre seguro. Su diseño atemporal lo convierte en un accesorio versátil para cualquier ocasión.",
      features:
        "Material: Aleación de zinc bañada en oro,Tamaños disponibles: 5-9,Cierre de mosquetón,Resistente al agua,Incluye estuche de regalo",
      category: "anillos",
    },
    {
      id: 4,
      name: "Anillos",
      price: "2,50 $",
      image: "anillos/anillo-4.jpg",
      description:
        "Anillo de eslabones dorados con cierre seguro. Su diseño atemporal lo convierte en un accesorio versátil para cualquier ocasión.",
      features:
        "Material: Aleación de zinc bañada en oro,Tamaños disponibles: 5-9,Cierre de mosquetón,Resistente al agua,Incluye estuche de regalo",
      category: "anillos",
    },
    {
      id: 5,
      name: "Anillos",
      price: "2,50 $",
      image: "anillos/anillo-5.jpg",
      description:
        "Anillo de eslabones dorados con cierre seguro. Su diseño atemporal lo convierte en un accesorio versátil para cualquier ocasión.",
      features:
        "Material: Aleación de zinc bañada en oro,Tamaños disponibles: 5-9,Cierre de mosquetón,Resistente al agua,Incluye estuche de regalo",
      category: "anillos",
    },
    {
      id: 6,
      name: "Anillos",
      price: "2,50 $",
      image: "anillos/anillo-6.jpg",
      description:
        "Anillo de eslabones dorados con cierre seguro. Su diseño atemporal lo convierte en un accesorio versátil para cualquier ocasión.",
      features:
        "Material: Aleación de zinc bañada en oro,Tamaños disponibles: 5-9,Cierre de mosquetón,Resistente al agua,Incluye estuche de regalo",
      category: "anillos",
    },
    {
      id: 7,
      name: "Anillos",
      price: "2,50 $",
      image: "anillos/anillo-7.jpg",
      description:
        "Anillo de eslabones dorados con cierre seguro. Su diseño atemporal lo convierte en un accesorio versátil para cualquier ocasión.",
      features:
        "Material: Aleación de zinc bañada en oro,Tamaños disponibles: 5-9,Cierre de mosquetón,Resistente al agua,Incluye estuche de regalo",
      category: "anillos",
    },
    {
      id: 8,
      name: "Anillos",
      price: "2,50 $",
      image: "anillos/anillo-8.jpg",
      description:
        "Anillo de eslabones dorados con cierre seguro. Su diseño atemporal lo convierte en un accesorio versátil para cualquier ocasión.",
      features:
        "Material: Aleación de zinc bañada en oro,Tamaños disponibles: 5-9,Cierre de mosquetón,Resistente al agua,Incluye estuche de regalo",
      category: "anillos",
    },
    {
      id: 9,
      name: "Anillos",
      price: "2,50 $",
      image: "anillos/anillo-9.jpg",
      description:
        "Anillo de eslabones dorados con cierre seguro. Su diseño atemporal lo convierte en un accesorio versátil para cualquier ocasión.",
      features:
        "Material: Aleación de zinc bañada en oro,Tamaños disponibles: 5-9,Cierre de mosquetón,Resistente al agua,Incluye estuche de regalo",
      category: "anillos",
    }
    
  ]

  const pulseras = [
    {
      id: 1,
      name: "Pulsera Crystal Charm",
      price: "5,00 $",
      image: "pulseras/Pulsera-1-A.jpg",
      description:
        "Pulsera ajustable con cristales brillantes que capturan y reflejan la luz. Cada cristal está cuidadosamente engarzado a mano.",
      features:
        "Material: Aleación de zinc con baño de oro rosa,Longitud ajustable: 16-20 cm,Cristales de alta calidad,Hipoalergénico,Incluye bolsa de terciopelo",
      category: "pulseras",
    },
    {
      id: 2,
      name: "Pulsera Crystal Charm",
      price: "5,00 $",
      image: "pulseras/Pulsera-2-A.jpg",
      description:
        "Pulsera ajustable con cristales brillantes que capturan y reflejan la luz. Cada cristal está cuidadosamente engarzado a mano.",
      features:
        "Material: Aleación de zinc con baño de oro rosa,Longitud ajustable: 16-20 cm,Cristales de alta calidad,Hipoalergénico,Incluye bolsa de terciopelo",
      category: "pulseras",
    },
    {
      id: 3,
      name: "Pulsera Crystal Charm",
      price: "5,00 $",
      image: "pulseras/Pulsera-3-A.jpg",
      description:
        "Pulsera ajustable con cristales brillantes que capturan y reflejan la luz. Cada cristal está cuidadosamente engarzado a mano.",
      features:
        "Material: Aleación de zinc con baño de oro rosa,Longitud ajustable: 16-20 cm,Cristales de alta calidad,Hipoalergénico,Incluye bolsa de terciopelo",
      category: "pulseras",
    },
    {
      id: 4,
      name: "Pulsera Crystal Charm",
      price: "5,00 $",
      image: "pulseras/Pulsera-4-A.jpg",
      description:
        "Pulsera ajustable con cristales brillantes que capturan y reflejan la luz. Cada cristal está cuidadosamente engarzado a mano.",
      features:
        "Material: Aleación de zinc con baño de oro rosa,Longitud ajustable: 16-20 cm,Cristales de alta calidad,Hipoalergénico,Incluye bolsa de terciopelo",
      category: "pulseras",
    },
    {
      id: 5,
      name: "Pulsera Crystal Charm",
      price: "5,00 $",
      image: "pulseras/Pulsera-5-A.jpg",
      description:
        "Pulsera ajustable con cristales brillantes que capturan y reflejan la luz. Cada cristal está cuidadosamente engarzado a mano.",
      features:
        "Material: Aleación de zinc con baño de oro rosa,Longitud ajustable: 16-20 cm,Cristales de alta calidad,Hipoalergénico,Incluye bolsa de terciopelo",
      category: "pulseras",
    },
    {
      id: 6,
      name: "Pulsera Crystal Charm",
      price: "5,00 $",
      image: "pulseras/Pulsera-6-A.jpg",
      description:
        "Pulsera ajustable con cristales brillantes que capturan y reflejan la luz. Cada cristal está cuidadosamente engarzado a mano.",
      features:
        "Material: Aleación de zinc con baño de oro rosa,Longitud ajustable: 16-20 cm,Cristales de alta calidad,Hipoalergénico,Incluye bolsa de terciopelo",
      category: "pulseras",
    },
    {
      id: 7,
      name: "Pulsera Crystal Charm",
      price: "5,00 $",
      image: "pulseras/Pulsera-7-A.jpg",
      description:
        "Pulsera ajustable con cristales brillantes que capturan y reflejan la luz. Cada cristal está cuidadosamente engarzado a mano.",
      features:
        "Material: Aleación de zinc con baño de oro rosa,Longitud ajustable: 16-20 cm,Cristales de alta calidad,Hipoalergénico,Incluye bolsa de terciopelo",
      category: "pulseras",
    },
    {
      id: 8,
      name: "Pulsera Crystal Charm",
      price: "5,00 $",
      image: "pulseras/Pulsera-8-A.jpg",
      description:
        "Pulsera ajustable con cristales brillantes que capturan y reflejan la luz. Cada cristal está cuidadosamente engarzado a mano.",
      features:
        "Material: Aleación de zinc con baño de oro rosa,Longitud ajustable: 16-20 cm,Cristales de alta calidad,Hipoalergénico,Incluye bolsa de terciopelo",
      category: "pulseras",
    }
    
  ]

  const zarcillos = [
    {
      id: 1,
      name: "Zarcillos",
      price: "1,60 $",
      image: "zarcillos/Zarcillo-1.jpg",
      description:
        "Zarcillos largos con diseño en cascada que aportan movimiento y elegancia. Ligeros y cómodos para uso prolongado.",
      features:
        "Material: Aleación de zinc con baño de plata,Longitud: 6 cm,Hipoalergénico,Cierre seguro,Incluye estuche de regalo",
      category: "zarcillos",
    },
    {
      id: 2,
      name: "Zarcillos",
      price: "1,60 $",
      image: "zarcillos/Zarcillo-2.jpg",
      description:
        "Zarcillos con perlas cultivadas que añaden un toque de sofisticación clásica. El diseño minimalista realza la belleza natural de las perlas.",
      features:
        "Material: Plata 925 con perlas cultivadas,Diámetro de perla: 8mm,Hipoalergénico,Resistente a la oxidación,Incluye estuche de regalo",
      category: "zarcillos",
    },
    {
      id: 3,
      name: "Zarcillos",
      price: "1,60 $",
      image: "zarcillos/Zarcillo-3.jpg",
      description:
        "Zarcillos con diseño geométrico moderno en acabado dorado. Perfectos para dar un toque contemporáneo a cualquier atuendo.",
      features:
        "Material: Aleación de zinc bañada en oro,Longitud: 4.5 cm,Diseño ligero,Hipoalergénico,Incluye estuche de regalo",
      category: "zarcillos",
    },
    {
      id: 4,
      name: "Zarcillos",
      price: "1,60 $",
      image: "zarcillos/Zarcillo-4.jpg",
      description:
        "Zarcillos con perlas cultivadas queañaden un toque de sofisticación clásica. El diseño minimalista realza la belleza natural de las perlas.",
      features:
        "Material: Plata 925 con perlas cultivadas,Diámetro de perla: 8mm,Hipoalergénico,Resistente a la oxidación,Incluye estuche de regalo",
      category: "zarcillos",
    },
    {
      id: 5,
      name: "Zarcillos",
      price: "1,60 $",
      image: "zarcillos/Zarcillo-5.jpg",
      description:
        "Zarcillos con perlas cultivadas queañaden un toque de sofisticación clásica. El diseño minimalista realza la belleza natural de las perlas.",
      features:
        "Material: Plata 925 con perlas cultivadas,Diámetro de perla: 8mm,Hipoalergénico,Resistente a la oxidación,Incluye estuche de regalo",
      category: "zarcillos",
    },
    {
      id: 6,
      name: "Zarcillos",
      price: "1,60 $",
      image: "zarcillos/Zarcillo-6.jpg",
      description:
        "Zarcillos con perlas cultivadas queañaden un toque de sofisticación clásica. El diseño minimalista realza la belleza natural de las perlas.",
      features:
        "Material: Plata 925 con perlas cultivadas,Diámetro de perla: 8mm,Hipoalergénico,Resistente a la oxidación,Incluye estuche de regalo",
      category: "zarcillos",
    },
    {
      id: 7,
      name: "Zarcillos",
      price: "1,60 $",
      image: "zarcillos/Zarcillo-7.jpg",
      description:
        "Zarcillos con perlas cultivadas queañaden un toque de sofisticación clásica. El diseño minimalista realza la belleza natural de las perlas.",
      features:
        "Material: Plata 925 con perlas cultivadas,Diámetro de perla: 8mm,Hipoalergénico,Resistente a la oxidación,Incluye estuche de regalo",
      category: "zarcillos",
    },
    {
      id: 8,
      name: "Zarcillos",
      price: "1,60 $",
      image: "zarcillos/Zarcillo-8.jpg",
      description:
        "Zarcillos con perlas cultivadas queañaden un toque de sofisticación clásica. El diseño minimalista realza la belleza natural de las perlas.",
      features:
        "Material: Plata 925 con perlas cultivadas,Diámetro de perla: 8mm,Hipoalergénico,Resistente a la oxidación,Incluye estuche de regalo",
      category: "zarcillos",
    }
  ]

  const cadenas = [
    {
      id: 1,
      name: "Cadena",
      price: "5,00 $",
      image: "cadenas/Collar-1.jpg",
      description:
        "Cadena delicada de oro con diseño minimalista. Perfecta para uso diario o para combinar con otros collares.",
      features:
        "Material: Aleación de zinc bañada en oro,Longitud: 45 cm,Cierre de mosquetón,Resistente al agua,Incluye estuche de regalo",
      category: "cadenas",
    },
    {
      id: 2,
      name: "Cadena Pendant Silver",
      price: "5,00 $",
      image: "cadenas/Collar-2.jpg",
      description:
        "Cadena de plata con elegante colgante. El diseño atemporal la convierte en un accesorio versátil para cualquier ocasión.",
      features: "Material: Plata 925,Longitud: 50 cm,Colgante de 2 cm,Cierre seguro,Incluye estuche de regalo",
      category: "cadenas",
    },
    {
      id: 3,
      name: "Cadena Layered Gold",
      price: "$5,00",
      image: "cadenas/Collar-3.jpg",
      description:
        "Cadena dorada de múltiples capas que añade dimensión y estilo a cualquier atuendo. Perfecta para ocasiones especiales.",
      features:
        "Material: Aleación de zinc bañada en oro,Longitud: 40-45-50 cm (tres capas),Cierre ajustable,Hipoalergénico,Incluye estuche de regalo",
      category: "cadenas",
    },
  ]

  const otros = [
    {
      id: '',
      name:'',
      price:'',
      image: '',
      description:'' ,
      features: '',
      category: '',
    },
  ]

  // Combinar todos los productos en un solo array
  const allProducts = [...anillos, ...pulseras, ...zarcillos, ...cadenas, ...otros]

  // Función para generar el HTML de un producto
  function generateProductHTML(product) {
    return `
      <div class="product-item ${product.category}" id="product-${product.id}">
        <div class="product-img">
          <img src="${product.image}" alt="${product.name}">
          <div class="product-overlay">
            <a href="#" class="view-details" 
              data-id="${product.id}"
              data-name="${product.name}" 
              data-price="${product.price}"
              data-image="${product.image}"
              data-description="${product.description}"
              data-features="${product.features}">Ver detalles</a>
          </div>
        </div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <p class="price">${product.price}</p>
        </div>
      </div>
    `
  }

  // Cargar productos en la página
  const productGrid = document.getElementById("product-grid")

  if (productGrid) {
    // Generar HTML para todos los productos
    let productsHTML = ""
    allProducts.forEach((product) => {
      productsHTML += generateProductHTML(product)
    })

    // Insertar en el DOM
    productGrid.innerHTML = productsHTML
  }

  // Product Filtering
  const filterBtns = document.querySelectorAll(".filter-btn")
  const productItems = document.querySelectorAll(".product-item")

  if (filterBtns.length > 0 && productItems.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all buttons
        filterBtns.forEach((btn) => btn.classList.remove("active"))
        // Add active class to clicked button
        this.classList.add("active")

        const filter = this.getAttribute("data-filter")

        productItems.forEach((item) => {
          if (filter === "all" || item.classList.contains(filter)) {
            item.style.display = "block"
          } else {
            item.style.display = "none"
          }
        })
      })
    })
  }

  // Newsletter Form Submission
  const newsletterForm = document.getElementById("newsletter-form")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector('input[type="email"]').value

      // Here you would typically send the email to your server
      // For demo purposes, we'll just show an alert
      alert(`¡Gracias por suscribirte con ${email}! Pronto recibirás nuestras novedades.`)
      this.reset()
    })
  }

  // Contact Form Submission
  const contactForm = document.getElementById("contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Here you would typically send the form data to your server
      // For demo purposes, we'll just show an alert
      alert("¡Gracias por tu mensaje! Te responderemos a la brevedad.")
      this.reset()
    })
  }

  // FAQ Accordion
  const accordionItems = document.querySelectorAll(".accordion-item")

  if (accordionItems.length > 0) {
    accordionItems.forEach((item) => {
      const header = item.querySelector(".accordion-header")

      header.addEventListener("click", () => {
        // Close all other accordion items
        accordionItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active")
          }
        })

        // Toggle current accordion item
        item.classList.toggle("active")
      })
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        })

        // Close mobile menu if open
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active")
          menuToggle.classList.remove("active")
        }
      }
    })
  })

  // Modal de Detalles del Producto
  const modal = document.getElementById("product-modal")
  const closeModal = document.querySelector(".close-modal")
  const modalProductImage = document.getElementById("modal-product-image")
  const modalProductTitle = document.getElementById("modal-product-title")
  const modalProductPrice = document.getElementById("modal-product-price")
  const modalProductDescription = document.getElementById("modal-product-description")
  const modalProductFeatures = document.getElementById("modal-product-features")
  const decreaseQtyBtn = document.getElementById("decrease-qty")
  const increaseQtyBtn = document.getElementById("increase-qty")
  const productQty = document.getElementById("product-qty")
  const addToCartBtn = document.querySelector(".add-to-cart-btn")

  if (modal) {
    // Configurar los event listeners para los botones "Ver detalles" después de cargar los productos
    const setupViewDetailsButtons = () => {
      const viewDetailsBtns = document.querySelectorAll(".view-details")

      viewDetailsBtns.forEach((btn) => {
        btn.addEventListener("click", function (e) {
          e.preventDefault()

          // Obtener datos del producto desde los atributos data
          const productId = this.getAttribute("data-id")
          const productName = this.getAttribute("data-name")
          const productPrice = this.getAttribute("data-price")
          const productImage = this.getAttribute("data-image")
          const productDescription = this.getAttribute("data-description")
          const productFeatures = this.getAttribute("data-features")

          // Actualizar el contenido del modal
          modalProductImage.src = productImage
          modalProductImage.alt = productName
          modalProductTitle.textContent = productName
          modalProductPrice.textContent = productPrice
          modalProductDescription.textContent = productDescription

          // Limpiar y agregar características
          modalProductFeatures.innerHTML = ""
          if (productFeatures) {
            const features = productFeatures.split(",")
            features.forEach((feature) => {
              const li = document.createElement("li")
              li.textContent = feature.trim()
              modalProductFeatures.appendChild(li)
            })
          }

          // Resetear cantidad
          productQty.value = 1

          // Mostrar modal
          modal.style.display = "block"
          document.body.style.overflow = "hidden" // Evitar scroll en el body
        })
      })
    }

    // Configurar los botones después de cargar los productos
    setupViewDetailsButtons()

    // Cerrar modal al hacer clic en X
    if (closeModal) {
      closeModal.addEventListener("click", () => {
        modal.style.display = "none"
        document.body.style.overflow = "auto" // Restaurar scroll
      })
    }

    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none"
        document.body.style.overflow = "auto" // Restaurar scroll
      }
    })

    // Controles de cantidad
    if (decreaseQtyBtn && increaseQtyBtn && productQty) {
      decreaseQtyBtn.addEventListener("click", () => {
        const qty = Number.parseInt(productQty.value)
        if (qty > 1) {
          productQty.value = qty - 1
        }
      })

      increaseQtyBtn.addEventListener("click", () => {
        const qty = Number.parseInt(productQty.value)
        if (qty < 10) {
          productQty.value = qty + 1
        }
      })

      productQty.addEventListener("change", function () {
        const qty = Number.parseInt(this.value)
        if (isNaN(qty) || qty < 1) {
          this.value = 1
        } else if (qty > 10) {
          this.value = 10
        }
      })
    }

    // Agregar al carrito (simulado)
    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", () => {
        const productName = modalProductTitle.textContent
        const quantity = productQty.value

        let url = "https://wa.me/+584129627765?text=Hola Para Pedir " + productName + " Cantidad: " + quantity
        window.location.href = url

        // Cerrar modal después de agregar al carrito
        modal.style.display = "none"
        document.body.style.overflow = "auto" // Restaurar scroll
      })
    }
  }
})

