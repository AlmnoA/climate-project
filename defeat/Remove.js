const a = document.getElementById('Gone')
window.addEventListener('resize', function(event){
    if(this.window.innerWidth<720){
        a.classList.add('disabled')
    }
    else {a.classList.remove('disabled')}
  });