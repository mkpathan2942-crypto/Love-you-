// General next function
let current = 1;
function next(id){
    document.getElementById('s'+current).classList.remove('active');
    current = id;
    document.getElementById('s'+current).classList.add('active');
}

// Password check
function checkPassword(){
    let val = document.getElementById('passwordInput').value;
    if(val==="Love you"){
        next(3);
    }else{
        alert("Oops! Galat password 💔 Try again 😜");
    }
}

// Running button
let runCount=0;
const runBtn=document.getElementById('runBtn');
function moveBtn(){
    if(runCount<5){
        let x=Math.random()*70;
        let y=Math.random()*70;
        runBtn.style.position="absolute";
        runBtn.style.left=x+"%";
        runBtn.style.top=y+"%";
        runCount++;
    }else{
        runBtn.style.position="static";
        runBtn.onclick=()=>next(6);
    }
}
runBtn.onclick=moveBtn;

// Surprise Yes/No trick
function increaseYes(){
    const btn=document.getElementById('yesBtn');
    let w=btn.offsetWidth;
    let h=btn.offsetHeight;
    btn.style.width=(w+20)+"px";
    btn.style.height=(h+10)+"px";
}

// Gift Box
function createHeart(){
    const heart = document.createElement('div');
    heart.className='heart';
    heart.style.left = Math.random()*90+"%";
    heart.style.top = Math.random()*90+"%";
    heart.innerText='💖';
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),2000);
}
function giftClicked(){
    for(let i=0;i<30;i++){
        setTimeout(createHeart,i*50);
    }
    setTimeout(()=>{
        document.getElementById('giftText').style.display='block';
        const nextBtn=document.createElement('button');
        nextBtn.innerText="Next 💖";
        nextBtn.onclick=()=>next(37);
        nextBtn.style.marginTop="20px";
        document.getElementById('s36').appendChild(nextBtn);
    },2000);
}
