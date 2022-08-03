const employeeDetail = [];
const vehicleDetail = [];
console.log(2/0);
let enteredPassword = null;

const fullNameBlock = document.querySelector(".full-name");
const genderBlock = document.querySelector(".form-gender1");
const emailBlock = document.querySelector(".form-email");
const passwordBlock = document.querySelector(".form-password");
const passConfirmBlock = document.querySelector(".form-confirm");
const phoneBlock = document.querySelector(".form-phone");

const fullName = document.querySelector("#full-name");
const genderMale = document.querySelector("#male");
const genderFemale = document.querySelector("#female");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const passConfirm = document.querySelector("#conf-pass");
const phoneNumber = document.querySelector("#phNo");

let empLabel = document.querySelector('#empLabel');
let permanentLabel = "";

fullName.addEventListener('keypress', onFullName);
genderMale.addEventListener('click', onGender);
genderFemale.addEventListener('click', onGender);
email.addEventListener('keypress', onEmail);
password.addEventListener('keyup', onPassword);
passConfirm.addEventListener('keypress', onConfirmPassword);
phoneNumber.addEventListener('keypress',onPhone);

function onFullName(event) {
    const tv = event.target.value;
    if(tv.length > 2 ){
        if(event.keyCode > 47 && event.keyCode < 57){
            event.preventDefault();
        }else{
            if (event.key == 'Enter') {
                employeeDetail.push(tv);
                fullNameBlock.classList.toggle("show-input");
                genderBlock.classList.toggle("show-input");
                permanentLabel += empLabel.innerHTML + `${event.target.value}.`;
                empLabel.innerHTML = permanentLabel + ` can i know your gender?`;
            }
        }
        
    }
}

function onGender(event) {
    employeeDetail.push(event.target.value);
    genderBlock.classList.toggle("show-input");
    emailBlock.classList.toggle("show-input");
    empLabel.innerHTML = permanentLabel + " please Enter email.";
}

function onEmail(event) {
    const matchEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(event.target.value.match(matchEmail)){
        email.style.border = '1px solid green';
        if (event.key == 'Enter') {
            employeeDetail.push(event.target.value);
            emailBlock.classList.toggle("show-input");
            passwordBlock.classList.toggle("show-input");
            empLabel.innerHTML = permanentLabel + " please Enter password.";
        }
    }else{
        email.style.border = '1px solid red';
    }
}

function onPassword(event) {
    const tv = event.target.value;
    
    if (tv.length >= 8) {
        password.style.border = '1px solid red';
        if (tv.includes('1')||tv.includes('2')||tv.includes('3')||tv.includes('4')||tv.includes('5')||tv.includes('6')||tv.includes('7')||tv.includes('8')||tv.includes('9')||tv.includes('0')) {
            password.style.border = '1px solid orange';
            if (tv.includes('!')||tv.includes('@')||tv.includes('#')||tv.includes('$')||tv.includes('^')||tv.includes('&')||tv.includes('*')||tv.includes('(')||tv.includes(')')) {
                password.style.border = '1px solid green';
            }
        }
        if (event.key == 'Enter') {
            enteredPassword = tv;
            employeeDetail.push(enteredPassword);
            passwordBlock.classList.toggle("show-input");
            passConfirmBlock.classList.toggle("show-input");
            empLabel.innerHTML = permanentLabel + " please confirm password.";
        }
    }
}

function onConfirmPassword(event) {
    const tv = event.target.value;
    
    if (tv.length >= 8) {
        passConfirm.style.border = '1px solid red';
        if (tv.includes('1')||tv.includes('2')||tv.includes('3')||tv.includes('4')||tv.includes('5')||tv.includes('6')||tv.includes('7')||tv.includes('8')||tv.includes('9')||tv.includes('0')) {
            passConfirm.style.border = '1px solid orange';
            if (tv.includes('!')||tv.includes('@')||tv.includes('#')||tv.includes('$')||tv.includes('^')||tv.includes('&')||tv.includes('*')||tv.includes('(')||tv.includes(')')) {
                passConfirm.style.border = '1px solid green';
            }
        }
        if (event.key == 'Enter') {
            if(tv == enteredPassword){
                passConfirmBlock.classList.toggle("show-input");
                phoneBlock.classList.toggle("show-input");
                empLabel.innerHTML = permanentLabel + " please Enter Phone Number.";
            }else{
                empLabel.innerHTML = permanentLabel + " password doesn't matching. please confirm password."
            }
        }
    }
}

function onPhone(event){
    const empCheck = document.querySelector("#emp");
    if(event.target.value > 8){
        if(event.key == 'Enter'){
            employeeDetail.push(event.target.value);
            empLabel.innerHTML = permanentLabel + " You are successfully registered!"
            phoneBlock.classList.toggle("show-input");
            empCheck.toggleAttribute("checked");
        }
    }
}

const companyBlock = document.querySelector(".company-block");
const modelBlock = document.querySelector(".vehicle-model-block");
const typeBlock = document.querySelector(".vehicle-type-block");
const numberBlock = document.querySelector(".vehicle-number-block");
const idBlock = document.querySelector(".employee-id-block");
const identificationBlock = document.querySelector(".identification-block");
const priceBlock = document.querySelector(".employee-price-block");

const company = document.querySelector("#company");
const model = document.querySelector("#model");
const cycle = document.querySelector("#cycle");
const motorcycle = document.querySelector("#motorcycle");
const fourwheeler = document.querySelector("#fourwheeler");
const number = document.querySelector("#v-number");
const id = document.querySelector("#emp-id");
const identification = document.querySelector("#identify");
const price = document.querySelector("#price");
const vehiCheck = document.querySelector("#vehi");
const vehiLabel =document.querySelector("#vehi-label");
console.log(vehiLabel);


company.addEventListener('keypress',onCompany);
model.addEventListener('keypress',onModel);
cycle.addEventListener('click',onType);
motorcycle.addEventListener('click',onType);
fourwheeler.addEventListener('click',onType);
number.addEventListener('keypress',onNumber);
id.addEventListener('keypress',onId);
identification.addEventListener("keypress",onIdentification);
price.addEventListener("change",onPrice);


function onCompany(event){
    if(event.key == "Enter"){
        vehicleDetail.push(event.target.value);
        companyBlock.classList.toggle("show-input");
        modelBlock.classList.toggle("show-input");
    }
}
function onModel(event){
    if(event.key == "Enter"){
        vehicleDetail.push(event.target.value);
        modelBlock.classList.toggle("show-input");
        typeBlock.classList.toggle("show-input");
    }
}
function onType(event){
    if(event.target.value == 'cycle'){
        price.innerHTML = `<option value="5">5$ or ${(5*133.18).toFixed(2)} yen Daily</option>
        <option value="100">100$ or ${(100*133.18).toFixed(2)} yen per Month</option>
        <option value="500">500$ or ${(500*133.18).toFixed(2)} yen per Year</option>`;
    }else if(event.target.value == 'motorcycle'){
        price.innerHTML = `<option value="10">10$ or ${(10*133.18).toFixed(2)} yen Daily</option>
        <option value="200">200$ or ${(200*133.18).toFixed(2)} yen per Month</option>
        <option value="1000">1000$ or ${(1000*133.18).toFixed(2)} yen per Year</option>`;
    }else{
        price.innerHTML = `<option value="20">20$ or ${(20*133.18).toFixed(2)} yen Daily</option>
        <option value="500">500$ or ${(500*133.18).toFixed(2)} yen per Month</option>
        <option value="3500">3500$ or ${(3500*133.18).toFixed(2)} yen per Year</option>`;
    }
    vehicleDetail.push(event.target.value);
    typeBlock.classList.toggle("show-input");
    numberBlock.classList.toggle("show-input");
}
function onNumber(event){
    if(event.key == "Enter"){
        vehicleDetail.push(event.target.value);
        numberBlock.classList.toggle("show-input");
        idBlock.classList.toggle("show-input");
    }
}
function onId(event){
    if(event.key == "Enter"){
        vehicleDetail.push(event.target.value);
        idBlock.classList.toggle("show-input");
        identificationBlock.classList.toggle("show-input");
    }
}
function onIdentification(event){
    if (event.key === "Enter" && !event.shiftKey) {
        vehicleDetail.push(event.target.value);
        identificationBlock.classList.toggle("show-input");
        priceBlock.classList.toggle("show-input");
    }
}
function onPrice(event){
    vehicleDetail.push(event.target.value);
    priceBlock.classList.toggle("show-input");
    console.log(vehicleDetail);
    vehiLabel.innerHTML = `Your Vehicle Details:<br>
                            Vehicle Company: ${vehicleDetail[0]}<br>
                            Vehicle Model: ${vehicleDetail[1]}<br>
                            Vehicle Type: ${vehicleDetail[2]}<br>
                            Vehicle Number: ${vehicleDetail[3]}<br>
                            Employee ID: ${vehicleDetail[4]}<br>
                            Vehicle Identification: ${vehicleDetail[5]}<br>
                            Your Plan: ${vehicleDetail[6]}`;
    vehiCheck.toggleAttribute("checked");
}

console.log(document.getElementById("price").innerHTML);