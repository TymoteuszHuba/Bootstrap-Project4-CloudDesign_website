const mobileNavBtn = document.querySelector('.hamburger');
const navbarButton = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');

const navLink = document.querySelector('.nav-link');
let executed = false;

 // deklarujemy zmienna valueDisplays do której pobieramy element o klasie number-calc
 let valueDisplays = document.querySelectorAll('.number-calc');
 // ustawiamy zmienna 
 let interval = 5000;

const navItems = document.querySelectorAll('.nav-link');

const navbarCollapse = document.querySelector('.navbar-collapse');

const footerYear = document.querySelector('.footer-year');


// funkcja odpowiedzialna za poprawne działanie nawigacnji 
const handleNav = () =>
{
    mobileNavBtn.classList.toggle('is-active');

    if(navbarButton.classList.contains('is-active'))
    {
        navbar.classList.add('nav-change-color');
        // navbarLogo.style.color = "black";
        document.body.style.overflowY = "hidden";
    }
    else
    {
        // navbar.classList.remove('nav-change-color');
        // navbarLogo.style.color = "white";
        document.body.style.overflowY = "scroll";
    }

    navItems.forEach(item =>
    {
        item.addEventListener('click', () =>
        {   
            navbarCollapse.classList.remove('show');
            document.body.style.overflowY = "scroll";
            mobileNavBtn.classList.remove('is-active');
        })
        
    })

}

// wywołanie funkcji nawigacji po kliknięciu
mobileNavBtn.addEventListener('click', handleNav);

// funkcja odpowiedzialna za automatyczne zliczanie 
const calculate = () =>
{
    
    // przechodzimy przez pętle foreach zmienna valueDisplays następnie tworzymy funkcje strzałkową dla valueDisplays 
    valueDisplays.forEach((valueDisplay) => 
    {
        // deklarujemy zmienna startValue i przypisujemy jej wartosc 0
        let startValue = 0;
        //  deklarujemy zmienna endValue i przypisujemy jej wartosc (atrybut) data-val
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));

        // deklarujemy zmienna duration ktora przechowuje funkcje matematyczna Match.floor i dzieli interval / endValue
        let duration = Math.floor(interval / endValue);


        let counter = setInterval(function () {
            startValue += 1;

            valueDisplay.textContent = startValue;

            if(startValue == endValue)
            {
                clearInterval(counter);
            }

        }, duration);

    });
}


// funkcja monitorująca scrollowanie okna przeglądarki
window.onscroll = () =>
{
    if(window.scrollY >= 200)
    {
        navbar.classList.add("nav-change-color");
        // navbarLogo.style.color = "black";
    }

    if(navLink.classList.contains('active') && !executed)
    {
        executed = true;
        calculate();
        console.log(true);
    }

    if(window.scrollY <= 200)
    {
        navbar.classList.remove("nav-change-color");
        // navbarLogo.style.color = "white";
        console.log(false);
    }
}


// TOOLTIPS
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// ------------- sekcja skills ----------------


// observer działający dla wszystkich progressbar z sekcji skills
let observer = new IntersectionObserver((entries) =>
{
    entries.forEach(entry => 
        {
            if(entry.isIntersecting && entry.intersectionRatio > 0.5)
            {
                modify(entry.target);
            }
        });
}, 
{
    threshold: 0.5
})

function modify(el)
{
    if(el.id === "progress-html")
    {
        el.style.width = "60%";
    }
    if(el.id === "progress-css")
    {
        el.style.width = "50%";
    }
    if(el.id === "progress-btsp")
    {
        el.style.width = "30%";
    }
    if(el.id === "progress-sql")
    {
        el.style.width = "40%";
    }
    if(el.id === "progress-js")
    {
        el.style.width = "20%";
    }
}

observer.observe(document.querySelector('#progress-html'));
observer.observe(document.querySelector('#progress-css'));
observer.observe(document.querySelector('#progress-btsp'));
observer.observe(document.querySelector('#progress-sql'));
observer.observe(document.querySelector('#progress-js'));

// ------------------ portfolio ---------------------
// funckja obsługująca galerię portfolio, 
// pobieramy odpowiednie zmienne

// const portfolioBox = document.querySelectorAll('.portfolio-gallery-box');
const img1 = document.querySelector('.img-1');
const img2 = document.querySelector('.img-2');
const modalImg1 = document.querySelector('.modal-item-1');
const modalImg2 = document.querySelector('.modal-item-2');
const modalImg3 = document.querySelector('.modal-item-3');
const modalImg4 = document.querySelector('.modal-item-4');
const modalImg5 = document.querySelector('.modal-item-5');
const modalImg6 = document.querySelector('.modal-item-6');
const modalImg7 = document.querySelector('.modal-item-7');
const modalImg8 = document.querySelector('.modal-item-8');
const modalImg9 = document.querySelector('.modal-item-9');
const modalImg10 = document.querySelector('.modal-item-10');
const modalImg11 = document.querySelector('.modal-item-11');
// const modalTag = document.querySelector('.carousel-item');

const carouselItem = Array.from(document.getElementsByClassName('carousel-item'));



const potrfolioBox = Array.from(document.getElementsByClassName('portfolio-gallery-box'));

potrfolioBox.forEach(function(box, index)
    {
        box.addEventListener('click', function()
        {
            
            carouselItem.forEach(function(item, indexItem)
            {
                // console.log(indexItem);
                // if( index == indexItem)
                // {
                //     console.log(true);
                // }
                // item.addEventListener('click', function()
                // {
                   
                // })
                // if(index == 0)
                // {
                //     item.classList.add('active');
                //     console.log("is the same!");
                // }
                // else
                // {
                //     item.classList.remove('active');
                // }
                
            })

            if(index == 0)
            {
                modalImg1.classList.add('active');
                modalImg2.classList.remove('active');
                modalImg3.classList.remove('active');
                modalImg4.classList.remove('active');
                modalImg5.classList.remove('active');
                modalImg6.classList.remove('active');
                modalImg7.classList.remove('active');
                modalImg8.classList.remove('active');
                modalImg9.classList.remove('active');
                modalImg10.classList.remove('active');
                modalImg11.classList.remove('active');
            }
            if(index == 1)
            {
                modalImg2.classList.add('active');
                modalImg1.classList.remove('active');
                modalImg3.classList.remove('active');
                modalImg4.classList.remove('active');
                modalImg5.classList.remove('active');
                modalImg6.classList.remove('active');
                modalImg7.classList.remove('active');
                modalImg8.classList.remove('active');
                modalImg9.classList.remove('active');
                modalImg10.classList.remove('active');
                modalImg11.classList.remove('active');
            }
            if(index == 2)
            {
                modalImg3.classList.add('active');
                modalImg1.classList.remove('active');
                modalImg2.classList.remove('active');
                modalImg4.classList.remove('active');
                modalImg5.classList.remove('active');
                modalImg6.classList.remove('active');
                modalImg7.classList.remove('active');
                modalImg8.classList.remove('active');
                modalImg9.classList.remove('active');
                modalImg10.classList.remove('active');
                modalImg11.classList.remove('active');
            }
            if(index == 3)
            {
                modalImg4.classList.add('active');
                modalImg1.classList.remove('active');
                modalImg2.classList.remove('active');
                modalImg3.classList.remove('active');
                modalImg5.classList.remove('active');
                modalImg6.classList.remove('active');
                modalImg7.classList.remove('active');
                modalImg8.classList.remove('active');
                modalImg9.classList.remove('active');
                modalImg10.classList.remove('active');
                modalImg11.classList.remove('active');
            }
            if(index == 4)
            {
                modalImg5.classList.add('active');
                modalImg1.classList.remove('active');
                modalImg2.classList.remove('active');
                modalImg3.classList.remove('active');
                modalImg4.classList.remove('active');
                modalImg6.classList.remove('active');
                modalImg7.classList.remove('active');
                modalImg8.classList.remove('active');
                modalImg9.classList.remove('active');
                modalImg10.classList.remove('active');
                modalImg11.classList.remove('active');
            }
            if(index == 5)
            {
                modalImg6.classList.add('active');
                modalImg1.classList.remove('active');
                modalImg2.classList.remove('active');
                modalImg3.classList.remove('active');
                modalImg4.classList.remove('active');
                modalImg5.classList.remove('active');
                modalImg7.classList.remove('active');
                modalImg8.classList.remove('active');
                modalImg9.classList.remove('active');
                modalImg10.classList.remove('active');
                modalImg11.classList.remove('active');
            }
            if(index == 6)
            {
                modalImg7.classList.add('active');
                modalImg1.classList.remove('active');
                modalImg2.classList.remove('active');
                modalImg3.classList.remove('active');
                modalImg4.classList.remove('active');
                modalImg5.classList.remove('active');
                modalImg6.classList.remove('active');
                modalImg8.classList.remove('active');
                modalImg9.classList.remove('active');
                modalImg10.classList.remove('active');
                modalImg11.classList.remove('active');
            }
            if(index == 7)
            {
                modalImg8.classList.add('active');
                modalImg1.classList.remove('active');
                modalImg2.classList.remove('active');
                modalImg3.classList.remove('active');
                modalImg4.classList.remove('active');
                modalImg5.classList.remove('active');
                modalImg6.classList.remove('active');
                modalImg7.classList.remove('active');
                modalImg9.classList.remove('active');
                modalImg10.classList.remove('active');
                modalImg11.classList.remove('active');
            }
            if(index == 8)
            {
                modalImg9.classList.add('active');
                modalImg1.classList.remove('active');
                modalImg2.classList.remove('active');
                modalImg3.classList.remove('active');
                modalImg4.classList.remove('active');
                modalImg5.classList.remove('active');
                modalImg6.classList.remove('active');
                modalImg7.classList.remove('active');
                modalImg8.classList.remove('active');
                modalImg10.classList.remove('active');
                modalImg11.classList.remove('active');
            }
            if(index == 9)
            {
                modalImg10.classList.add('active');
                modalImg1.classList.remove('active');
                modalImg2.classList.remove('active');
                modalImg3.classList.remove('active');
                modalImg4.classList.remove('active');
                modalImg5.classList.remove('active');
                modalImg6.classList.remove('active');
                modalImg7.classList.remove('active');
                modalImg8.classList.remove('active');
                modalImg9.classList.remove('active');
                modalImg11.classList.remove('active');
            }
            if(index == 10)
            {
                modalImg11.classList.add('active');
                modalImg1.classList.remove('active');
                modalImg2.classList.remove('active');
                modalImg3.classList.remove('active');
                modalImg4.classList.remove('active');
                modalImg5.classList.remove('active');
                modalImg6.classList.remove('active');
                modalImg7.classList.remove('active');
                modalImg8.classList.remove('active');
                modalImg9.classList.remove('active');
                modalImg10.classList.remove('active');
            }

            console.log("you clicked slidenr " + index);

        })
        console.log("you clicked slidenr " + index);
    });


// przyciski na górze sekcji portfolio odpowiedzialne za poprawne wyświetlanie wybranej opcji

// deklarujemy zmienne portfolioBtn - pobiera wszystkie przyciski querySelectorAll z klasą o nazwie .portfolio-button
// deklarujemy zmienną elements - która pobiera wszystkie zdjęcia portfolio-gallery-box
const portfolioBtn = document.querySelectorAll('.portfolio-button');
const elements = document.querySelectorAll('.portfolio-gallery-box');

portfolioBtn.forEach((button) => 
{
    button.addEventListener('click', () =>
    {
        const btnName = button.dataset.name;
        const btnNames = button.dataset.name.split(", ");

        elements.forEach((element) =>
        {
            if(element.dataset.name === btnName)
            {
                element.style.display = "block";
            }

            if(btnNames.includes(element.dataset.name))
            {
                element.style.display = "block";
            }
            else
            {
                element.style.display = "none";
            }
        })

    })
})


// ---------------- footer --------------------
// automatycznie ustawianie roku w stopce

handleCurrentYear = () =>
{
    const year = (new Date).getFullYear();
    footerYear.innerHTML = year;
}

handleCurrentYear();
