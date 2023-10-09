const url = "https://fakestoreapi.com/products?limit=6";
var txt='';
const fetchData =async ()=>{
    try {
        const response=await fetch(url);
        const data =await response.json();
        for(let item of data){
            txt +=`<div class="card">
                    <div class="thumbnail">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="detail">
                        <h3>${item.title}</h3>
                        <h3>Price ${item.price}$</h3>
                        <p>Rate ${item.rating['rate']}</p>
                    </div>
                </div>`;
        }
        document.getElementsByClassName('container')[0].innerHTML=txt;
    } catch(err) {
        console.log(err);
    }

}
fetchData();

const menu = [
    {
        'page-menu':'Home'
    },
    {
        'page-menu':'Men'
    },
    {
        'page-menu':'Women'
    },
    {
        'page-menu':'Children'
    },
    {
        'page-menu':'Contact'
    },
];
var pageMenu='';
for(let i in menu){
    pageMenu +=`<li><a href="#">${menu[i]['page-menu']}</a></li>`;
}
document.getElementsByClassName('page-menu')[0].innerHTML=`<ul>${pageMenu}</ul>`;

const pageName=[
    {
        pagename : 'Fashion Store'
    }
];

for(let i in pageName){
    var pagename=pageName[i]['pagename'];
}
document.getElementById('page-name').innerHTML=pagename;

const logo=[
    {
        'id':'images/logo2.png'
    }
];
var pageLogo='';
for(let i in logo){
    pageLogo=`<img src="${logo[i]['id']}" alt="">`;
}
document.getElementsByClassName('logo')[0].innerHTML=pageLogo;
document.getElementsByClassName('footer-logo')[0].innerHTML=pageLogo;

const address=[
    {
        'address':'At Toek Thla, Phnom Penh, Cambodia'
    }
];
var _address='';
for(let i in address){
    _address=`<p>${address[i]['address']}</p>`;
}
document.getElementsByClassName('place')[0].innerHTML=_address;

const social=[
    {
        'follow':'images/facebook.png',
        'url':'https://web.facebook.com/luonverak.dev'
    },
    {
        'follow':'images/instagram.png',
        'url':'https://web.facebook.com/luonverak.dev'
    },
    {
        'follow':'images/whatsapp.png',
        'url':'https://web.facebook.com/luonverak.dev'
    },
];
var link='';
for(let i in social){
    link += `<a href="${social[i]['url']}" target="_blank">
                <img src="${social[i]['follow']}" alt="">
            </a>`;
}
document.getElementsByClassName('label')[0].innerHTML=link;


const search=async()=>{
    const response=await fetch(url);
    const data =await response.json();
    const list = [...new Set(data.map((item)=>{
        return item;
    }))];
    console.log(list)
    document.getElementById('search').addEventListener('keyup',(e)=>{
        const searchData = e.target.value.toLowerCase();
        const filterData = list.filter((item)=>{
            return item.title.toLowerCase().includes(searchData);
        });
        displayItem(filterData);
    });
    const displayItem=((item)=>{
        document.getElementById('root').innerHTML = item.map((item)=>{
            const {image,title,price,rating}=item;
            return (`
                    <div class="card">
                        <div class="thumbnail">
                            <img src="${image}" alt="">
                        </div>
                        <div class="detail">
                            <h3>${title}</h3>
                            <h3>Price ${price}$</h3>
                            <p>Rate ${rating['rate']}</p>
                        </div>
                    </div>
            `);
        }).join('');
    })
}
search();