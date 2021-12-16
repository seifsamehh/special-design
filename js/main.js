// start navbar
const appear = () => {
    const appear = document.querySelector('.links');
    if(appear.style.visibility == "hidden") {
        appear.style.visibility = "visible";
    }else {
        appear.style.visibility = "hidden";
    }
};
// end navbar
// start settings
const toggle = document.querySelector('.toggle-settings .setting');

toggle.onclick = function () {
    this.classList.toggle('fa-spin');
    const show = document.querySelector('.settings-box');
    show.classList.toggle('open');
}
// start switch colors //
const colorsLi = document.querySelectorAll('.colors-list li');

colorsLi.forEach(ele => {
    ele.addEventListener('click', (e) => {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
    });
});
// end switch colors //
// end settings
// start change background
let landingPage = document.querySelector(".landing-page");

let imgsArr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

setInterval(() => {
    let randomNum = Math.floor(Math.random() * imgsArr.length);
    landingPage.style.backgroundImage = 'url("images/' + imgsArr[randomNum] + '")';
}, 3000);
// end change background
// start change text
let click = document.getElementById('click'),
change = document.getElementById('change');

click.onclick = function() {
    if(change.textContent === 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ex dicta adipisci laboriosam distinctio deleniti veritatis alias, quis quasi maxime dolores, quas doloribus cum libero. Ut quos soluta facere impedit!') {
        change.textContent = "We Are Creative And Professional Agency And We are looking to work with you.";
    }else if(change.textContent === 'We Are Creative And Professional Agency And We are looking to work with you.') {
        change.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ex dicta adipisci laboriosam distinctio deleniti veritatis alias, quis quasi maxime dolores, quas doloribus cum libero. Ut quos soluta facere impedit!";
}
click.addEventListener('click', () => {
    click.classList.toggle('color')
});
};
// end change text
// start skills
let btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        let fill1 = document.getElementById('fill-1');
        fill1.style.width = '90%';
    });
    btn.addEventListener('click', () => {
        let fill2 = document.getElementById('fill-2');
        fill2.style.width = '80%';
    });
    btn.addEventListener('click', () => {
        let fill2 = document.getElementById('fill-3');
        fill2.style.width = '85%';
    });
    btn.addEventListener('click', () => {
        let fill2 = document.getElementById('fill-4');
        fill2.style.width = '100%';
    });
    btn.addEventListener('click', () => {
        let fill2 = document.getElementById('fill-5');
        fill2.style.width = '95%';
    });
// end skills
// start gallery popup
let ourGallery = document.querySelectorAll('.gallery img');
ourGallery.forEach(img => {
    img.addEventListener('click', (e) => {
        // create overlay element
        let overlay = document.createElement("div");
        // add class to overlay
        overlay.className = 'popup-overlay';
        // append overlay to body
        document.body.appendChild(overlay);
        // create popup
        let popupBox = document.createElement('div');
        // add class to popupbox
        popupBox.className = 'popup-box';
         // create close span
        let closeBtn = document.createElement('span');
        // create the close btn text
        let closeBtnText = document.createTextNode('X');
        // append text to closebtn
        closeBtn.appendChild(closeBtnText);
        // add class to closebtn
        closeBtn.className = 'close-btn';
        // add closebtn to popup box
        popupBox.appendChild(closeBtn);
        // create the image
        let popupImage = document.createElement('img');
        // set image source
        popupImage.src = img.src;
        // add image to popup box
        popupBox.appendChild(popupImage);
        // append popbox to body
        document.body.appendChild(popupBox);
        if(img.alt !== null) {
            // create heading
            let imgHeading = document.createElement('h3');
            // craete text for heading
            let imgText = document.createTextNode(img.alt);
            // append text to heading
            imgHeading.appendChild(imgText);
            // append heading to popup box
            popupBox.appendChild(imgHeading);
        }
    });
});
document.addEventListener('click',(e) => {
    if(e.target.className == 'close-btn') {
        e.target.parentNode.remove();
        // remove overlay
        document.querySelector('.popup-overlay').remove();
    }
})
// end gallery popup