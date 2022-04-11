fetch('https://api.airtable.com/v0/appwNEs14ZXwbbZ0B/Table%201', {
  headers: {
    Authorization: 'Bearer keyU0oov6exskr2Q0',
  },
})
  .then(res => res.json()) 
  .then(data => {
    arr=data.records.filter(board => board.fields.snowboard_brand === 'Burton')
  console.log(arr)
    let board1 = arr.slice(-5)
    let board2 = arr.slice(0,-4)
    
    var progress = document.querySelector('.progress');

    const snowboard_container_burton1 = document.querySelector('.one');
    const snowboard_container_burton2 = document.querySelector('.two');

    data.records
    
    .forEach((album, index) => {
      console.log(album); 
    
  
  snowboard_container_burton1.innerHTML += `

  <div class="swiper-slide one">
  <div><img class="snowboard" src="${album.fields.snowboard_pic[0].thumbnails.large.url}", /></div>
  </div>
  
  `;


snowboard_container_burton2.innerHTML += `

<div class="swiper-slide two">
<div><img class="snowboard" src="${album.fields.snowboard_pic[0].thumbnails.large.url}"/></div>
</div>

`;



    

anime({
  targets: '.snowboard',
  translateX: '220px',
  duration: function() { return anime.random(1000,1400); },
  delay: function() { return anime.random(300,600); },
  easing: 'easeInOutExpo',
  loop: true,
  direction: 'alternate',
  update: function(animation) {
    progress.value = animation.progress;
  }
});

});

  });



    
  

// let snowboardContainer = document.querySelector(".snowboard_container");


//snowboardContainer.addEventListener("mousemove", () => {
  //snowboard.style.top = `${event.offsetY}px`;
  //snowboard.style.left = `${event.offsetX}px`;
//});
