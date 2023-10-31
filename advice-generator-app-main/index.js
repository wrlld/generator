function byclicking(){
    const button = document.querySelector(".dice");
    button.addEventListener("click", async function clicker(){
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const adviceNumber = document.querySelector(".advice-number");
    console.log(adviceNumber);
    const adviceSlip = document.querySelector("#advice-slip")
    if(data && data.slip){
        const id = data.slip.id;
        console.log(id);
        const advice = data.slip.advice;
        adviceNumber.textContent = `# ${id}`;
        adviceSlip.textContent = advice;
    }else{
        adviceNumber.textcontent = "advice not found"
        adviceSlip.textcontent = "";
    }
    });
    console.log(button);
}
byclicking();
