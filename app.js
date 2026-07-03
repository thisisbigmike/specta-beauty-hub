// Product Database and Catalog Data
const PRODUCTS = [
  // --- Wig Revamp ---
  {
    id: "silicon-mix",
    name: "Silicon Mix Treatment",
    description: "Intensive deep conditioning mask to restore dry and damaged wigs, giving them a sleek and glossy texture.",
    category: "revamp",
    price: 12500,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBMhHjixQuTNtsSHLbK2HzVqflh3Zw0NOaGmzY62bo0bffnusfoH8DC6-PBYu1QTWG4J8TL-AKD7ecHVxVnahHv-1ogN4JP9YgVr2mglkYzlPKBXoe---GBVjYDW-huYIAyCMyuq0wZ_aVnSez8vvIBjllNlqqvy9fZd0XsqBw-rkr2gZd60IOjhCFzBvu4ycQCK3eGkxx1QXH0ox2mJSESwpBeqd9TPTb5sHyJAUp_woxDcRMmHM_PA",
    isBestseller: true
  },
  {
    id: "keratin-mask",
    name: "Keratin Mask",
    description: "Rich keratin protein treatment that strengthens wig strands and reduces shedding/breakage.",
    category: "revamp",
    price: 8500,
    image: "https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "keratin-milk",
    name: "Keratin Milk",
    description: "Smooth, lightweight leave-in formula that softens cuticles, detangles, and imparts a natural bounce.",
    category: "revamp",
    price: 7000,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "tresemme-combo",
    name: "Tresemme Conditioner & Shampoo",
    description: "Salon-grade duo to wash, hydrate, and prepare wigs for premium styling.",
    category: "revamp",
    price: 15000,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "olive-shampoo-5l",
    name: "Olive Conditioner & Shampoo (5L)",
    description: "Bulk 5-liter salon sizing of olive extract shampoo and conditioner, perfect for professional hair wash basins.",
    category: "revamp",
    price: 22500,
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "argan-shampoo-5l",
    name: "Argan Conditioner & Shampoo (5L)",
    description: "Bulk 5-liter sizing with Moroccan argan oil extracts. Intensely hydrates hair fibers on a larger scale.",
    category: "revamp",
    price: 25000,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "baosmei-combo",
    name: "Baosmei Combo",
    description: "Highly sought after hair restoration formula package including both conditioner and shampoo.",
    category: "revamp",
    price: 18000,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "heat-protector",
    name: "Heat Protector Spray",
    description: "Shields wig fibers from heat damage up to 450°F during flat ironing and hot comb presses.",
    category: "revamp",
    price: 6500,
    image: "https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "hair-serum",
    name: "Gloss & Shine Serum",
    description: "Lightweight, non-greasy finishing oil that eliminates frizz and locks in brilliant editorial shine.",
    category: "revamp",
    price: 5000,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "curl-lala",
    name: "Aunt Jackie's Curl La La",
    description: "Defining curl custard that delivers moisture, shine, and soft bouncy curls without heavy residues.",
    category: "revamp",
    price: 9500,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "wax-stick",
    name: "Professional Wax Stick",
    description: "Clean styling wax stick for flawless layout, securing flyaways, and detailing precise parting spaces.",
    category: "revamp",
    price: 6000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjFDWT3gP13HwE14Lhtg6fEZndIDhIC9oBUo9BDe1JbSDoJ1rCr-M6R7v2aj1ciKerONCn8vktmynWSOGxsLo1xEyPDqHROcGox6XKYEwtiroE9-G1CnnjKbLw7V6g-vjw0xI5h5vfVF3qdWseyvfyKMT9h5hky4J9Fo9kfng-wnfFzNAH3fuuzofNtAGbwyvKbj7Wd0tAPj0UuxNeMQEBsPtFN_xSoJzV2Jpu8fTHCIO0h8IVgamRoA",
    isBestseller: true
  },
  {
    id: "bleaching-powder",
    name: "Wig Bleaching Powder",
    description: "Professional grade dust-free bleaching powder for lifting and customizing frontal lace knots.",
    category: "revamp",
    price: 7500,
    image: "https://images.unsplash.com/photo-1599751449128-db724913d6b1?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },

  // --- Frontal Installation ---
  {
    id: "frontal-glue",
    name: "Frontal Glue Extreme",
    description: "Water-resistant active wear glue for securing frontals and closures with long-lasting holds.",
    category: "installation",
    price: 12000,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "lace-tint",
    name: "Lace Tint Spray",
    description: "Precision tinted spray to blend lace seamlessly with your natural skin tone. Available in multiple tones.",
    category: "installation",
    price: 5500,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "lace-tint-mousse",
    name: "Lace Tint Mousse",
    description: "Aerated foam texture lace tint for even, controlled applications during installation setups.",
    category: "installation",
    price: 6500,
    image: "https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "adhesive-bond-butterfly",
    name: "Butterfly Shadow Adhesive Bond",
    description: "Premium lace adhesive bond providing secure skin placement with non-toxic, gentle removal formulas.",
    category: "installation",
    price: 8000,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "adhesive-bond-g2b",
    name: "Got2b Glued Adhesive Bond",
    description: "Iconic styling glue for setting lace frontals, offering extreme hold and high reliability.",
    category: "installation",
    price: 8500,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "adhesive-bond-foisten",
    name: "Foisten Lace Adhesive",
    description: "Sweat-resistant, high-bond lace adhesive tailored for hot, humid tropical climates.",
    category: "installation",
    price: 7500,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "adhesive-bond-lovebeauty",
    name: "Love Beauty Lace Bond",
    description: "Gentle skin adhesive designed specifically for sensitive scalps, holding firm without irritation.",
    category: "installation",
    price: 9000,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "melting-spray",
    name: "Lace Melting Spray",
    description: "Quick drying aerosol spray to melt lace frontals seamlessly into the skin for a flawless, invisible hairline.",
    category: "installation",
    price: 6000,
    image: "https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "frontal-remover",
    name: "Fast Frontal Lace Remover",
    description: "Active solvent that quickly dissolves adhesive bonds on skin and frontals, protecting edges from traction.",
    category: "installation",
    price: 5500,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "gorilla-gel",
    name: "Gorilla Styling Gel",
    description: "Maximum stronghold styling gel for molding sleek baby hairs and securing complex hair wraps.",
    category: "installation",
    price: 5000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGoBrMGBO2goKCnJrwuJc0wgWVlhMAG_bJ6jPnjIWyAcsfEbpaIbZqnclyOMqJ-fHVW7ZHyXTCP7ilfYAFX5zOoAu_DzbK-BaH2BkAejO9mnNrCJ-dycV49urZB51EavRMlbFpmU7mIhVDD0QQFd9SterREhKSA0gtkKYRaroTbPAoKqPCxM5e6fR1jU7R4q0duvQ4OtCjy7q4G2keJ2dvVAgl9OaNMGhsrJqv5OZqUqYOVi6Y3btM-Q",
    isBestseller: true
  },
  {
    id: "edge-control",
    name: "Good Edge Control",
    description: "Premium pomade designed for high-hold edge styling, keeping baby hairs laid all day with no white flakes.",
    category: "installation",
    price: 4000,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },

  // --- Salon Equipment ---
  {
    id: "straightener",
    name: "Titanium Hair Straightener",
    description: "Professional titanium flat iron with digital heating controls. Straightens human hair wigs to bone-straight perfection.",
    category: "equipment",
    price: 35000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCkX1rpzA6C3LKFMa-byh8Fs0ObLsD3leTmYbJcgHKSn2Bo15iDD2WbPGCUo3DuDw0kKKjS0fHsQhzIX--VxeZ28syWsou9-mUMut-1u9Ke5gHUpPrWhjz_72DsibWlkFIAF8kzR1jXFdQHD94Anl3rfQ8il8Sv6EY8QiQo7BBVLB46e2qFuaunoshDMjYarizTMWlchBA3RxTzdj3KOGCAsCogkKzNMQrCEoaskqt0jclIHa_Rw_1kA",
    isBestseller: true
  },
  {
    id: "curler",
    name: "Wand Curler Set",
    description: "Interchangeable wand curler barrels of different sizes for creating beautiful editorial curls and waves.",
    category: "equipment",
    price: 28000,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "hot-comb",
    name: "Electric Hot Press Comb",
    description: "High-heat copper comb to flatten wig crowns, roots, and secure flat parts during styling.",
    category: "equipment",
    price: 15000,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "hand-dryer",
    name: "Turbo Professional Hand Dryer",
    description: "Sleek matte design blow dryer with ionic tech, cool shot buttons, and multiple speed settings.",
    category: "equipment",
    price: 25000,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "trimmer",
    name: "Professional Detail Trimmer",
    description: "Close-cutting cordless liners for precise hair designs and trimming natural hairlines before installs.",
    category: "equipment",
    price: 18000,
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },

  // --- Accessories ---
  {
    id: "weavon-brush",
    name: "Weavon Detangling Brush",
    description: "Paddle detangler that glides smoothly through human hair weavons and wigs without snagging.",
    category: "accessories",
    price: 3500,
    image: "https://images.unsplash.com/photo-1590156546746-c58a8a4a2a1d?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "handheld-fan",
    name: "High-Speed Handheld Fan",
    description: "High velocity rechargeable mini fan. Perfect for quick glue drying during frontal installations.",
    category: "accessories",
    price: 8500,
    image: "https://images.unsplash.com/photo-1618944847828-82e943c3dba7?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "hair-clips",
    name: "Professional Hair Clips (Pack of 12)",
    description: "Heavy-duty sectioning clips to partition wig sections easily during ironing, styling, and dyeing.",
    category: "accessories",
    price: 2500,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "styling-combs",
    name: "Styling Combs Set (Multiple sizes)",
    description: "Carbon fiber anti-static comb kit, including rat tail combs, wide-tooth combs, and teasing combs.",
    category: "accessories",
    price: 3000,
    image: "https://images.unsplash.com/photo-1590156546746-c58a8a4a2a1d?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "cotton-pads",
    name: "Cotton Pads Set (100pcs)",
    description: "Pure cotton round pads for rubbing alcohol skin preparation or applying adhesive removers.",
    category: "accessories",
    price: 1500,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "velcro-rollers",
    name: "Velcro Rollers Set (18pcs)",
    description: "Self-grip hair rollers to add extreme volume and bounce to wig crowns without heat styling.",
    category: "accessories",
    price: 5000,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "hair-bands",
    name: "Wig Melting Bands (Pack of 3)",
    description: "Elastic velcro bands to lay edges down and set glue securely post frontal installations.",
    category: "accessories",
    price: 2000,
    image: "https://images.unsplash.com/photo-1576243347883-a721a4e628e7?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "leave-in-shampoo-brand",
    name: "Hawaiian Silky Leave-In & Shampoo",
    description: "Nourishing shampoo and leave-in conditioner collection (V05, Elan, Hawaiian Silky) for hair health.",
    category: "accessories",
    price: 9500,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "dye-cup",
    name: "Dye Cup & Brush Set",
    description: "Measurement bowl and dye brush for mixing bleach powders, dyes, and custom hair color developers.",
    category: "accessories",
    price: 3500,
    image: "https://images.unsplash.com/photo-1599751449128-db724913d6b1?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  },
  {
    id: "travel-set",
    name: "Travel-Size Bottle Set",
    description: "Compact travel containers to fill with your essential wig serums, hair mousses, and removers.",
    category: "accessories",
    price: 12000,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=600&auto=format&fit=crop",
    isBestseller: false
  }
];

// Application State Management
let cart = [];
let currentCategory = "all";
let searchQuery = "";
let selectedProduct = null;

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initPageLoader();
  initTheme();
  renderProducts();
  setupEventListeners();
  initDrawers();
  initLenisSmoothScroll();
  initScrollReveal();
  initCardGradients();
  initNavScrollEffect();
  initParallax();
  initMagneticButtons();
  initTiltCards();
  initAnimatedCounters();
});

// === PAGE ENTRANCE LOADER ===
function initPageLoader() {
  const loader = document.getElementById("page-loader");
  if (!loader) return;

  // Fade out after a brief loading period
  setTimeout(() => {
    loader.classList.add("loaded");
  }, 600);

  // Remove from DOM after transition
  loader.addEventListener("transitionend", () => {
    loader.remove();
  });
}

// === THEME MANAGEMENT ===
function initTheme() {
  const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");
  const currentTheme = localStorage.getItem("theme") || 
                       (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  
  applyTheme(currentTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.contains("dark");
      const nextTheme = isDark ? "light" : "dark";
      
      // Temporarily add smooth transition class to all elements during swap
      document.documentElement.classList.add("theme-transitioning");
      
      applyTheme(nextTheme);
      
      // Remove class after style transition finishes
      setTimeout(() => {
        document.documentElement.classList.remove("theme-transitioning");
      }, 500);
    });
  });
}

function applyTheme(theme) {
  const themeToggleIcons = document.querySelectorAll(".theme-toggle-icon");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    themeToggleIcons.forEach(icon => icon.textContent = "light_mode");
  } else {
    document.documentElement.classList.remove("dark");
    themeToggleIcons.forEach(icon => icon.textContent = "dark_mode");
  }
  localStorage.setItem("theme", theme);
}

// === NAVBAR SCROLL SHRINK EFFECT ===
function initNavScrollEffect() {
  const nav = document.getElementById("main-nav");
  if (!nav) return;

  let lastScroll = 0;
  const scrollThreshold = 60;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > scrollThreshold) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

// === PARALLAX AMBIENT LIGHTS ===
function initParallax() {
  const parallaxEls = document.querySelectorAll("[data-parallax]");
  if (parallaxEls.length === 0) return;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.03;
      const yOffset = scrollY * speed;
      const xOffset = Math.sin(scrollY * 0.002) * 20 * speed * 10;
      el.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
  }, { passive: true });
}

// === MAGNETIC BUTTON EFFECT ===
function initMagneticButtons() {
  const buttons = document.querySelectorAll(".magnetic-btn");
  
  buttons.forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0, 0)";
    });
  });
}

// === 3D TILT CARD EFFECT ===
function initTiltCards() {
  const cards = document.querySelectorAll(".tilt-card");
  
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      const tiltX = (y - 0.5) * 8;  // max 4 deg
      const tiltY = (x - 0.5) * -8; // max 4 deg
      
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
      card.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
      setTimeout(() => { card.style.transition = ""; }, 500);
    });

    card.addEventListener("mouseenter", () => {
      card.style.transition = "none";
    });
  });
}

// === ANIMATED COUNTERS ===
function initAnimatedCounters() {
  const counters = document.querySelectorAll(".counter-value");
  if (counters.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || "";
        animateCounter(el, target, suffix);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el, target, suffix) {
  const duration = 2000;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    
    el.textContent = current + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

// === DRAWERS (Scroll Snap Lifecycle) ===
function initDrawers() {
  // Left Drawer (Menu)
  setupScrollSnapDrawer("menu-drawer", "drawer-open-btn", "drawer-close-btn", "left");
  // Right Drawer (Cart)
  setupScrollSnapDrawer("cart-drawer", "cart-open-btn", "cart-close-btn", "right");
}

function setupScrollSnapDrawer(drawerId, openBtnId, closeBtnId, direction) {
  const drawer = document.getElementById(drawerId);
  const scroller = drawer.querySelector(".drawer-scroller");
  const sheet = drawer.querySelector(".drawer-sheet");
  const openBtns = document.querySelectorAll(`.${openBtnId}, #${openBtnId}`);
  const closeBtns = document.querySelectorAll(`.${closeBtnId}, #${closeBtnId}`);

  // Opening
  const openDrawer = () => {
    drawer.showPopover();
    
    // Fallback if scroll-initial-target is unsupported
    if (!CSS.supports('scroll-initial-target', 'nearest')) {
      if (direction === "left") {
        scroller.scrollTo({ left: sheet.offsetWidth, behavior: "instant" });
      } else {
        scroller.scrollTo({ left: 0, behavior: "instant" });
      }
      // Wait two frames before scrolling open
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scroller.scrollTo({
            left: direction === "left" ? 0 : scroller.scrollWidth - scroller.clientWidth,
            behavior: "smooth"
          });
        });
      });
    } else {
      // Browser supports scroll-initial-target
      scroller.scrollTo({
        left: direction === "left" ? 0 : scroller.scrollWidth - scroller.clientWidth,
        behavior: "smooth"
      });
    }
  };

  // Closing
  const closeDrawer = () => {
    scroller.scrollTo({
      left: direction === "left" ? scroller.scrollWidth - scroller.clientWidth : 0,
      behavior: "smooth"
    });
  };

  openBtns.forEach(btn => btn.addEventListener("click", openDrawer));
  closeBtns.forEach(btn => btn.addEventListener("click", closeDrawer));

  // Light dismiss on backdrop tap
  drawer.addEventListener("click", (e) => {
    if (!sheet.contains(e.target)) {
      closeDrawer();
    }
  });

  // Esc key dismiss
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.matches(":popover-open")) {
      closeDrawer();
    }
  });

  // IntersectionObserver to detect when it's closed and hide popover
  const thresholdVal = 1 / window.innerWidth;
  const observer = new IntersectionObserver((entries) => {
    const entry = entries.at(-1);
    
    // Fully Closed
    if (entry.intersectionRatio < thresholdVal) {
      drawer.hidePopover();
      document.body.style.overflow = ""; // restore scrolling
      if (direction === "left") {
        document.getElementById("drawer-open-btn")?.setAttribute("aria-expanded", "false");
      }
    }
    // Fully Open
    if (entry.intersectionRatio === 1) {
      document.body.style.overflow = "hidden"; // lock bg scroll
      sheet.focus();
      if (direction === "left") {
        document.getElementById("drawer-open-btn")?.setAttribute("aria-expanded", "true");
      }
    }
  }, {
    root: drawer,
    threshold: [thresholdVal, 1]
  });

  observer.observe(sheet);

  // Fallback for scroll driven animation backdrop opacity in Firefox
  if (!CSS.supports('animation-timeline: scroll()')) {
    scroller.addEventListener("scroll", () => {
      let ratio = 0;
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      if (maxScroll > 0) {
        if (direction === "left") {
          ratio = 1 - (scroller.scrollLeft / maxScroll);
        } else {
          ratio = scroller.scrollLeft / maxScroll;
        }
      }
      drawer.style.setProperty("--drawer-backdrop", ratio);
    });
  }
}

// === DYNAMIC CATALOG RENDERING ===
function renderProducts() {
  const productGrid = document.getElementById("product-grid");
  if (!productGrid) return;

  const filtered = PRODUCTS.filter(prod => {
    const matchCat = currentCategory === "all" || prod.category === currentCategory;
    const matchSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        prod.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <span class="material-symbols-outlined text-outline text-5xl mb-4">search_off</span>
        <h3 class="text-headline-md text-primary dark:text-on-primary-container font-display-lg mb-2">No Products Found</h3>
        <p class="text-on-surface-variant text-body-md">Try adjusting your filters or search query.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filtered.map((prod, index) => {
    const formattedPrice = `₦${prod.price.toLocaleString()}`;
    const staggerDelay = Math.min(index * 60, 400); // Cap at 400ms
    return `
      <div class="group flex flex-col bg-surface-container-lowest dark:bg-surface-dark rounded-xl border border-secondary/10 dark:border-outline/10 overflow-hidden shadow-sm hover:shadow-[0_10px_30px_rgba(6,78,59,0.08)] transition-all duration-300 hover-lift hover-glow cursor-pointer aceternity-card reveal-item" style="--reveal-delay: ${staggerDelay}ms" onclick="openProductDetail('${prod.id}')">
        <div class="aceternity-border"></div>
        <div class="relative aspect-square overflow-hidden bg-surface-container dark:bg-surface-container-dark flex items-center justify-center p-8">
          <img class="product-card-image w-full h-full object-cover rounded" src="${prod.image}" alt="${prod.name}" loading="lazy">
          ${prod.isBestseller ? `
            <div class="absolute top-4 left-4 bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container text-xs font-label-sm uppercase px-3 py-1 rounded-sm tracking-wider">Bestseller</div>
          ` : ''}
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <span class="font-label-sm text-secondary dark:text-secondary-fixed text-xs uppercase tracking-wider mb-2">${getCategoryName(prod.category)}</span>
          <h4 class="font-headline-md text-[18px] text-primary dark:text-on-primary-container mb-2 line-clamp-1 group-hover:text-secondary transition-colors">${prod.name}</h4>
          <p class="font-body-md text-sm text-on-surface-variant line-clamp-2 mb-4 flex-grow">${prod.description}</p>
          <div class="flex justify-between items-center mt-auto pt-4 border-t border-outline-variant/20 dark:border-outline/10" onclick="event.stopPropagation()">
            <span class="font-display-lg text-[18px] font-bold text-secondary dark:text-secondary-fixed-dim">${formattedPrice}</span>
            <button class="text-primary dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-transform duration-200 hover:scale-110 p-2 bg-secondary/10 dark:bg-outline-variant/10 rounded-full" onclick="handleAddToCart('${prod.id}')">
              <span class="material-symbols-outlined text-[20px]">add_shopping_cart</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Re-observe scroll reveal nodes
  initScrollReveal();
}

function getCategoryName(cat) {
  switch (cat) {
    case "revamp": return "Wig Revamp";
    case "installation": return "Frontal Installation";
    case "equipment": return "Salon Equipment";
    case "accessories": return "Accessories & Haircare";
    default: return "Product";
  }
}

// === PRODUCT DETAIL MODAL ===
window.openProductDetail = function(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  selectedProduct = prod;
  
  const dialog = document.getElementById("product-detail-modal");
  document.getElementById("modal-prod-img").src = prod.image;
  document.getElementById("modal-prod-img").alt = prod.name;
  document.getElementById("modal-prod-category").textContent = getCategoryName(prod.category);
  document.getElementById("modal-prod-name").textContent = prod.name;
  document.getElementById("modal-prod-desc").textContent = prod.description;
  document.getElementById("modal-prod-price").textContent = `₦${prod.price.toLocaleString()}`;
  
  // Set Bestseller badge visibility
  const badge = document.getElementById("modal-prod-bestseller");
  if (prod.isBestseller) {
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }

  dialog.showModal();
};

window.closeProductDetail = function() {
  document.getElementById("product-detail-modal").close();
  selectedProduct = null;
};

// Handle Inquire Product direct WhatsApp
window.inquireSelectedProduct = function() {
  if (!selectedProduct) return;
  const message = `Hello Specta! I am inquiring about the product: ${selectedProduct.name} (₦${selectedProduct.price.toLocaleString()}). Is it currently available for delivery?`;
  const url = `https://wa.me/2349121797174?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

window.addSelectedToCart = function() {
  if (!selectedProduct) return;
  handleAddToCart(selectedProduct.id);
  closeProductDetail();
};

// === SHOPPING CART MANAGEMENT ===
window.handleAddToCart = function(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const existing = cart.find(item => item.product.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ product: prod, quantity: 1 });
  }

  updateCartUI();
  showToast(`Added "${prod.name}" to cart!`);
};

function handleRemoveFromCart(productId) {
  cart = cart.filter(item => item.product.id !== productId);
  updateCartUI();
}

function handleUpdateQuantity(productId, change) {
  const item = cart.find(it => it.product.id === productId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    handleRemoveFromCart(productId);
  } else {
    updateCartUI();
  }
}

function updateCartUI() {
  // Update badges
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartBadges = document.querySelectorAll(".cart-count-badge");
  cartBadges.forEach(badge => {
    badge.textContent = totalCount;
    if (totalCount > 0) {
      badge.classList.remove("hidden");
    } else {
      badge.classList.add("hidden");
    }
  });

  const cartList = document.getElementById("cart-items-list");
  const cartSubtotalEl = document.getElementById("cart-subtotal");
  const cartCheckoutBtn = document.getElementById("cart-checkout-btn");

  if (!cartList) return;

  if (cart.length === 0) {
    cartList.innerHTML = `
      <div class="flex flex-col items-center justify-center h-64 text-center p-6">
        <span class="material-symbols-outlined text-outline text-5xl mb-4">shopping_bag</span>
        <h4 class="text-headline-md font-display-lg text-primary dark:text-on-primary-container mb-1">Your bag is empty</h4>
        <p class="text-sm text-on-surface-variant max-w-xs">Add products from our collection to place an inquiry order.</p>
      </div>
    `;
    cartSubtotalEl.textContent = "₦0";
    cartCheckoutBtn.disabled = true;
    cartCheckoutBtn.classList.add("opacity-50", "cursor-not-allowed");
    return;
  }

  cartCheckoutBtn.disabled = false;
  cartCheckoutBtn.classList.remove("opacity-50", "cursor-not-allowed");

  let subtotal = 0;
  cartList.innerHTML = cart.map(item => {
    const itemTotal = item.product.price * item.quantity;
    subtotal += itemTotal;

    return `
      <div class="flex items-center gap-4 py-4 border-b border-outline-variant/20 dark:border-outline/10">
        <img class="w-16 h-16 object-cover rounded bg-surface-container-low dark:bg-surface-container-dark border border-outline-variant/20 dark:border-outline/10" src="${item.product.image}" alt="${item.product.name}">
        <div class="flex-grow">
          <h5 class="font-headline-md text-[15px] text-primary dark:text-on-primary-container leading-snug line-clamp-1">${item.product.name}</h5>
          <span class="text-sm font-bold text-secondary dark:text-secondary-fixed-dim block mt-0.5">₦${item.product.price.toLocaleString()}</span>
          <div class="flex items-center gap-2 mt-2">
            <button class="w-6 h-6 flex items-center justify-center bg-surface-container dark:bg-surface-container-dark text-on-surface hover:bg-secondary/15 dark:hover:bg-outline-variant/20 rounded text-sm transition-colors" onclick="updateItemQty('${item.product.id}', -1)">-</button>
            <span class="text-sm font-semibold w-6 text-center">${item.quantity}</span>
            <button class="w-6 h-6 flex items-center justify-center bg-surface-container dark:bg-surface-container-dark text-on-surface hover:bg-secondary/15 dark:hover:bg-outline-variant/20 rounded text-sm transition-colors" onclick="updateItemQty('${item.product.id}', 1)">+</button>
          </div>
        </div>
        <div class="text-right flex flex-col justify-between items-end h-16">
          <button class="text-on-surface-variant hover:text-error transition-colors p-1" onclick="removeItemFromCart('${item.product.id}')">
            <span class="material-symbols-outlined text-[18px]">delete</span>
          </button>
          <span class="text-sm font-semibold text-primary dark:text-on-primary-container">₦${itemTotal.toLocaleString()}</span>
        </div>
      </div>
    `;
  }).join('');

  cartSubtotalEl.textContent = `₦${subtotal.toLocaleString()}`;
}

// Global hooks for cart buttons inside elements
window.updateItemQty = function(id, change) {
  handleUpdateQuantity(id, change);
};
window.removeItemFromCart = function(id) {
  handleRemoveFromCart(id);
  showToast("Removed product from bag.");
};

// WhatsApp Order Placement
window.checkoutCart = function() {
  if (cart.length === 0) return;
  
  let message = `Hello Specta! I would like to order the following products from SpectaVit Beauty Hub:\n\n`;
  let subtotal = 0;
  cart.forEach(item => {
    const totalItemPrice = item.product.price * item.quantity;
    subtotal += totalItemPrice;
    message += `🛍️ *${item.product.name}* x${item.quantity}\n`;
    message += `   Price: ₦${item.product.price.toLocaleString()} (Subtotal: ₦${totalItemPrice.toLocaleString()})\n\n`;
  });
  
  message += `━━━━━━━━━━━━━━━━━━━\n`;
  message += `⭐ *Grand Total: ₦${subtotal.toLocaleString()}*\n\n`;
  message += `Please confirm my order and let me know the payment details and delivery logistics. Thank you!`;

  const url = `https://wa.me/2349121797174?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
  
  // Clear cart
  cart = [];
  updateCartUI();
  
  // Close Cart Drawer
  const drawer = document.getElementById("cart-drawer");
  const scroller = drawer.querySelector(".drawer-scroller");
  scroller.scrollTo({ left: 0, behavior: "smooth" });
  
  showToast("Order initiated! Redirecting to WhatsApp concierge...");
};

// === SERVICE BOOKINGS FORM ===
window.openBookingModal = function(serviceType = "") {
  const dialog = document.getElementById("booking-modal");
  const serviceSelect = document.getElementById("booking-service");
  
  if (serviceType && serviceSelect) {
    // Select specific option
    for (let option of serviceSelect.options) {
      if (option.value.includes(serviceType.toLowerCase())) {
        serviceSelect.value = option.value;
        break;
      }
    }
  }
  dialog.showModal();
};

window.closeBookingModal = function() {
  document.getElementById("booking-modal").close();
};

window.submitBookingForm = function(event) {
  event.preventDefault();
  
  const form = document.getElementById("booking-form");
  const name = document.getElementById("booking-name").value;
  const phone = document.getElementById("booking-phone").value;
  const service = document.getElementById("booking-service").value;
  const date = document.getElementById("booking-date").value;
  const time = document.getElementById("booking-time").value;
  const notes = document.getElementById("booking-notes").value;
  
  const message = `Hello Specta! I want to book a professional beauty service at SpectaVit Beauty Hub:\n\n` +
                  `👤 *Client Name:* ${name}\n` +
                  `📞 *Phone Number:* ${phone}\n` +
                  `✂️ *Service Requested:* ${service}\n` +
                  `📅 *Date:* ${date}\n` +
                  `⏰ *Time:* ${time}\n` +
                  `📝 *Additional Details:* ${notes ? notes : "None"}\n\n` +
                  `Please confirm if this slot is available and let me know about the setup details. Thank you!`;
                  
  const url = `https://wa.me/2349121797174?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
  
  // Close form & reset
  closeBookingModal();
  form.reset();
  
  showToast("Booking request sent! Redirecting to WhatsApp concierge...");
};

// === SEARCH & FILTERS ===
function setupEventListeners() {
  const searchInput = document.getElementById("catalog-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Filter category buttons
  const catBtns = document.querySelectorAll(".cat-filter-btn");
  catBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      catBtns.forEach(b => b.classList.remove("bg-secondary", "text-on-secondary", "dark:bg-secondary-fixed", "dark:text-on-secondary-fixed"));
      catBtns.forEach(b => b.classList.add("bg-surface-container", "text-on-surface", "dark:bg-surface-container-dark", "dark:text-on-surface"));
      
      btn.classList.remove("bg-surface-container", "text-on-surface", "dark:bg-surface-container-dark", "dark:text-on-surface");
      btn.classList.add("bg-secondary", "text-on-secondary", "dark:bg-secondary-fixed", "dark:text-on-secondary-fixed");
      
      currentCategory = btn.getAttribute("data-category");
      renderProducts();
    });
  });
  
  // Mobile Nav Category redirection links
  const mobileCatLinks = document.querySelectorAll(".mobile-cat-link");
  mobileCatLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      // Close left drawer first
      const drawer = document.getElementById("menu-drawer");
      const scroller = drawer.querySelector(".drawer-scroller");
      scroller.scrollTo({ left: scroller.scrollWidth - scroller.clientWidth, behavior: "smooth" });
      
      const targetCat = link.getAttribute("data-category");
      
      // Select appropriate filter button
      const filterBtn = document.querySelector(`.cat-filter-btn[data-category="${targetCat}"]`);
      if (filterBtn) {
        filterBtn.click();
      }
      
      // Scroll smoothly to catalog
      document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// === TOAST SYSTEM ===
function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="material-symbols-outlined text-secondary dark:text-secondary-fixed-dim" style="font-variation-settings: 'FILL' 1;">check_circle</span>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  // Animate Entry
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });
  
  // Animate Exit
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

// === PREMIUM ANIMATION FEATURES ===

// Lenis Smooth Scroll
function initLenisSmoothScroll() {
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
}

// Staggered Scroll Reveal with IntersectionObserver
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-item:not(.revealed), .reveal-fade:not(.revealed)");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.05,
    rootMargin: "0px 0px -30px 0px"
  });

  revealElements.forEach(el => observer.observe(el));
}

// Aceternity Cursor Tracking Card Gradients
function initCardGradients() {
  document.addEventListener("mousemove", (e) => {
    const card = e.target.closest(".aceternity-card");
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
}
