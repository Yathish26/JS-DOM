let count = 1;

const plus = ()=>{
    count++
    document.getElementById('number').innerText = count;

    if(count>1){
        const total = new XMLHttpRequest;
        total.onload = function(){
            document.getElementById('total-container').innerHTML = this.responseText;
        }
        total.open('GET', 'https://instagram.com', true);
        total.send();
    }
}

const minus = ()=>{
    if(count>0){
    count--
    document.getElementById('number').innerText = count;
    }
}

const reset=()=>{
    count = 0;
    document.getElementById('number').innerHTML = 0;
}



