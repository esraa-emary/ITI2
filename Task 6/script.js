// ************* part1 ****************

var win ;
var word = "typing message";
function openWindow(){
    win = open("index2.html","","width=300,height=300");
    var index = 0;
    let interval = setInterval(function () {
        if (index < word.length) {
            win.document.write(word[index]);
            index++;
        } else {
            clearInterval(interval); 
            win.close();
        }}, 500);
}

// ************* part2 ****************

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const address = document.getElementById('address').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    localStorage.setItem('name', name);
    localStorage.setItem('title', title);
    localStorage.setItem('address', address);
    localStorage.setItem('gender', gender);
    localStorage.setItem('email', email);
    localStorage.setItem('mobile', mobile);

    window.location.href = 'index2.html';
});
