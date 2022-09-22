export default function Sounds() {
   const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
   const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

   const coffeShopAudio = new Audio("./sounds/Cafeteria.wav")
   const rainAudio = new Audio("./sounds/Chuva.wav")
   const forestAudio = new Audio("./sounds/Floresta.wav")
   const fireplaceAudio = new Audio("./sounds/Lareira.wav")

   coffeShopAudio.loop = true
   rainAudio.loop = true
   forestAudio.loop = true
   fireplaceAudio.loop = true

   function pressTimerBtn() {
      buttonPressAudio.play()
   }

   function endOfTime() {
      kitchenTimer.play()
   }

   function forestSound() {
      forestAudio.play()
   }

   return {
      coffeShopAudio,
      rainAudio,
      forestAudio,
      fireplaceAudio,
      pressTimerBtn,
      endOfTime,
      forestSound
   }
}