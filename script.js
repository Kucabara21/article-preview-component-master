const links = document.querySelector('.share');
console.log(links)
links.addEventListener('click', function(){
    this.classList.toggle('active');
})
