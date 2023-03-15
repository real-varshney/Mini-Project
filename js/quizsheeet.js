
let userlink = document.getElementById('user');
let signoutlink = document.getElementById('signout');
var currentuser = null;
const capitalizeFirstLetter = ([first, ...rest], locale = navigator.language) =>
    first === undefined ? '' : first.toLocaleUpperCase(locale) + rest.join('')

function getusername() {
    let keeploggedin = localStorage.getItem("keeploggedin");

    if (keeploggedin == "yes") {
        currentuser = JSON.parse(localStorage.getItem('user'));
    }
    else {
        currentuser = JSON.parse(sessionStorage.getItem('user'));
    }
}

function signout() {
    sessionStorage.removeItem('user');
    localStorage.removeItem('user');
    localStorage.removeItem('keeploggedin');
    window.location = "index.html";
}

window.onload = function () {
    getusername();
    if (currentuser == null) {
        userlink.innerText = "Create New Account";
        userlink.classList.add('btn', 'btn-primary');
        userlink.href = "Signin.html";

        signoutlink.innerText = "Login";
        signoutlink.classList.add('btn', 'btn-success');
        signoutlink.href = "login2.html";
    }
    else {
        const user = currentuser.username;
        userlink.innerText = capitalizeFirstLetter(currentuser.username)+'🧔🏻‍♂️';
        userlink.classList.add('badge');

        signoutlink.innerText = "Sign out 🚪";
        signoutlink.classList.add('btn', 'btn-secondary');
        signoutlink.href = "javascript:signout() ";


    }
}


const value = JSON.parse(sessionStorage.getItem('quesno'));
function addCode(count) {
    document.getElementById("main").innerHTML +=
        `        <div id="que">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Question ${count}</span>
                </div>
                <textarea class="form-control" aria-label="With textarea" placeholder="Add Question..." id="pl${count}"></textarea>
            </div>
    
    
            <div class="container mx-0 px-0 mt-3">
                <div class="row">
                    <div class="col-sm">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1" >OPTION A</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Option" aria-label="Username"
                                aria-describedby="basic-addon1" id="opt1-${count}">
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">OPTION B</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Option" aria-label="Username"
                                aria-describedby="basic-addon1" id="opt2-${count}">
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">OPTION C</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Option" aria-label="Username"
                                aria-describedby="basic-addon1" id="opt3-${count}">
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">OPTION D</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Option" aria-label="Username"
                                aria-describedby="basic-addon1" id="opt4-${count}">
                        </div>
                    </div>
                </div>
            </div>
            <fieldset class="form-group row anno">
                <legend class="col-form-label col-sm-2 float-sm-left pt-0 " style="font-size: 1.5rem;"> Correct Answer:</h4></legend>
                <div class="col-sm-10 dis">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios-${count}" id="gridRadios1" value="option1">
                    <label class="form-check-label mr-3" for="gridRadios1">
                     OPTION A 
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios-${count}" id="gridRadios2" value="option2">
                    <label class="form-check-label" for="gridRadios2">
                        OPTION B
                    </label>
                  </div>
                  <div class="form-check disabled">
                    <input class="form-check-input" type="radio" name="gridRadios-${count}" id="gridRadios3" value="option3">
                    <label class="form-check-label" for="gridRadios3">
                        OPTION C
                    </label>
                  </div>
                  <div class="form-check disabled">
                    <input class="form-check-input" type="radio" name="gridRadios-${count}" id="gridRadios3" value="option4">
                    <label class="form-check-label" for="gridRadios3">
                        OPTION D
                    </label>
                  </div>
                </div>
              </fieldset>
        </div>`;
}




import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import { getFirestore, collection, getDocs, addDoc, doc,setDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDwquClXelyimODKdx5YtafUJA2xBa_iy0",
    authDomain: "scrutiny-42e5b.firebaseapp.com",
    databaseURL: "https://scrutiny-42e5b-default-rtdb.firebaseio.com",
    projectId: "scrutiny-42e5b",
    storageBucket: "scrutiny-42e5b.appspot.com",
    messagingSenderId: "706713208040",
    appId: "1:706713208040:web:85dbcdf6f73ffb54fc755d",
    measurementId: "G-HY0Y3GYKDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// var crans = "Cant find";



for (var i = 1; i <= value; i++) {
    addCode(i);

}



var submit = document.getElementById('subm');
// var ele = document.getElementsByClassName('grd');
// var crans = document.getElementById

firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const quizname = JSON.parse(sessionStorage.getItem('quizname'));

submit.addEventListener('click', async () => {
    try {
        for (var i = 1; i <= value; i++) {

            var que = document.getElementById(`pl${i}`);
            var opt1 = document.getElementById(`opt1-${i}`);
            var opt2 = document.getElementById(`opt2-${i}`);
            var opt3 = document.getElementById(`opt3-${i}`);
            var opt4 = document.getElementById(`opt4-${i}`);
            var radios = document.getElementsByName(`gridRadios-${i}`);
            var crans = "";
            for (var radio of radios) {
                if (radio.checked) {
                    crans = radio.value;
                    console.log(crans);
                }
            }

            
            const docRef = await addDoc(collection(db, currentuser.username, quizname, `Q${i}`), {

                question: que.value,
                option1: opt1.value,
                option2: opt2.value,
                option3: opt3.value,
                option4: opt4.value,
                crans: crans,

            });

        };
             const re = await setDoc(doc(db, "QUIZ", quizname),{
                Creator : currentuser.username,
             });

        alert("Data added successfully", que);
        window.location = "index.html";

    } catch (e) {
        console.error("Error adding document: ", e);
    }
});
