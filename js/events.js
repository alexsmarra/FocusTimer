import Sounds from "./sounds.js"
const sounds = Sounds()

export default function ({
   timer,
   btnPlay,
   btnStop,
   btnPlus,
   btnMinus,
   cardForest,
   forestInput,
   cardFireplace,
   fireplaceInput,
   cardRain,
   rainInput,
   cardFair,
   fairInput
}) {
   function btnDisabled(btn) {
      btn.disabled = true
   }

   function btnEnabled(btn) {
      btn.disabled = false
   }

   btnPlay.addEventListener("click", () => {
      timer.countDown()
      btnDisabled(btnPlay)
      sounds.pressTimerBtn()
   })

   btnStop.addEventListener("click", () => {
      timer.reset()
      btnEnabled(btnPlay)
      sounds.pressTimerBtn()
   })

   btnPlus.addEventListener("click", () => {
      timer.plusFive()
      sounds.pressTimerBtn()
   })

   btnMinus.addEventListener("click", () => {
      timer.minusFive()
      sounds.pressTimerBtn()
   })

   cardForest.addEventListener("click", () => {
      sounds.forestAudio.play()
      sounds.fireplaceAudio.pause()
      sounds.coffeShopAudio.pause()
      sounds.rainAudio.pause()
      cardForest.classList.add("card-clicked")
      cardFireplace.classList.remove("card-clicked")
      cardRain.classList.remove("card-clicked")
      cardFair.classList.remove("card-clicked")
   })

   forestInput.addEventListener("input", () => {
      sounds.forestAudio.volume = forestInput.value
   })

   cardFireplace.addEventListener("click", () => {
      sounds.fireplaceAudio.play()
      sounds.forestAudio.pause()
      sounds.coffeShopAudio.pause()
      sounds.rainAudio.pause()
      cardFireplace.classList.add("card-clicked")
      cardForest.classList.remove("card-clicked")
      cardRain.classList.remove("card-clicked")
      cardFair.classList.remove("card-clicked")
   })

   fireplaceInput.addEventListener("input", () => {
      sounds.fireplaceAudio.volume = fireplaceInput.value
   })

   cardRain.addEventListener("click", () => {
      sounds.fireplaceAudio.pause()
      sounds.forestAudio.pause()
      sounds.coffeShopAudio.pause()
      sounds.rainAudio.play()
      cardFireplace.classList.remove("card-clicked")
      cardForest.classList.remove("card-clicked")
      cardRain.classList.add("card-clicked")
      cardFair.classList.remove("card-clicked")
   })

   rainInput.addEventListener("input", () => {
      sounds.rainAudio.volume = rainInput.value
   })

   cardFair.addEventListener("click", () => {
      sounds.fireplaceAudio.pause()
      sounds.forestAudio.pause()
      sounds.coffeShopAudio.play()
      sounds.rainAudio.pause()
      cardFireplace.classList.remove("card-clicked")
      cardForest.classList.remove("card-clicked")
      cardRain.classList.remove("card-clicked")
      cardFair.classList.add("card-clicked")
   })

   fairInput.addEventListener("input", () => {
      sounds.coffeShopAudio.volume = fairInput.value
   })
   
}