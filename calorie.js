const Name=document.getElementById('input1');
Name.addEventListener('keyup',runevent);


const input2=document.getElementById('input2');
const input3=document.getElementById('input3');
const input4=document.getElementById('input4');

// input1.addEventListener('keyup',runevent);
input2.addEventListener('mouseleave',runevent2);
input3.addEventListener('mouseleave',runevent2);
input4.addEventListener('mouseleave',runevent2);
// input3.addEventListener('keyup',runevent);

const submit=document.getElementById('button');
submit.addEventListener('click',runevent3);



let total = 0;
let name1;
function runevent(e){
    e.preventDefault();
    name1=e.target.value;
    // console.log(name1);
}

function runevent2(e){
    e.preventDefault();
    // console.log("ok");
    console.log(e.target.value);
    total=total+parseInt(e.target.value);
}

function runevent3(e){
    e.preventDefault();
    // console.log("lol");
    const card = document.getElementById('cb');
    document.getElementById('form').style.display='none';
    
    var n=document.createElement('div');
    var act=2200-total;
    var res=`${name1}, your calorie intake is ${total}. Average Indian has an intake of 2200 kcal,you should ramp up your diet with ${act} kcal. Stay healthy😊`;
    var nt=document.createTextNode(res);
    // n.classList.add('container','card', 'border-dark', 'h-100');
    n.className='mb-3';
    n.classList.add('h3');
    n.appendChild(nt);
    card.insertBefore(n,form);
    console.log(name1);
    console.log(total);
}