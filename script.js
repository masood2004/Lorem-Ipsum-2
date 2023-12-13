function clearerrors() {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function validateform() {
    var returnval = true;
    clearerrors();

    var name = document.forms['myform']["cname"].value;
    if (name.length < 5) {
        seterror("name", "*Invalid Name. Name should be at least 5 letters.");
        returnval = false;
    }
    var phone = document.forms['myform']["cphone"].value;
    if (phone.length < 11) {
        seterror("phone", "*Invalid Phone Number. Phone Number should be at least 11 digits.");
        returnval = false;
    }
    var message = document.forms['myform']["cmessage"].value;
    if (message.length < 50) {
        seterror("message", "*Message is Too Short. Message should be at least 50 letters.");
        returnval = false;
    }
    return returnval;
}

function myfunction(){
    var navbar = document.getElementById('navigation');
    navbar.classList.toggle('show');
}