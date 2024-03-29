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
            for(let i=0;i<options.length;i++){
                options[i].style.color = "white";
            }

            // document.querySelector("nav a::before").style.background = "white";
            document.querySelectorAll("nav a").forEach((links)=>{links.classList.add("scrolled");});
        }else {
            // if we haven't, set the height of the header back to its original value
            header.style.height = '';
            logo.style.fontSize = '';
            for(let i=0;i<options.length;i++){
                options[i].style.fontSize='';
            }


            header.style.backgroundColor=  "";
            for(let i=0;i<options.length;i++){
                options[i].style.color = "";
            }
            
            // document.querySelectorAll("nav a::before").style.background = "linear-gradient(to right, #243B55, #21897E)";
            document.querySelectorAll("nav a").forEach((links)=>{links.classList.remove("scrolled");});
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
            for(let i=0;i<options.length;i++){
                options[i].style.color = "white";
            }
            window.removeEventListener('scroll', smaller);
        }else{
            window.addEventListener('scroll', smaller);

        }
    }
      
    window.addEventListener('resize', handleScreenResize);





    // Auto underline of navigation bar
    // Get the navigation items and sections
    const navItems = document.querySelectorAll('nav ul li');
    const sections = document.querySelectorAll('section');

    // Add a scroll event listener to the window object
    window.addEventListener('scroll', () => {
        // Get the current position of the scroll
        let scrollPosition = window.scrollY;
        var maxY = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        ) - window.innerHeight;

        // Loop through the sections and check their positions
        // Find the height of the document and the last section
        const documentHeight = document.documentElement.scrollHeight;
        const lastSection = sections[sections.length - 2];
        const lastSectionBottom = lastSection.getBoundingClientRect().bottom + scrollPosition;

        // If the scroll position is near the bottom of the document, highlight the last nav item
        if (scrollPosition + window.innerHeight >= documentHeight - 1) {
            navItems.forEach((item) => {
                item.classList.remove('active');
            });
            navItems[navItems.length - 1].classList.add('active');
        }
        // Otherwise, check if the scroll position is within any of the sections
        else {
            sections.forEach((section, index) => {
                // 60 is the header height
                let sectionTop = section.getBoundingClientRect().top + scrollPosition - 60;
                if(index==0){
                sectionTop = 0;
                }
                const sectionBottom = section.getBoundingClientRect().bottom + scrollPosition;

                // If the scroll position is within the section, highlight the corresponding nav item
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navItems.forEach((item) => {
                    item.classList.remove('active');
                });
                navItems[index].classList.add('active');
                }
            });
        }

    });

  

});

