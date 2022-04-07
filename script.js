fetch('https://api.airtable.com/v0/appwNEs14ZXwbbZ0B/Table%201', {
  headers: {
    Authorization: 'Bearer keyU0oov6exskr2Q0',
  },
})
  .then(res => res.json()) 
  .then(data => {
    console.log(data); 

    const snowboard_container = document.querySelector('.snowboard_container'); 
    data.records.forEach(album => {
      console.log(album); 

      
snowboard_container.innerHTML += `

`;
    });
    
  var progress = document.querySelector('.progress');

  var myAnimation = anime({
    targets: 'img',
    translateX: '500px',
    duration: 2000,
    easing: 'easeInOutExpo',
    loop: true,
    direction: 'alternate',
    update: function(animation) {
      progress.value = animation.progress;
    }
  });

progress.addEventListener('input', function() { myAnimation.seek(progress.value); });

  
  });
  

// let snowboardContainer = document.querySelector(".snowboard_container");


//snowboardContainer.addEventListener("mousemove", () => {
  //snowboard.style.top = `${event.offsetY}px`;
  //snowboard.style.left = `${event.offsetX}px`;
//});
