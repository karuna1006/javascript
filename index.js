window.addEventListener("load",() => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#0000ff",
        "#adff2f",
        "#dc143c",
        "#b8860b",
        "#00bfff",
        "#ee82ee"
    ];

    var i=10;
    pads.forEach((pad, index) => {
        
        pad.addEventListener("click", function() {
            if(i!=10){sounds[i].pause();}
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);
            i = index;
            
        });
        
        sounds[index].currentTime = 0;
    });

    const createBubble = index => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 2s ease';
        bubble.style.animationIterationCount = 1;
       
    };

});
