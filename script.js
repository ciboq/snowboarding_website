fetch('https://api.airtable.com/v0/appwNEs14ZXwbbZ0B/Table%201', {
  headers: {
    Authorization: 'Bearer keyU0oov6exskr2Q0',
  },
})
  .then(res => res.json()) 
  .then(data => {
    arr=data.records.filter(board => board.fields.snowboard_brand === 'Burton')
  console.log(arr)
    
    const wrapper = document.querySelector('.swiper-wrapper')

    data.records
    
    // .filter(board => board.fields.snowboard_brand === 'Burton')
    
    .forEach((album, index) => { //.forEach executes a provided function once for each array element
      console.log(album, index); 
    
  
  wrapper.innerHTML += `

  <div class="swiper-slide slide-${index + 1}">
  <div class="cover"></div>
  <div class="container">
  <div class="filter">FILTER</div>
  <img class="snowboard" src="${album.fields.snowboard_pic[0].thumbnails.large.url}" />
  <div class="snowboard_brand" id="left" style="opacity:0;"> ${album.fields.snowboard_brand} </div>
  <div class="snowboard_name" id="left" style="opacity:0;"> ${album.fields.snowboard_name} </div>
  <div class="snowboard_description" id="right"> ${album.fields.snowboard_description} </div>
  </div>
  </div>
`;
    
// swiper.activeIndex
// console.log(swiper.activeIndex)

var controlsProgressE1 = document.querySelector('.progress')

var myAnimation = anime({
  targets: '.snowboard',
  translateX: '700px',
  duration: function() { return anime.random(1000,1400); },
  // delay: function(el, i) { return i * 100; },
  easing: 'easeInOutSine',
  autoplay: false,
  direction: 'alternate',
  // update: function(animation) {
  //   progress.value = animation.progress;
  // }
});

var animationleft = anime({
  targets: '#left',
  opacity: [0, 0.3, 0.5, 0.8, 1], 
})

var animationright = anime({
  targets: '#right',
  opacity: [1, 0.8, 0.5, 0.3, 0], 
})

controlsProgressE1.addEventListener('input', function() {
  myAnimation.seek(myAnimation.duration * (controlsProgressE1.value / 100));
  animationleft.seek(animationleft.duration * (controlsProgressE1.value / 100));
  animationright.seek(animationright.duration * (controlsProgressE1.value / 100));

});

// var opener = document.querySelector('.opener')
// opener.addEventListener("click", () => {

// })

var clicked=false;
let opener = document.getElementById('openerr');
opener.onclick = function myFunction(){ if(!clicked){
  clicked=true;
  opener.classList.toggle('fade');
}}

});

  });

  let el = document.getElementById('next');
  console.log(el.ariaDisabled);
  el.ariaDisabled = "false"



    
  

// let snowboardContainer = document.querySelector(".snowboard_container");


//snowboardContainer.addEventListener("mousemove", () => {
  //snowboard.style.top = `${event.offsetY}px`;
  //snowboard.style.left = `${event.offsetX}px`;
//});
