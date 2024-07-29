let skills = document.getElementById('skills');
    let experience = document.getElementById('experience');
    let education = document.getElementById('education');

    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(education).classlist.add("active-tab");
    }
    var nameerror = document.getElementById('name-error');
    var emailerror = document.getElementById('email-error');
    var messageerror = document.getElementById('message-error');

    function validateName (){
        var name = document.getElementById('fname').value;
        if(name.length == 0){
            nameerror.innerHTML = 'full name is required';
            return false;
        }
        if (!name.match(/^[a-z,.'-]+$/i)){
            nameerror.innerHTML = 'write full name';
            return false;
        }
        else nameerror.innerHTML = <i class="fa-solid fa-check"></i>;
        return true;
    }
    function validationEmail (){
        var email = document.getElementById('fmail').value;
        if(email.length == 0){
            emailerror.innerHTML = 'email is required';
            return false;
         }
         if(!email.match(/^[a-zA-Z0-9_-]+@[a-zA-Z]){2,4}$/)){
            emailerror.innerHTML = 'Email format invalid'
            return false;
         }
         else emailerror.innerHTML = ' <i class="fa-solid fa-check"></i>';
         return true;
    }

    var sidemenu = document.getElementById("sidemenu");
    
