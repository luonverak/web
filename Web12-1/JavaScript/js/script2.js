
var namee  = document.getElementById('name');
var gender = document.getElementById('gender');
var age    = document.getElementById('age');
var address= document.getElementById('address');
var profile= document.getElementById('profile');
var rowData='';

document.getElementById('btnAdd').addEventListener('click',function(){

    let _name    = namee.value;
    let _gender  = gender.value;
    let _age     = age.value;
    let _address = address.value;
    let _profile = profile.files[0];
    console.log(_profile);
    if(_name!="" && _gender!="" && _age!="" && _address!="" && _profile!=""){
        swal({
            title: "Success!",
            text: "Data has been insert to system !",
            icon: "success",
            button: "Aww yiss!",
          });
        rowData +=`
                <tr>
                    <td>${_name}</td>
                    <td>${_gender}</td>
                    <td>${_age}</td>
                    <td>${_address}</td>
                    <td>
                        <img id="thumbnail" src="${URL.createObjectURL(_profile)}" width="120" height="120" style="object-fit: cover;" alt="">
                    </td>
                </tr>
            `;
            document.getElementById('bodydata').innerHTML = rowData;
    }else{
        swal({
            title: "Error !",
            text: "Please your again !",
            icon: "error",
            button: "Yes !",
          });
    }
    clearField();
})

clearField=()=>{
    namee.value="";
    gender.value="";
    age.value="";
    address.value="";
    profile.value="";
}