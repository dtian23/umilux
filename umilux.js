// const header = document.querySelector(".header");
// const toggleClass = ".is-sticky";
// const scrollThreshold = 190;

// window.onscroll = () => {
//     const currentScroll = window.scrollY;
//     if (currentScroll > scrollThreshold) {
//         header.classList.add(toggleClass);
//     } else {
//         header.classList.remove(toggleClass);
//     }
// }

const header = document.getElementById('header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 190) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

/*********************************************************************************** */

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function openNav() {
    document.getElementById("side-panel").style.transform = "translateX(0)";
    document.getElementById("nav-list").style.transform = "translateX(0)";
    var className = document.getElementsByClassName('nav-item');
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
    // document.querySelector(".nav-list-wrapper").style.opacity = "1";
    // document.querySelector(".nav-list-wrapper").style.visibility = "visible";
}

function openSubNavShop() {
    document.getElementById("sub-nav-shop").style.transform = "translateX(0)";
    document.getElementById("sub-nav-shop").style.display = "fixed";
    document.getElementById("sub-shop").style.transform = "translateX(0)";
    document.querySelector(".all-sub-nav").style.opacity = "1";
    document.querySelector(".all-sub-nav").style.visibility = "visible";
    // var className = document.getElementsByClassName('register-shop');
    // className[0].style.transform = "translateX(0)";
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
    var className = document.getElementsByClassName('register-product');
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
    var className = document.getElementsByClassName('register-page');
    className[0].style.transform = "translateX(0)";
}

function openSubNavBlog() {
    document.getElementById("sub-nav-blog").style.transform = "translateX(0)";
    document.getElementById("sub-blog").style.transform = "translateX(0)";
    document.querySelector(".all-sub-nav").style.opacity = "1";
    document.querySelector(".all-sub-nav").style.visibility = "visible";
    var className = document.getElementsByClassName('register-blog');
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

function setGray() {
    // document.getElementById("overLay").style.zIndex = "99";
}

// function setGraySearch() {
//     document.getElementById("overLay-screen").style.zIndex = "99";
// }

function on() {
    // document.getElementById('overLay').style.display = "block";
    document.getElementById("menuOverlay").style.visibility = "visible";
    document.getElementById("menuOverlay").style.opacity = "1";
}

// function onSearch() {
//     document.getElementById("overLay-screen").style.display = "block";
// }

function off() {
    document.getElementById("menuOverlay").style.visibility = "hidden";
    document.getElementById("menuOverlay").style.opacity = "0";
}

function disableScroll() {
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    scrollLeft = window.scrollX || document.documentElement.scrollLeft,

        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}

/********************************************************************************* */

const days = document.querySelectorAll('days');
const hours = document.querySelectorAll('hours');
const minutes = document.querySelectorAll('minutes');
const seconds = document.querySelectorAll('seconds');

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
    document.getElementById("hours").innerHTML = h < 10 ? '0' + h : h;
    document.getElementById("minutes").innerHTML = m < 10 ? '0' + m : m;
    document.getElementById("seconds").innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);

/*********************************************************** */

const parent = document.getElementById('header-bar');
const component = document.getElementById('search-tab');
const background = document.getElementById('searchOverlay');
const searchInput = document.querySelector('.search-input');

function closeComponent() {
    component.style.visibility = 'hidden';
    component.style.opacity = '0';
    background.style.visibility = 'hidden';
    background.style.opacity = '0';
}

function openComponent() {
    background.style.visibility = 'visible';
    background.style.opacity = '1';
}

searchInput.addEventListener('click', function () {
    if (background.style.visibility === 'hidden' & background.style.opacity === '0') {
        background.style.visibility = 'visible';
        background.style.opacity = '1';
    }
});

document.addEventListener('click', function (event) {
    const isClickInsideComponent = parent.contains(event.target) || event.target === parent;

    if (component.style.visibility === 'visible' && !isClickInsideComponent) {
        closeComponent();
    }

});

/***************************************************************************** */

const overlayButton = document.getElementById('vertical-dropdown-menu-toggle');
const overlay = document.getElementById('overLay');
const dropdownElement = document.getElementById('vertical-dropdown-component');

overlayButton.addEventListener('click', function () {
    if (overlay.style.visibility === 'visible' & overlay.style.opacity === '1') {
        overlay.style.visibility = 'hidden';
        overlay.style.opacity = '0';
    } else {
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
    }
});

function hideOverlay() {
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
}

document.addEventListener('click', function (event) {
    const isClickInside = dropdownElement.contains(event.target) || event.target === dropdownElement;

    if (overlay.style.visibility === 'visible' & !isClickInside) {
        hideOverlay();
    }
});

/********************************************************************** */

// const loadMore = document.getElementById('loadMore');
// const loadMorefirst = document.querySelectorAll('.load-more-first');
// const loadMoresecond = document.querySelectorAll('.load-more-second');

// loadMore.addEventListener('click', function () {
//     if (loadMorefirst.style.display === 'none') {
//         loadMorefirst.style.display = 'flex';
//     }
//     if (loadMorefirst.style.display === 'flex' & loadMoresecond.style.display === 'none') {
//         loadMoresecond.style.display = 'flex';
//     }
// });

const showMoreButton = document.getElementById('loadMore');
const loadMoreFirstElements = document.querySelectorAll('.load-more-first');
const loadMoreSecondElements = document.querySelectorAll('.load-more-second');

showMoreButton.addEventListener('click', function () {
    loadMoreFirstElements.forEach(function (element) {
        if (element.style.display === 'none') {
            element.style.display = 'flex';
        } else if (element.style.display === 'flex' && !isAnySecondVisible()) {
            toggleSecondElementsDisplay();
            showMoreButton.style.display = 'none';
        }
    });
});

function toggleSecondElementsDisplay() {
    loadMoreSecondElements.forEach(function (element) {
        if (element.style.display === 'none') {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        }
    });
}

function isAnySecondVisible() {
    for (let i = 0; i < loadMoreSecondElements.length; i++) {
        if (loadMoreSecondElements[i].style.display === 'flex') {
            return true;
        }
    }
    return false;
}

/*************************************************************************** */

// const addToWishList = document.querySelectorAll('.to-wish-list');
// const isSelected = "selected";

// addToWishList.forEach(function (element) {
//     element.addEventListener('click', function () {
//         var computedStyle = window.getComputedStyle(element);
//         var backgroundColor = computedStyle.getPropertyValue('background-color');
//         console.log(backgroundColor);
//         if (backgroundColor === 'rgb(241, 243, 247)') {
//             element.classList.add("wish-selected");
//             element.classList.remove("wish-select");
//             console.log("ahahaha");
//             element.style.background = 'rgb(0, 162, 194)';
//         } else {
//             element.classList.remove("wish-selected");
//             element.classList.add("wish-select");
//             console.log("hihihi");
//             element.style.background = 'rgb(241, 243, 247)';
//         }
//     });
// });

function toggleWishListClassOnClick(elements) {
    elements.forEach(function (element) {
        element.addEventListener('click', function () {
            element.classList.toggle('wish-selected');
        });
    });
}

// Usage example:
const wishListElements = document.querySelectorAll('.to-wish-list');

toggleWishListClassOnClick(wishListElements);