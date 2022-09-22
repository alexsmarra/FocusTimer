import ScreenMode from "./screen-mode.js"
import Sounds from "./sounds.js"
import Timer from "./timer.js"
import Events from "./events.js"
import {
   minutesDisplay,
   secondsDisplay,
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
} from "./elements.js"

const screenMode = ScreenMode()

const sounds = Sounds()

const timer = Timer({
   minutesDisplay,
   secondsDisplay,
   btnPlay,
   endOfTime: sounds.endOfTime
})
 
Events({
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
})





