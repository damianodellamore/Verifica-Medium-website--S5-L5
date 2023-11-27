window.addEventListener('scroll', function() {
   let header = document.querySelector('header');
   let button = document.querySelector('#green');
   let curious = document.querySelector('.curious').offsetHeight;
    
    if (window.scrollY > curious) {
      header.style.backgroundColor = 'white'; 
      button.style.backgroundColor = 'green';
    } else {
      header.style.backgroundColor = '#ffc017'; 
      button.style.backgroundColor = 'black';
    }
  });
  

  // EXTRA : non ho seguito quella del sito,l'ho personalizzata creando un animazione diversa
document.addEventListener('DOMContentLoaded', function() {
    var svgElement = document.querySelector('svg');
    
    // Esempio: ruota la lettera M
    var angle = 0;
    var scale = 1;
    var scalingUp = true;

    setInterval(function() {
 
        angle += 1;
        svgElement.style.transform = 'rotate(' + angle + 'deg) scale(' + scale + ')';

       
        if (scalingUp) {
            scale += 0.01;
            if (scale >= 1.5) scalingUp = false; 
        } else {
            scale -= 0.01;
            if (scale <= 0.5) scalingUp = true;
        }
    }, 10);
});
