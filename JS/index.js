document.addEventListener('DOMContentLoaded', () => {
    // get the header element
    const header = document.querySelector('header');
    const logo = header.querySelector('.logo>h1');
    const options = header.querySelectorAll('nav ul li a');

    function smaller(){
        // check if we have scrolled more than 1px from the top
        if (window.scrollY > 1) {
            // if we have, decrease the height of the header to 80px
            header.style.height = '60px';
            logo.style.fontSize = '1.5em';
            for(let i=0;i<options.length;i++){
                options[i].style.fontSize='1.15em';
            }

            header.style.backgroundColor=  "#212529";
            for(let i=0;i<options.length-1;i++){
                options[i].style.color = "white";
            }
            
            
        }else {
            // if we haven't, set the height of the header back to its original value
            header.style.height = '';
            logo.style.fontSize = '';
            for(let i=0;i<options.length;i++){
                options[i].style.fontSize='';
            }


            header.style.backgroundColor=  "";
            for(let i=0;i<options.length-1;i++){
                options[i].style.color = "";
            }

        }
    }

    // add an event listener to listen for scroll events
    window.addEventListener('scroll', smaller);


    

    function handleScreenResize() {
        const screenHeight = window.innerHeight;
        
        if (screenHeight <= 750) {
            header.style.height = '60px';
            logo.style.fontSize = '1.5em';
            for(let i=0;i<options.length;i++){
                options[i].style.fontSize='1.15em';
            }

            header.style.backgroundColor=  "#212529";
            for(let i=0;i<options.length-1;i++){
                options[i].style.color = "white";
            }
            window.removeEventListener('scroll', smaller);
        }else{
            window.addEventListener('scroll', smaller);

        }
    }
      
    window.addEventListener('resize', handleScreenResize);
});

