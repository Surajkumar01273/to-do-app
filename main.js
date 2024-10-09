const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const button = document.querySelector('.btn');

button.addEventListener('click', function () {
    if (inputBox.value === '') {
        const invalidSMS = document.querySelector('.invalid-sms')
        invalidSMS.style.display = 'block'
    }
    else {
        const invalidSMS = document.querySelector('.invalid-sms')
        invalidSMS.style.display = 'none'
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ''
    sveData()
})

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        sveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        sveData()
    }
}, false);

function sveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()
