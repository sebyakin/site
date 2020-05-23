let root = document.documentElement;

let orientir = document.getElementById('orientir');
let orientirImg = ['images/orientir/loveburo.png', 'images/orientir/sisters.jpg', 'images/orientir/cherdak.png', 'images/orientir/sdelano.jpg'];

let bhsad = document.getElementById('bhsad');
let bhsadImg = [
  'images/bhsad/sebyakin-bhsad-elizaveta-stolyarova-website.png', 
  'images/bhsad/sebyakin-bhsad-maria-kharmandarian-website.png', 
  'images/bhsad/sebyakin-bhsad-irina-evseenko-website.png', 
  'images/bhsad/sebyakin-bhsad-maria-blagaya-website.png', 
  'images/bhsad/sebyakin-bhsad-natalia-kukina-website.png', 
  'images/bhsad/sebyakin-bhsad-evgenia-velichko-website.png', 
  'images/bhsad/sebyakin-bhsad-alisa-kharas-website.png', 
  'images/bhsad/sebyakin-bhsad-lesya-kuranova-website.png',
  'images/bhsad/sebyakin-bhsad-1.jpeg',
  'images/bhsad/sebyakin-bhsad-2.jpeg',
  'images/bhsad/sebyakin-bhsad-3.jpeg',
  'images/bhsad/sebyakin-bhsad-4.jpeg',
  'images/bhsad/sebyakin-bhsad-5.jpeg',
  'images/bhsad/sebyakin-bhsad-6.jpeg',
  'images/bhsad/sebyakin-bhsad-7.jpeg',
  'images/bhsad/sebyakin-bhsad-8.jpeg',
  'images/bhsad/sebyakin-bhsad-9.jpeg',
  'images/bhsad/sebyakin-bhsad-10.jpeg',
  'images/bhsad/sebyakin-bhsad-11.jpeg',
  'images/bhsad/sebyakin-bhsad-12.jpeg', 
  'images/bhsad/sebyakin-bhsad-13.jpeg',
  'images/bhsad/sebyakin-bhsad-14.jpeg',
];


root.addEventListener("mousemove", e => {

  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  root.style.setProperty('--col', 'rgb(' +red+ ',' +green+ ',' +blue+ ')');
});


let h = window.innerHeight;
let w = window.innerWidth;
let container = document.querySelector('.container')

let cats = [orientir, bhsad];

// ориентир
let i = 0;
orientir.addEventListener("mousemove", e => {
  // сбрасывать счетчик
  if (i == orientirImg.length-1) {
    i = 0
  }
  // рандомные координаты
  let posX = Math.floor(Math.random()*w);
  let posY = Math.floor(Math.random()*h);
  // создать картинку
  let img = document.createElement('img');
  img.setAttribute('src', orientirImg[i]);
  img.setAttribute('style', `top:${posY}px;left:${posX}px;`);
  //заснутуть каритинку в див
  container.appendChild(img); 
  i++;    
  //  убрать если много
  if (container.childNodes.length > 10) {
    container.removeChild(container.childNodes[0]);
  }
})
// очистить все
orientir.addEventListener("mouseout", e => {
  container.innerHTML = '';
});

//бхсад
let a = 0;
bhsad.addEventListener("mousemove", e => {
  // сбрасывать счетчик
  if (i == bhsadImg.length-1) {
    i = 0
  }
  // рандомные координаты
  let posX = Math.floor(Math.random()*w);
  let posY = Math.floor(Math.random()*h);
  // создать картинку
  let img = document.createElement('img');
  img.setAttribute('src', bhsadImg[i]);
  img.setAttribute('style', `top:${posY}px;left:${posX}px;`);
  //заснутуть каритинку в див
  container.appendChild(img); 
  i++;    
  //  убрать если много
  if (container.childNodes.length > 10) {
    container.removeChild(container.childNodes[0]);
  }
})
// очистить все
bhsad.addEventListener("mouseout", e => {
  container.innerHTML = '';
});


















  function myFunction() {
    var itm = document.querySelector(".content");
    var cln = itm.cloneNode(true);
    document.querySelector(".wrapper").appendChild(cln);
  }







  // let magic = document.querySelector('.magic');
  // console.log(magic);

  // function color() {
  //   let red = Math.floor(Math.random() * 255);
  //   let green = Math.floor(Math.random() * 255);
  //   let blue = Math.floor(Math.random() * 255);
  //   magic.style.setProperty('color', 'rgb(' +red+ ',' +green+ ',' +blue+ ')');
  // }


  // let timerId = setInterval(() => color(), 20);


