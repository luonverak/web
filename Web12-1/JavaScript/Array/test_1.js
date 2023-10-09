const menu =[
    {
        home:'Home',
        item : [
            {
                sub_menu : 'Computer'
            },
            {
                sub_menu : 'Mobile'
            },
            {
                sub_menu : 'Internet'
            }
        ]
    },
    {
        home:'Computer',
        item : [
            {
                sub_menu : 'Asus'
            },
            {
                sub_menu : 'MIS'
            },
            {
                sub_menu : 'Dell'
            }
        ]
    },
    {
        home:'Phone',
        item : [
            {
                sub_menu : 'Mobile'
            }
        ]
    },
    {
        home:'Computer Accessories',
        item : [
            {
                sub_menu : 'Desktop'
            },
            {
                sub_menu : 'Laptop'
            }
        ]
    },
    {
        home:'Phone Accessories',
        item : [
            {
                sub_menu : 'Mobile'
            }
        ]
    },
    {
        home:'Follow US',
        item : [

        ]
    }
];
var text='';
for(let i in menu){
    var submenu='';
    for(let sub of menu[i]['item']){
        submenu +=`<li><a href="#">${sub['sub_menu']}</a></li>`;
    }
    submenu =`
            <div class="sub-menu">
                <ul>
                    ${submenu}
                </ul>
            </div>
    `;
    text +=`<li>
                <a href="#">${menu[i]['home']}</a>
                ${submenu}
            </li>`;
}
document.getElementsByClassName('container')[0].innerHTML = `<ul>${text}</ul>`;
