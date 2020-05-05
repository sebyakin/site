let root = document.documentElement;

root.addEventListener("mousemove", e => {

    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    root.style.setProperty('--col', 'rgb(' +red+ ',' +green+ ',' +blue+ ')');
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


