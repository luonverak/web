const menu =[
    {
        'home':'Home',
        'item':[]
    },
    {
        'home':'Computer',
        'item':[
            {
                sub_menu:'Mac'
            },
            {
                sub_menu:'Asus'
            },
            {
                sub_menu:'MSI'
            },

        ]
    },
    {
        'home':'Phone',
        'item':[
            {
                sub_menu:'iPhone'
            },
            {
                sub_menu:'Samsung'
            },
            {
                sub_menu:'Vivo'
            },

        ]
    },
    {
        'home':'Follow Us',
        'item':[
            {
                sub_menu:'FB'
            },
            {
                sub_menu:'IG'
            }
        ]
    }
];
var text = '';
for(let i in menu){
    var submenu='';
    for(let sub of menu[i]['item']){
        submenu +=`<li>
                        <a href="#">${sub['sub_menu']}</a>
                    </li>`;
    }
    submenu =`
            <div class="sub-menu">
                <ul>
                    ${submenu}
                </ul>
            </div>
    `;
    text +=`<li><a href="#">${menu[i]['home']}</a>${submenu}</li>`;
}
document.getElementsByClassName('page-head')[0].innerHTML=`<ul>${text}</ul>`;
