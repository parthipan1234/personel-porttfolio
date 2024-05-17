const menu=document.querySelector("#menu-icon");
const nav=document.querySelector(".nav");
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}



function sendEmail(){
    let name=document.querySelector("#fullname").value;
let email=document.querySelector("#email").value;
let mobile=document.querySelector("#mobile").value;
let subject=document.querySelector("#subject").value;
let text=document.querySelector("#text").value;

let messageBody= "Name" + name+   
                  "Email" +email+ 
                  "mobile" +mobile+ 
                  "subject"+ subject+
                  "message"+ text;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tnspgaming2002@gmail.com",
        Password : "DF638D4CA34277FC0C49B289EAE37F8D676E",
        To : 'parthisen7339@gmail.com',
        From :email,
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => alert(message)
    );
}
