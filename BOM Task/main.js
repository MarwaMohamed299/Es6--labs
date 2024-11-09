//1-Create a new page that has a textbox, and alert the code of key pressed on a textbox, and which mouse button clicked on it.

function getPressedKey(ev){
alert(ev.code);
}


// 1-On the same page, Make a button (Start clock), that showing alert 
//saying “Clock Started” and displays clock with current time in local format (time only without date) in a div updated every second.
// a.Handle the onclick event of the (start clock) button using JavaScript (Not in the input tag).
// b.Stop the clock when user clicks (alt + w) letter, and show alert saying “Clock stopped”.

let clockInterval ;

function startClock(){
    alert(" Clock Started" );
    clockInterval = setInterval(()=>{
        let date = new Date();
        document.getElementById("clock").innerText = date.toLocaleTimeString();
    }, 1000);
}

function closeClock(){
    clearInterval(clockInterval);
alert("Clock Stopped");
}

function stopClock() {
    clearInterval(clockInterval);
    alert("Clock Stopped");
}

document.addEventListener('keydown', (event) => {
    if (event.altKey && event.key === 'w') {
        stopClock();
    }
});




// 1-Create a page that contains 3 images, and use JavaScript Code (not in HTML tag) to handle onclick event on all of them, to increase 
//a counter when each image is clicked.
// a.Use addEventListner to add new handler for the onclick event listener,
// to alert the score (the value of the counter), when any image of them clicked.
// i.What’s the difference between handling the event using addEventListner() and other methods?
// ii.Will addEventListner() will overwrite the other handler function attached to that button before?
// iii.How does addEventListner() handles the event bubbling in better way?
// b.After 3 seconds (Use setTimeOut), use removeEventListner to remove the
// last event handler onclick that alerts the user score, and instead of it add new handler 
//(Using addEventListner), that shows new alert saying “Game Over”.

let counter = 0;
function updateCounter(){
    counter++;
    document.getElementById('score').innerText = `score = ${counter}` ; 
}

function alertScore() {
     alert(`Score: ${counter}`);
} 

function gameOver(){
alert("Game Over");
}


document.getElementById('img1').addEventListener('click',updateCounter)
document.getElementById('img1').addEventListener('click', alertScore);

document.getElementById('img2').addEventListener('click',updateCounter)
document.getElementById('img2').addEventListener('click', alertScore);

document.getElementById('img3').addEventListener('click',updateCounter)
document.getElementById('img3').addEventListener('click', alertScore);


// 2-Create a login form that redirect to another page when user submit the form, 
// and put in this form textbox (user name) and password field (password) 
// [textboxes must have name attribute] and button (login). User name text has default text
//  “Enter your user name here”, when user clicks login he will be redirected to another page (the page given in the form action), 
//  use get method and on the other page get the user name (from the browser URL) and write on the page welcome
//   + User Name in bold and big font letters.




function login(){
    location.replace('test.html')
}
