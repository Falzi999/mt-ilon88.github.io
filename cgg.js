// script.js
const balanceElement = document.getElementById('balance');
const productsElement = document.getElementById('products');
const searchInput = document.getElementById('search');
const categorySelect = document.getElementById('category');

let balance = 7000000000; // 7 миллиардов долларов

// Пример данных товаров (200 товаров)
const products = [
    { name: "Tesla Model S", price: 80000, category: "cars", image: "https://hips.hearstapps.com/hmg-prod/images/2025-tesla-model-s-1-672d42e172407.jpg?crop=0.465xw:0.466xh;0.285xw,0.361xh&resize=2048:*" },
    { name: "Вилла в Майами", price: 25000000, category: "real-estate", image: "https://tranio.ru/photos/adt/a9204931/22201100/275x176.jpg" },
    { name: "iPhone 15 Pro Max", price: 1200, category: "tech", image: "https://jjstore.ru/image/cache/catalog/apple/iphone15/i15prosin-1181x865.jpeg" },
    { name: "Часы Rolex", price: 15000, category: "luxury", image: "https://cdn1.ozone.ru/s3/multimedia-k/6389116784.jpg" },
    { name: "Яхта Sunseeker", price: 5000000, category: "luxury", image: "https://admiralsochi.ru/datas/resized/1-1627289431_15.crop1170x780.jpg" },
    { name: "Частный остров", price: 10000000, category: "real-estate", image: "https://cdn.forbes.ru/files/photo_galleries/6-calivigny-island-in-grenada.jpg__1579599985__70663.jpg" },
    { name: "MacBook Pro 16", price: 2500, category: "tech", image: "https://rostov.store123.ru/upload/iblock/92d/xviyq7pu76500kj4n07uyywy3gq3911b.jpg" },
    { name: "Ferrari 488 GTB", price: 300000, category: "cars", image: "https://ferrari-avilon.ru/media/home/bg/190321-car-ferrari-f8-spider.jpg" },
    { name: "Золотой слиток", price: 60000, category: "luxury", image: "https://static.alltime.ru/obj/article/image-blog/kakie_bivaut_probi_zolota/kakie_bivaut_probi_zolota.jpg" },
    { name: "Пентхаус в Нью-Йорке", price: 15000000, category: "real-estate", image: "https://s0.rbk.ru/v6_top_pics/media/img/9/16/754678120651169.jpeg" },
    { name: "DJI Mavic 3", price: 2000, category: "tech", image: "https://drones-russia.ru/upload/resize_cache/iblock/33b/800_800_0/5l8b1ux0w4bkw9qxlzhib69xoz1dnlhb.jpg" },
    { name: "Bugatti Chiron", price: 3000000, category: "cars", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZj8zZlfbm7rlZuYC1k0qvp3hxwL8oasr0IQ&s" },
    { name: "Алмазное колье", price: 500000, category: "luxury", image: "https://melikovgold.ru/wp-content/uploads/2021/06/koltso-s-almazom-05.jpg" },
    { name: "Замок во Франции", price: 20000000, category: "real-estate", image: "https://s.zagranitsa.com/images/articles/8280/870x486/4fe3aa8471f59ab5d92ed1e7a537deb4.jpg?1576510987" },
    { name: "Sony PlayStation 5", price: 500, category: "tech", image: "https://multibrandmobile.ru/wp-content/uploads/2023/12/ps-5.png" },
    { name: "Lamborghini Aventador", price: 400000, category: "cars", image: "https://avatars.mds.yandex.net/get-verba/787013/2a00000180620161911a09e0e398cbcd0960/cattouchret" },
    { name: "Картина Ван Гога", price: 10000000, category: "luxury", image: "https://imdvor.ru/upload/resize_cache/webp/iblock/ac4/9ddv07ay4g75yrnvfslc4u2m0zuc0e4o.webp" },
    { name: "Офис в Лондоне", price: 12000000, category: "real-estate", image: "https://apartmentinteriors.ru/wp-content/uploads/rtkl-office-london-uk-09.jpg" },
    { name: "Samsung", price: 3000, category: "tech", image: "https://touchtime.ru/wa-data/public/shop/products/05/21/2105/images/9725/9725.580@2x.jpeg" },
    { name: "Porsche 911 Turbo S", price: 200000, category: "cars", image: "https://kolesa-uploads.ru/r/880x/6aa42e5c-eda6-4132-9985-b21831aae41f/p17-0546-a4-rgb.jpg" },
    { name: "Бриллиантовые серьги", price: 250000, category: "luxury", image: "https://berezkagold.ru/image/cache/catalog/20240201090250_bs12_br_51/4241-210-500x500.jpg" },
    { name: "Ферма в Калифорнии", price: 8000000, category: "real-estate", image: "https://cdn18.picryl.com/photo/2019/10/12/scenic-view-farm-in-northeast-california-80cea9-1024.jpg" },
    { name: "Nikon Z9", price: 5500, category: "tech", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yILYwgv7WDw01ESQXRMB01YK0OAzMtsK0g&s" },
    { name: "Aston Martin DB11", price: 220000, category: "cars", image: "https://astonmartin.ru/models/db11-family/db11_coupe/DB11-35-sm.jpg" },
    { name: "Золотой Rolex", price: 50000, category: "luxury", image: "https://ir.ozone.ru/s3/multimedia-p/c1000/6784669177.jpg" },
    { name: "Остров в Карибском море", price: 30000000, category: "real-estate", image: "https://premiumtravel.kz/sites/default/files/-4.jpg" },
    { name: "Apple Watch Ultra", price: 800, category: "tech", image: "https://touchtime.ru/wa-data/public/shop/products/03/20/2003/images/9528/9528.580@2x.jpg" },
    { name: "McLaren 720S", price: 300000, category: "cars", image: "https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_240,q_auto:good,w_385/ctjvjtjfxqavguj60uss.jpg" },
    { name: "Кольцо с изумрудом", price: 75000, category: "luxury", image: "https://izumrud-ural.ru/files/resized/products/1706682909265.700x800.jpg" },
    { name: "Вложиться в бизнес", price: 1200000, category: "=", image: "https://s0.rbk.ru/v6_top_pics/media/img/7/81/347211982650817.jpeg" },
    { name: "Дом Тимы в Калифорнии", price: 2000000000, category: "real-estate", image: "https://homemyhome.ru/wp-content/uploads/2017/01/%D0%BC%D0%B8%D0%BD%D0%B8%D0%B0%D1%82%D1%8E%D1%80%D0%B0-34.jpg" },
    { name: "Дом Антона в Калифорнии", price: 2000000000, category: "real-estate", image: "https://homemyhome.ru/wp-content/uploads/2017/01/%D0%BC%D0%B8%D0%BD%D0%B8%D0%B0%D1%82%D1%8E%D1%80%D0%B0-34.jpg" },
  ];


// Отображение товаров
function renderProducts(filteredProducts) {
  productsElement.innerHTML = '';
  filteredProducts.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Цена: $${product.price.toLocaleString()}</p>
      <button onclick="buyProduct(${product.price})">Купить</button>
    `;
    productsElement.appendChild(productElement);
  });
}

// Покупка товара
function buyProduct(price) {
  if (balance >= price) {
    balance -= price;
    balanceElement.textContent = `$${balance.toLocaleString()}`;
    alert(`Вы купили товар за $${price.toLocaleString()}!`);
  } else {
    alert('Недостаточно средств!');
  }
}

// Фильтрация товаров
function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  renderProducts(filteredProducts);
}

// Инициализация
searchInput.addEventListener('input', filterProducts);
categorySelect.addEventListener('change', filterProducts);
renderProducts(products);