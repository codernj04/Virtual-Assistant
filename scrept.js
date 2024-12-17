let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    window.speechSynthesis.speak(text_speak)
}
function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good morning sir")
    }
    else if (hours >= 12 && hours < 16) {
        speak("Good afternoon sir")
    }
    else {
        speak("Good evening sir")
    }
}
window.addEventListener('load', () => {
    wishMe()
})
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})
function takeCommand(message) {
    btn.style.display = "flex"
    voice.style.display = "none"
    if (message.includes("hello")) {
        speak("hello sir, how can i help you?")
    }
    else if (message.includes("open youtube")) {
        speak(" opening youtube..")
        window.open("https://youtube.com/", "_blank")
    }
    else if (message.includes("open google")) {
        speak(" opening google..")
        window.open("https://google.com/", "_blank")
    }
    else if (message.includes("open facebook")) {
        speak(" opening facebook..")
        window.open("https://facebook.com/", "_blank")
    }
    else if (message.includes("open instagram")) {
        speak(" opening instagram..")
        window.open("https://instagram.com/", "_blank")
    }
    else if (message.includes("open linkedin")) {
        speak(" opening linkedin..")
        window.open("https://linkedin.com/", "_blank")
    }
    else if (message.includes("who are you")) {
        speak("I am Robin, A virtual assistant, created by nabajyoti sir")
    }
    else if (message.includes("who is nabajyoti")) {
        speak("yaa here is some information about nabajyoti sir, his fullname is Nabajyoti mohanty, a twenty year old entrepreneur with a positive outlook on life. he is the founder of Nexlet and currently a bca student at DRIEMS university. people know him for his helpful nature and positive mindset.")
    }
    else if (message.includes("open calculator")) {
        speak(" opening calculator..")
        window.open("calcultor://")
    }
    else if (message.includes("open calender")) {
        speak(" opening calender..")
        window.open("calender://")
    }
    else if (message.includes("time")) {
       let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
       speak(time)
    }
    else if (message.includes("date")) {
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
     }
    else{
        let finalText="this is what i found internet regarding" + message.replace("robin","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("robin","")}`,"_blank")
    }
}