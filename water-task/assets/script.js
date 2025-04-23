const glasses = document.querySelectorAll(".glass");
const main_glass = document.querySelector(".main_glass");
const partRemain = document.querySelector(".part_remain");
const partPercent = document.querySelector(".part_percent");

glasses.forEach((glass, index) => {            //index-ine gore necencine kliklendiyini bilecik
  glass.addEventListener("click", () => {
    glasses.forEach((g, i) => {               //ilk foreach her bir glass-a catmaq ucun, ikinci onun uzerinde emeliyyat ucun
      if (i <= index) {
        g.classList.add("miniFull");         
      } else {
        g.classList.remove("miniFull");
      }
    });

    const filledCount = index + 1;     //say alaq deye
    const total = glasses.length;      //8i alaq deye
    const percent = (filledCount / total) * 100;   //faiz
    const remain = 2 - (filledCount * 0.25);       //yerde qalan litr

    partRemain.innerHTML = `${remain.toFixed(2)}L<br>Remained`;
    partPercent.textContent = `${percent}%`;

    if (filledCount === 0) {
      partPercent.style.display = "none";
    } 
    // else if(filledCount===total){
    //     main_glass.classList.add("mainFull")
    // }
    else {
      partPercent.style.display = "flex";
    }
    partPercent.style.height=`${percent}%`
  });
});
