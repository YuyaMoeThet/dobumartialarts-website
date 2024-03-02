
    function a(event){
        event.preventDefault(); // Prevebt firn submission 
        var p_user="admin";
        var p_email="admin@gmail.com";
        var p_pass="12345";

        var user=document.getElementById("username").value;
        var email=document.getElementById("email").value;
        var pass=document.getElementById("password").value;

        if(p_user==user, p_email==email && p_pass==pass){
            window.location.href='Table.html';
        }

        else{
            alert("Login fail");
        }
    }

