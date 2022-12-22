
let cost=0;

function add(amt){
    cost=cost+amt;
}
function display(obj){
    obj.style.display='block';
}
function display_item(obj1,obj2,obj){
    obj.innerHTML+=obj1;
    obj.innerHTML+=" : Rs. "+obj2+"<br>";
}

function display_cart(obj){
    obj.innerHTML+="CART TOTAL : Rs. "+cost;
}

function changetext(obj){
    obj.innerHTML="SELECTED";
}