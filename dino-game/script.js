const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let position = 0;
let contCactus = 0;

let isJumping = false;

function renderKeyDown(event){
    if(event.keyCode === 32){
        if(document.querySelector('.game-over')){
            window.location.reload();
        }else{
            if(!isJumping){
                jump()
            }
        }
    }
}

function jump(){

    isJumping = true;

    let upInterval = setInterval(() => {
        
        if(position >= 140){
            clearInterval(upInterval)
            let downInterval = setInterval(() => {

                if(position == 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20)
        }else{
            position += 20;
            dino.style.bottom = position + 'px'; 
        }
    }, 20)
}

function generateCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randonTime = Math.random() * 2000;

    cactus.classList.add("cactus");
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
            contCactus++;
            setTimeout(generateCactus, randonTime);
        }else if(cactusPosition > 0 && cactusPosition <= 60 && position < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo<h1><h2 class="game-over">Score: '+contCactus+'</h2>';
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20)
}

generateCactus();
document.addEventListener("keydown", renderKeyDown);

