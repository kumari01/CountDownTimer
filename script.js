document.addEventListener("DOMContentLoaded",function()
{
    const timerElement = document.getElementById("timer");
    const startBtn = document.getElementById("startBtn");
    const resetBtn = document.getElementById("restart");
    window.scrollTo(0, 0);
    function updateTimer( timeLeft)
    {
        const hr = Math.floor(timeLeft/3600);
        const min = Math.floor((timeLeft%3600)/60);
        const sec = timeLeft%60;
        timerElement.children[0].textContent= String(hr).padStart(2,"0")
        timerElement.children[1].textContent= String(min).padStart(2,"0")
        timerElement.children[2].textContent =String(sec).padStart(2,"0")
        if(timeLeft>0)
        {
            timeLeft--;
        }
        return timeLeft;
    }
    startBtn.addEventListener("click",function (){
        const hours = parseInt(document.getElementById("hours").value);
        const minutes= parseInt(document.getElementById("minutes").value);
        const seconds = parseInt(document.getElementById("seconds").value);
        let timeLeft = hours *3600 + minutes *60+seconds;
        
        if(timeLeft<=0)
        {
            return;
        }
        document.querySelector(".countdownpage").scrollIntoView({
            behavior: "smooth",
            block: "start" 
        });
        const timerInterval =setInterval(function () {
            if(timeLeft===1)
            {
                setTimeout(function ()
            {
                alert("Time Over!!!");
            },1000);
            }
            timeLeft = updateTimer(timeLeft);
            if(timeLeft===0)
            {
                clearInterval(timerInterval);
            }
        },1000);
    });
    resetBtn.addEventListener("click", function() {
        // Reset the timer back to 00:00:00
        timerElement.children[0].textContent = '00'; 
        timerElement.children[1].textContent = '00'; 
        timerElement.children[2].textContent = '00'; 

        // Clear the input fields
        document.getElementById("hours").value = '';
        document.getElementById("minutes").value = '';
        document.getElementById("seconds").value = '';

        // Scroll back to the top of the page (timer input section)
        window.scrollTo(0, 0);
    });
});