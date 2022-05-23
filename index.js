const home = document.getElementById('home');
const products = document.getElementById('products');
const about = document.getElementById('about');
const homeContent = document.getElementById('home-content');
const productsContent = document.getElementById('products-content');
const aboutContent = document.getElementById('about-content');
const sideBarToggle = document.getElementById('toggle')
const sideBarClose = document.getElementById('close')
const tabBtn = document.getElementById('tab-btn')

home.addEventListener('click', function (){
    homeContent.style.display = 'block';
    productsContent.style.display = 'none';
    aboutContent.style.display = 'none';
});

products.addEventListener('click', function (){
    homeContent.style.display = 'none';
    productsContent.style.display = 'block';
    aboutContent.style.display = 'none';
});

about.addEventListener('click', function (){
    homeContent.style.display = 'none';
    productsContent.style.display = 'none';
    aboutContent.style.display = 'block';
});

sideBarToggle.addEventListener('click', function (){
    tabBtn.style.display = 'block';
});

sideBarClose.addEventListener('click', function (){
    tabBtn.style.display = 'none';
});
