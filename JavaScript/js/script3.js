
var firstname = document.getElementById('firstname');
var lastname  = document.getElementById('lastname');
var email     = document.getElementById('email');
var profile   = document.getElementById('profile');
var rowData='';
document.getElementById('btn_save').addEventListener('click',function(){
    let _firstname = firstname.value;
    let _lastname  = lastname.value;
    let _email     = email.value;
    let _profile   = profile.files[0];
    console.log(_profile);
    if(_firstname!="" && _lastname!="" && _email!="" && _profile!="" )
    {
        rowData+=`
        <tr>
            <td>${_firstname}</td>
            <td>${_lastname}</td>
            <td>${_email}</td>
            <td>
                <img src="${URL.createObjectURL(_profile)}" width="120" height="120" style="object-fit: cover;" alt="">
            </td>
        </tr>
        `;
        document.getElementById('table').innerHTML = rowData;
        swal({
            title: "Success !",
            text: "Data has been insert to system !",
            icon: "success",
            button: "Aww yiss!",
          });
    }else{
        swal({
            title: "Error !",
            text: "Data can't insert to system !",
            icon: "error",
            button: "Aww yiss!",
          });
    }
    clearField();
})
clearField=()=>{
    firstname.value="";
    lastname.value="";
    email.value="";
    profile.value="";
}