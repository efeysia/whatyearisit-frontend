fetch('https://whatyearisit-backend-mu-gold.vercel.app/year')
.then(Response => Response.json())
.then((data) => {
    document.querySelector('#year').textContent = data.year
})