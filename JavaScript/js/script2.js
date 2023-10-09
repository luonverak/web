
var username = document.getElementById('username');
var password = document.getElementById('password');

login=(username,password)=>{
    if(username!="" && password!=""){
        if(username=='admin@gmail.com' && password=='123'){
            swal({
                title: "Login Success!",
                text: "Account has been login!",
                icon: "success",
                button: "Aww yiss!",
            }).then((result) => {
                if(result){
                    window.location.href='index.html';
                }
            }).catch((err) => {
                if(err){
                    swal({
                        title: "Login Success!",
                        text: "Account has been login!",
                        icon: "success",
                        button: "Aww yiss!",
                    });
                }
            });
        }else{
            swal({
                title: "Field !",
                text: "Please try again !",
                icon: "error",
                button: "Yes !",
            });
        }
    }else{
        swal({
            title: "Field !",
            text: "Please complete all again !",
            icon: "error",
            button: "Yes !",
        });
    }

}

document.getElementById('btn_login').addEventListener('click',function(){

    let _username = username.value;
    let _password = password.value;
    login(_username,_password);

})