let btn = document.getElementById('cta-btn');
let overlay = document.getElementById('overlay');


btn.addEventListener('click', function(){
overlay.style.display = 'grid';
overlay.classList.add('animate-overlay')
location.reload()
})


