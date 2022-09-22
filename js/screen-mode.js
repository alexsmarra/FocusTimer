export default function ScreenMode() {
   const htmlScreenMode = document.querySelector("html")
   const btnSun = document.querySelector(".sun")
   const btnMoon = document.querySelector(".moon")
   const toggleScreenModeAudio = new Audio("./sounds/ScreenMode.wav")
   
   function screenMode()  {
      htmlScreenMode.classList.toggle("dark-mode")
      btnSun.classList.toggle("hide")
      btnMoon.classList.toggle("hide")
      toggleScreenModeAudio.play()
   }
   
   btnSun.addEventListener("click", screenMode)
   btnMoon.addEventListener("click", screenMode)


   return {
      htmlScreenMode,
      btnSun,
      btnMoon,
      toggleScreenModeAudio,
      screenMode
   }
}

