// Toggle Section

// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.ooclick = () =>{
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');

// }

// scroll sections
let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');
window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop -  100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

window.onscroll = () =>{

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.screenY > 100);
}


// 
