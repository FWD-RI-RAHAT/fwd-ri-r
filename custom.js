let x = document.getElementById("ul_nav_bar");
let show_Menu = document.querySelector("#bars_icon");
let hide_Menu = document.querySelector("#times_icon");

function showMenu() {
    x.style.display = "block";
    show_Menu.style.display = "none";
    hide_Menu.style.display = "block"
}

function disapear_menu() {
    x.style.display = "none";
    hide_Menu.style.display = "none"
    show_Menu.style.display = "block";
}

// ------------------------------------
// ------- Experience Section ---------
// ------------------------------------
const navLinks = document.querySelectorAll('header nav a');

const activePage = () => {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if(!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');
        }
    });
});



const resumeBtn = document.querySelectorAll(".resume_btn");

resumeBtn.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume_detail');
       
        resumeBtn.forEach(btn => {
            btn.classList.remove("active");
        });
        btn.classList.add("active");

        resumeDetails.forEach(detail => {
            detail.classList.remove("active");
        });
        resumeDetails[idx].classList.add('active');
    })
})

const arrowRight = document.querySelector('.portfolio_box .navigation .arrow_right');
const arrowLeft = document.querySelector('.portfolio_box .navigation .arrow_left');


let index = 0;


const activePortfolio = () => {
    const imgSlide = document.querySelector('.img_slide');
    const portfolioDetails = document.querySelectorAll('.portfolio_detail');

    imgSlide.style.transform = `translateX(Calc(${index * -100}% - ${index * 2}rem)`;
    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 5;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});


arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});
