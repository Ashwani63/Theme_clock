const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const time = document.getElementById('time');
const currDate= document.getElementById('date');
const circle= document.getElementById('circle');
const container= document.getElementById('container');



setInterval(() => {
    console.log("this is an analog clock")
    let date = new Date() ;
    // console.log(date)

    let hours = date.getHours() ;
    let minutes = date.getMinutes() ;
    let seconds = date.getSeconds() ;
    // let day = date.getDay() ;
    // let month = date.getMonth() ;
    // console.log(hours , minutes , seconds ) ;

    time.innerHTML = `${hours} : ${minutes % 60}` ;
    // currDate.innerHTML = `${day}   ${month}` ;

    let sRotate = 6*seconds ;
    let mRotate = 6*minutes  ;
    let hRotate = 30*hours  ;


    hour.style.transform = `rotate(${hRotate}deg)` ;
    minute.style.transform = `rotate(${mRotate}deg)` ;
    second.style.transform = `rotate(${sRotate}deg)` ;

}, 1000);


const btn = document.getElementById('btn') ;
const parent= document.getElementById('parent');

btn.addEventListener('click', (e)=>{
    console.log("hello")
    if(btn.innerText === 'Dark Mode'){
       document.body.style.backgroundColor = 'black' ;
       hour.style.backgroundColor = 'white' ;
       hour.style.border = '1px solid white' ;
       minute.style.backgroundColor = 'white' ;
       minute.style.border = '1px solid white' ;
       second.style.backgroundColor = 'white' ;
       second.style.border = '1px solid white' ;
       circle.style.backgroundColor = 'white' ;
       circle.style.border = '1px solid white' ;
       container.style.border = '1px solid white'  ;
       btn.style.color = 'white' ;
       btn.style.border = '1px solid white' ;
       btn.innerText = 'Light Mode' ;
       time.style.color = 'white' ;
    }
    else if (btn.innerText === 'Light Mode') {
        document.body.style.backgroundColor = 'white' ;
        hour.style.backgroundColor = 'black' ;
        hour.style.border = '1px solid black' ;
        minute.style.backgroundColor = 'black' ;
        minute.style.border = '1px solid black' ;
        second.style.backgroundColor = 'black' ;
        second.style.border = '1px solid black' ;
        circle.style.backgroundColor = 'black' ;
        // circle.style.border = '1px solid black' ;
       container.style.border = '1px solid black'  ;
       btn.style.color = 'white' ;
       btn.style.border = '1px solid black' ;
       btn.innerText = 'Dark Mode' ;
       time.style.color = 'black' ;
    }
})


