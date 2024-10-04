let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishme(){
    let day=new Date()
    let hour=day.getHours()
    if(hour>=0 && hour<12){
        speak("Good morning!")
    }
    else if(hour>=12 && hour <16){
        speak("Good afternoon")
    }
    else{
        speak("good evening")
    }
}
// window.addEventListener('load',()=>{
//     wishme()
// })
let speechRecognition= window.speechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex = event.resultIndex; 
   let transcript= event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
     btn.style.display="flex"
      voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")){
        speak("yes sir I am Nova , How can I help You ?")
    }
    else if(message.includes("who are you")){
        speak("I am virtual assistant, create by AFzal Zaid")
    }
    else if(message.includes("nova open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/")
    }
    else if(message.includes("nova open google")){
        speak("opening google...")
        window.open("https://www.google.co.in/")
    }
    else if(message.includes("nova open makaut")||message.includes("nova open mackout")){
        speak("opening makaut...")
        window.open("https://makautexam.net/")
    }
    else if(message.includes("nova open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com/")
    }
    else if(message.includes("nova open instagram")){
        speak("opening instagram...")
        window.open("https://www.instagram.com/")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak("the current time is "+time)
    }
    else if(message.includes("nova open calculator")){
        speak("opening calculator...")
        window.open("https://www.calculator.net/")
    }
    else if(message.includes("nova open chat gpt")){
        speak("opening Chat GPT...")
        window.open("https://chatgpt.com/")
    }
    else if(message.includes("nova open map")){
        speak("opening map...")
        window.open("https://www.google.com/maps")
    }
    else{
        let finalText="i found on internet regarding" + message.replace("nova","")|| message.recognition("innova","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("nova","") || message.replace("innova","")}`,"_blank")
    }
     
}