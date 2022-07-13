const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const allPages = document.querySelector('.active-pages');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf68oh1kAL6nXQgMMtONiHkB31wTDCfuA",
  authDomain: "portfolio-contact-form-42b3e.firebaseapp.com",
  projectId: "portfolio-contact-form-42b3e",
  databaseURL: "https://portfolio-contact-form-42b3e-default-rtdb.firebaseio.com/",
  storageBucket: "portfolio-contact-form-42b3e.appspot.com",
  messagingSenderId: "249715377698",
  appId: "1:249715377698:web:6d771391052f05fee8ec7b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference contactInfo collections
let contactInfo = firebase.database().ref("contactForm");


//contact form
//listen for a submit
function submitForm(e){
    //e.preventDefault();
    //get user input values

    //let name = document.querySelector(".name").value;
    let subject = document.querySelector(".subject").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    console.log(name,subject,email,message)
    saveContactInfo(name,subject,email,message);
}

//save info to firebase

function saveContactInfo(name,subject,email,message){
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        subject: subject,
        email: email,
        message: message
    });
}


//Button click active class
function PageTransitions(){
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currBtn = document.querySelectorAll('.active-btn');
            currBtn[0].className = currBtn[0].className.replace('active-btn',"")
            this.className += ' active-btn';
        })
    }

    //sections active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other buttons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id)
            element.classList.add('active')
        }
    })

    //toggle theme button

    const themeBtn = document.querySelector('.theme-btn')
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')

    })

}


document.querySelector(".contact-form").addEventListener(".main-btn",submitForm);
PageTransitions();