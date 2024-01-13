const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 190) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

/*********************************************************************************** */

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

function openNav() {
  document.getElementById("side-panel").style.transform = "translateX(0)";
  document.getElementById("nav-list").style.transform = "translateX(0)";
  var className = document.getElementsByClassName("nav-item");
  for (var index = 0; index < className.length; index++) {
    className[index].style.transform = "translateX(0)";
  }
}
function closeNav() {
  document.getElementById("side-panel").style.transform = "translateX(-100%)";
  document.getElementById("nav-list").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-home").style.transform = "translateX(-100%)";
  document.getElementById("sub-home").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-shop").style.transform = "translateX(-100%)";
  document.getElementById("sub-shop").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-shop-layout").style.transform = "translateX(-100%)";
  document.getElementById("secondary-sub-shop-layout").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-shop-page").style.transform = "translateX(-100%)";
  document.getElementById("secondary-sub-shop-page").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-product").style.transform = "translateX(-100%)";
  document.getElementById("sub-product").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-product-1").style.transform = "translateX(-100%)";
  document.getElementById("secondary-sub-product-1").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-product-2").style.transform = "translateX(-100%)";
  document.getElementById("secondary-sub-product-2").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-product-3").style.transform = "translateX(-100%)";
  document.getElementById("secondary-sub-product-3").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-product-4").style.transform = "translateX(-100%)";
  document.getElementById("secondary-sub-product-4").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-product-5").style.transform = "translateX(-100%)";
  document.getElementById("secondary-sub-product-5").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-product-6").style.transform = "translateX(-100%)";
  document.getElementById("secondary-sub-product-6").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-page").style.transform = "translateX(-100%)";
  document.getElementById("sub-page").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-blog").style.transform = "translateX(-100%)";
  document.getElementById("sub-blog").style.transform = "translateX(-100%)";
  document.getElementById("overLay").style.visibility = "hidden";
  document.getElementById("overLay").style.opacity = "0";
}

function openSubNavHome() {
  document.getElementById("sub-nav-home").style.transform = "translateX(0)";
  document.getElementById("sub-nav-home").style.display = "fixed";
  document.getElementById("sub-home").style.transform = "translateX(0)";
  document.querySelector(".all-sub-nav").style.opacity = "1";
  document.querySelector(".all-sub-nav").style.visibility = "visible";
}

function openSubNavShop() {
  document.getElementById("sub-nav-shop").style.transform = "translateX(0)";
  document.getElementById("sub-nav-shop").style.display = "fixed";
  document.getElementById("sub-shop").style.transform = "translateX(0)";
  document.querySelector(".all-sub-nav").style.opacity = "1";
  document.querySelector(".all-sub-nav").style.visibility = "visible";
}

function openSubNavShopLayout() {
  document.getElementById("sub-nav-shop-layout").style.transform = "translateX(0)";
  document.getElementById("sub-nav-shop-layout").style.display = "fixed";
  document.getElementById("secondary-sub-shop-layout").style.transform = "translateX(0)";
  document.querySelector(".all-sub-nav").style.opacity = "1";
  document.querySelector(".all-sub-nav").style.visibility = "visible";
}

function openSubNavShopPage() {
  document.getElementById("sub-nav-shop-page").style.transform = "translateX(0)";
  document.getElementById("sub-nav-shop-page").style.display = "fixed";
  document.getElementById("secondary-sub-shop-page").style.transform = "translateX(0)";
  document.querySelector(".all-sub-nav").style.opacity = "1";
  document.querySelector(".all-sub-nav").style.visibility = "visible";
}

function openSubNavProduct() {
  document.getElementById("sub-nav-product").style.transform = "translateX(0)";
  document.getElementById("sub-product").style.transform = "translateX(0)";
  document.querySelector(".all-sub-nav").style.opacity = "1";
  document.querySelector(".all-sub-nav").style.visibility = "visible";
  var className = document.getElementsByClassName("register-product");
  className[0].style.transform = "translateX(0)";
}

function openSecondarySubNavProduct1() {
  document.getElementById("sub-nav-product-1").style.transform = "translateX(0)";
  document.getElementById("sub-nav-product-1").style.display = "fixed";
  document.getElementById("secondary-sub-product-1").style.transform = "translateX(0)";
  document.querySelector(".all-sub-nav").style.opacity = "1";
  document.querySelector(".all-sub-nav").style.visibility = "visible";
}

function openSecondarySubNavProduct2() {
  document.getElementById("sub-nav-product-2").style.transform = "translateX(0)";
  document.getElementById("sub-nav-product-2").style.display = "fixed";
  document.getElementById("secondary-sub-product-2").style.transform = "translateX(0)";
  document.querySelector(".all-sub-nav").style.opacity = "1";
  document.querySelector(".all-sub-nav").style.visibility = "visible";
}

function openSecondarySubNavProduct3() {
  document.getElementById("sub-nav-product-3").style.transform = "translateX(0)";
  document.getElementById("sub-nav-product-3").style.display = "fixed";
  document.getElementById("secondary-sub-product-3").style.transform = "translateX(0)";
  document.querySelector(".all-sub-nav").style.opacity = "1";
  document.querySelector(".all-sub-nav").style.visibility = "visible";
}

function openSecondarySubNavProduct4() {
  document.getElementById("sub-nav-product-4").style.transform = "translateX(0)";
  document.getElementById("sub-nav-product-4").style.display = "fixed";
  document.getElementById("secondary-sub-product-4").style.transform = "translateX(0)";
  document.querySelector(".all-sub-nav").style.opacity = "1";
  document.querySelector(".all-sub-nav").style.visibility = "visible";
}

function openSecondarySubNavProduct5() {
  document.getElementById("sub-nav-product-5").style.transform = "translateX(0)";
  document.getElementById("sub-nav-product-5").style.display = "fixed";
  document.getElementById("secondary-sub-product-5").style.transform = "translateX(0)";
  document.querySelector(".all-sub-nav").style.opacity = "1";
  document.querySelector(".all-sub-nav").style.visibility = "visible";
}

function openSecondarySubNavProduct6() {
  document.getElementById("sub-nav-product-6").style.transform = "translateX(0)";
  document.getElementById("sub-nav-product-6").style.display = "fixed";
  document.getElementById("secondary-sub-product-6").style.transform = "translateX(0)";
  document.querySelector(".all-sub-nav").style.opacity = "1";
  document.querySelector(".all-sub-nav").style.visibility = "visible";
}

function openSubNavPage() {
  document.getElementById("sub-nav-page").style.transform = "translateX(0)";
  document.getElementById("sub-page").style.transform = "translateX(0)";
  document.querySelector(".all-sub-nav").style.opacity = "1";
  document.querySelector(".all-sub-nav").style.visibility = "visible";
  var className = document.getElementsByClassName("register-page");
  className[0].style.transform = "translateX(0)";
}

function openSubNavBlog() {
  document.getElementById("sub-nav-blog").style.transform = "translateX(0)";
  document.getElementById("sub-blog").style.transform = "translateX(0)";
  document.querySelector(".all-sub-nav").style.opacity = "1";
  document.querySelector(".all-sub-nav").style.visibility = "visible";
  var className = document.getElementsByClassName("register-blog");
  className[0].style.transform = "translateX(0)";
}

function openSearch() {
  document.getElementById("search-tab").style.visibility = "visible";
  document.getElementById("search-tab").style.opacity = "1";
  document.getElementById("overLay").style.visibility = "visible";
  document.getElementById("overLay").style.opacity = "1";
}

function closeSearch() {
  document.getElementById("search-tab").style.visibility = "hidden";
  document.getElementById("search-tab").style.opacity = "0";
  document.getElementById("searchOverlay").style.visibility = "hidden";
  document.getElementById("searchOverlay").style.opacity = "0";
}

function goBack() {
  document.getElementById("sub-nav-home").style.transform = "translateX(-100%)";
  document.getElementById("sub-home").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-shop").style.transform = "translateX(-100%)";
  document.getElementById("sub-shop").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-product").style.transform = "translateX(-100%)";
  document.getElementById("sub-product").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-page").style.transform = "translateX(-100%)";
  document.getElementById("sub-page").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-blog").style.transform = "translateX(-100%)";
  document.getElementById("sub-blog").style.transform = "translateX(-100%)";
}

function goBackSecondary() {
  document.getElementById("sub-nav-shop-layout").style.transform = "translateX(-100%)";
  document.getElementById("secondary-sub-shop-layout").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-shop-page").style.transform = "translateX(-100%)";
  document.getElementById("secondary-sub-shop-page").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-product-1").style.transform = "translateX(-100%)";
  document.getElementById("secondary-sub-product-1").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-product-2").style.transform = "translateX(-100%)";
  document.getElementById("secondary-sub-product-2").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-product-3").style.transform = "translateX(-100%)";
  document.getElementById("secondary-sub-product-3").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-product-4").style.transform = "translateX(-100%)";
  document.getElementById("secondary-sub-product-4").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-product-5").style.transform = "translateX(-100%)";
  document.getElementById("secondary-sub-product-5").style.transform = "translateX(-100%)";
  document.getElementById("sub-nav-product-6").style.transform = "translateX(-100%)";
  document.getElementById("secondary-sub-product-6").style.transform = "translateX(-100%)";
}

function on() {
  document.getElementById("menuOverlay").style.visibility = "visible";
  document.getElementById("menuOverlay").style.opacity = "1";
}

function off() {
  document.getElementById("menuOverlay").style.visibility = "hidden";
  document.getElementById("menuOverlay").style.opacity = "0";
}

function disableScroll() {
  scrollTop = window.scrollY || document.documentElement.scrollTop;
  (scrollLeft = window.scrollX || document.documentElement.scrollLeft),
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}

/********************************************************************************* */

const days = document.querySelectorAll("days");
const hours = document.querySelectorAll("hours");
const minutes = document.querySelectorAll("minutes");
const seconds = document.querySelectorAll("seconds");

const currentYear = new Date().getFullYear();

const newYearTime = new Date("Dec 31, 2024 00:00:00").getTime();

function updateCountdown() {
  const currentTime = new Date().getTime();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = d;
  document.getElementById("hours").innerHTML = h < 10 ? "0" + h : h;
  document.getElementById("minutes").innerHTML = m < 10 ? "0" + m : m;
  document.getElementById("seconds").innerHTML = s < 10 ? "0" + s : s;
}

setInterval(updateCountdown, 1000);

/*********************************************************** */

const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("click", function () {
  if ((background1.style.visibility === "hidden") & (background1.style.opacity === "0")) {
    background1.style.visibility = "visible";
    background1.style.opacity = "1";
  }
});

function addOutsideClickListener(parent, component, background, closeComponent) {
  document.addEventListener("click", function (event) {
    const isClickInsideComponent = parent.contains(event.target) || event.target === parent;

    const computedStyles = getComputedStyle(component);
    const visibility = computedStyles.getPropertyValue("visibility");

    if (visibility === "visible" && !isClickInsideComponent) {
      closeComponent(component, background);
    }
  });
}

function closeComponent(component, background) {
  component.style.visibility = "hidden";
  component.style.opacity = "0";
  background.style.visibility = "hidden";
  background.style.opacity = "0";
}

function openComponent(background) {
  background.style.visibility = "visible";
  background.style.opacity = "1";
}

const parent1 = document.getElementById("header-bar");
const component1 = document.getElementById("search-tab");
const background1 = document.getElementById("searchOverlay");

addOutsideClickListener(parent1, component1, background1, closeComponent);

const toggle = document.getElementById("toggle");
const sidePanel = document.getElementById("side-panel");
const menuOverlay = document.getElementById("menuOverlay");
const navItems = document.querySelectorAll(".nav-item");

menuOverlay.addEventListener("click", function (event) {
  console.log(toggle.checked);
  if (event.target === menuOverlay) {
    sidePanel.style.transform = "translateX(-100%)";
    menuOverlay.style.opacity = "0";
    menuOverlay.style.visibility = "hidden";
    toggle.checked = false;
  }
});

toggle.addEventListener("click", function () {
  if (toggle.checked) {
    sidePanel.style.transform = "translateX(0)";
    menuOverlay.style.opacity = "1";
    menuOverlay.style.visibility = "visible";
  } else {
    sidePanel.style.transform = "translateX(-100%)";
    menuOverlay.style.opacity = "0";
    menuOverlay.style.visibility = "hidden";
  }
});

/***************************************************************************** */

const overlayButton = document.getElementById("vertical-dropdown-menu-toggle");
const overlay = document.getElementById("overLay");
const dropdownElement = document.getElementById("vertical-dropdown-component");

overlayButton.addEventListener("click", function () {
  if ((overlay.style.visibility === "visible") & (overlay.style.opacity === "1")) {
    overlay.style.visibility = "hidden";
    overlay.style.opacity = "0";
  } else {
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
  }
});

function hideOverlay() {
  overlay.style.visibility = "hidden";
  overlay.style.opacity = "0";
}

document.addEventListener("click", function (event) {
  const isClickInside = dropdownElement.contains(event.target) || event.target === dropdownElement;

  if ((overlay.style.visibility === "visible") & !isClickInside) {
    hideOverlay();
  }
});

/********************************************************************** */

const showMoreButton = document.getElementById("loadMore");
const loadMoreFirstElements = document.querySelectorAll(".load-more-first");
const loadMoreSecondElements = document.querySelectorAll(".load-more-second");

showMoreButton.addEventListener("click", function () {
  loadMoreFirstElements.forEach(function (element) {
    if (element.style.display === "none") {
      element.style.display = "flex";
    } else if (element.style.display === "flex" && !isAnySecondVisible()) {
      toggleSecondElementsDisplay();
      showMoreButton.style.display = "none";
    }
  });
});

function toggleSecondElementsDisplay() {
  loadMoreSecondElements.forEach(function (element) {
    if (element.style.display === "none") {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  });
}

function isAnySecondVisible() {
  for (let i = 0; i < loadMoreSecondElements.length; i++) {
    if (loadMoreSecondElements[i].style.display === "flex") {
      return true;
    }
  }
  return false;
}

/*************************************************************************** */

function toggleWishListClassOnClick(elements) {
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      element.classList.toggle("wish-selected");
    });
  });
}

const wishListElements = document.querySelectorAll(".to-wish-list");

toggleWishListClassOnClick(wishListElements);
