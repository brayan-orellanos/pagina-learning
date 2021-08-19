const d = document

function scroll (btn) {
    
    d.addEventListener('scroll', e => {
        if(scrollY >= 120) {
            d.querySelector(btn).classList.add('ver-subir')
        } else {
            d.querySelector(btn).classList.remove('ver-subir')
        }
    })


    d.addEventListener('click', e => {
        if(e.target.matches(btn+' *')) {
            scrollTo( {
                behavior: 'smooth',
                top: 0
            })
        }
    })
}

d.addEventListener('DOMContentLoaded', e => {
    scroll('.subir')
})
