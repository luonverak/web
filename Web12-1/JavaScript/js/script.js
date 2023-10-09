
var username = document.getElementById('username');
var password = document.getElementById('password');

login=()=>{

    let pass='123';
    let user='admin@gmail.com';
    if(username.value!="" && password!=""){
        if(username.value==user && password.value==pass){
                swal({
                    title: "Login Success !",
                    text: "Account has been login!",
                    icon: "success",
                    button: "Aww yiss!",
                }).then((result) => {
                    if(result){
                        window.location.href='dasboard.html';
                    }
                }).catch((err) => {
                    if(err){
                        swal({
                            title: "Login Field !",
                            text: "Have somethings wrong!",
                            icon: "error",
                            button: "Aww yiss!",
                          });
                    }
                });
        }else{
            swal({
                title: "Login Field !",
                text: "Have somethings wrong!",
                icon: "error",
                button: "Aww yiss!",
              });
        }
    }else{
        swal({
            title: "Field !",
            text: "Can't login!",
            icon: "error",
            button: "Aww yiss!",
          });
    }

}