

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
    document.getElementById("sub-nav-shop").style.transform = "translateX(-100%)";
    document.getElementById("sub-shop").style.transform = "translateX(-100%)";
    document.getElementById("sub-nav-product").style.transform = "translateX(-100%)";
    document.getElementById("sub-product").style.transform = "translateX(-100%)";
    document.getElementById("sub-nav-page").style.transform = "translateX(-100%)";
    document.getElementById("sub-page").style.transform = "translateX(-100%)";
    document.getElementById("sub-nav-blog").style.transform = "translateX(-100%)";
    document.getElementById("sub-blog").style.transform = "translateX(-100%)";
}

function openSubNavShop() {
    document.getElementById("sub-nav-shop").style.transform = "translateX(0)";
    document.getElementById("sub-shop").style.transform = "translateX(0)";
    var className = document.getElementsByClassName('register-shop');
    className[0].style.transform = "translateX(0)";
}

function openSubNavProduct() {
    document.getElementById("sub-nav-product").style.transform = "translateX(0)";
    document.getElementById("sub-product").style.transform = "translateX(0)";
    var className = document.getElementsByClassName('register-product');
    className[0].style.transform = "translateX(0)";
}

function openSubNavPage() {
    document.getElementById("sub-nav-page").style.transform = "translateX(0)";
    document.getElementById("sub-page").style.transform = "translateX(0)";
    var className = document.getElementsByClassName('register-page');
    className[0].style.transform = "translateX(0)";
}

function openSubNavBlog() {
    document.getElementById("sub-nav-blog").style.transform = "translateX(0)";
    document.getElementById("sub-blog").style.transform = "translateX(0)";
    var className = document.getElementsByClassName('register-blog');
    className[0].style.transform = "translateX(0)";
}

function openSearch() {
    document.getElementById("search-tab").style.transform = "translateY(0)";
    document.getElementById("search-tab").style.visibility = "visible";
    document.getElementById("search-tab-screen").style.transform = "translateY(0)";
    document.getElementById("search-tab-screen").style.visibility = "visible";
}

function closeSearch() {
    document.getElementById("search-tab").style.transform = "translateY(-100%)";
    document.getElementById("search-tab").style.visibility = "hidden";
    document.getElementById("search-tab-screen").style.transform = "translateY(-100%)";
    document.getElementById("search-tab-screen").style.visibility = "hidden";
}

function goBack() {
    document.getElementById("sub-nav-shop").style.transform = "translateX(-100%)";
    document.getElementById("sub-shop").style.transform = "translateX(-100%)";
    document.getElementById("sub-nav-product").style.transform = "translateX(-100%)";
    document.getElementById("sub-product").style.transform = "translateX(-100%)";
    document.getElementById("sub-nav-page").style.transform = "translateX(-100%)";
    document.getElementById("sub-page").style.transform = "translateX(-100%)";
    document.getElementById("sub-nav-blog").style.transform = "translateX(-100%)";
    document.getElementById("sub-blog").style.transform = "translateX(-100%)";
}

function setGray() {
    document.getElementById("overLay").style.zIndex = "99";
}

function setGraySearch() {
    document.getElementById("overLay-screen").style.zIndex = "99";
}

function on() {
    document.getElementById("overLay").style.display = "block";
}

function onSearch() {
    document.getElementById("overLay-screen").style.display = "block";
}

function off() {
    document.getElementById("overLay").style.display = "none";
    document.getElementById("overLay-screen").style.display = "none";
}

function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}
