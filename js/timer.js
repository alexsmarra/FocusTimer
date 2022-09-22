// objects with factory pattern
export default function Timer({
   // desestructuring object
   minutesDisplay,
   secondsDisplay,
   btnPlay,
   endOfTime
}) {

   let timerTimeout
   let minutes = Number(minutesDisplay.textContent)

   function updateDisplay(newMinutes, seconds) {
      newMinutes = newMinutes === undefined ? minutes : newMinutes
      seconds = seconds === undefined ? 0 : seconds

      // function padStart (only works in string format, pad of padding, will fill with "0" if it does not have two digits, for the seconds, when are below 10)
      minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
      secondsDisplay.textContent = String(seconds).padStart(2, "0")
   }
   
   function reset() {
      updateDisplay(minutes, 0)
      clearTimeout(timerTimeout)
   }

   function plusFive() {
      minutes = Number(minutesDisplay.textContent) + 5
      minutesDisplay.textContent = String(minutes).padStart(2, "0")
   }

   function minusFive() {
      if(minutes >= 5) {
         minutes = Number(minutesDisplay.textContent) - 5
         minutesDisplay.textContent = String(minutes).padStart(2, "0")
      } else {
         return
      }
   }
   
   function countDown() {
      timerTimeout = setTimeout(() => {
         let minutes = Number(minutesDisplay.textContent)
         let seconds = Number(secondsDisplay.textContent)
         let isFinished = minutes == 0 && seconds == 0

         if(isFinished) {
            updateDisplay()
            btnPlay.disabled = false
            endOfTime()
            // when finds a return, the rest of the function lines stop working
            return
         }

         if(seconds <= 0) {
            seconds = 60
            --minutes
         }

         updateDisplay(minutes, --seconds)

         // recursion, when we call the function itself within itself
         countDown()
      }, 1000)
   }

   return {
      updateDisplay,
      reset, 
      plusFive,
      minusFive,
      countDown
   }
}
