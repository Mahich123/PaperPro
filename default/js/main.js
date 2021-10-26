document.title = "PaperPro"

const head = document.querySelector("head")

var favicon = document.createElement("link")
favicon.rel = "shortcut icon"
favicon.href = "https://cdn-icons-png.flaticon.com/512/2541/2541988.png"
head.appendChild(favicon)

function getBrowserName() { 
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) != -1 ) {
        return "Opera"
    } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        return "Chrome"
    } else if(navigator.userAgent.indexOf("Safari") != -1) {
        return "Safari"
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
        return "Firefox"
    } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
        return "Internet Explorer"
    } else {
        return "Not Supported Browser"
    }
}

function saveTextAsFile() {
    var toPlainText = document.getElementById("PlainTextEdit").value
    var File = new Blob([toPlainText], { type: "text/plain" })
    var FileName = "Untitled.txt"

    var downloadLink = document.createElement("a")
    downloadLink.download = FileName

    window.URL = window.URL || window.webkitURL
    downloadLink.href = window.URL.createObjectURL(File)
    document.body.appendChild(downloadLink)
    downloadLink.click()
}

function date_time() {
    var dt = new Date().toString()
    document.getElementById("PlainTextEdit").value = `${document.getElementById("PlainTextEdit").value} ${dt}`
}

function right_align() {
    document.getElementById("PlainTextEdit").style.textAlign = "right"
}

function center_align() {
    document.getElementById("PlainTextEdit").style.textAlign = "center"
}

function left_align() {
    document.getElementById("PlainTextEdit").style.textAlign = "left    "
}

function underline() {
    if (document.getElementById("PlainTextEdit").style.textDecoration == "underline") {
        document.getElementById("PlainTextEdit").style.textDecoration = "none"
    } else {
        document.getElementById("PlainTextEdit").style.textDecoration = "underline"
    }    
}

function italic() {
    if (document.getElementById("PlainTextEdit").style.fontStyle == "italic") {
        document.getElementById("PlainTextEdit").style.fontStyle = "normal"
    } else {
        document.getElementById("PlainTextEdit").style.fontStyle = "italic"
    }
}

function bold() {
    if (document.getElementById("PlainTextEdit").style.fontWeight == "bold") {
        document.getElementById("PlainTextEdit").style.fontWeight = "normal"
    } else {
        document.getElementById("PlainTextEdit").style.fontWeight = "bold"
    }
}

function underdev() {
    alert("Feature under Development")
}

function ChromeSpeechToText() {
    if (getBrowserName() == "Chrome") {
        try {
            var SpeechRecognition = window.webkitSpeechRecognition
            var recognition = new SpeechRecognition()
            var Content = null
            recognition.continuous = true
            
            recognition.onresult = function (event) {
                var current = event.resultIndex
                var transcript = event.results[current][0].transcript
                Content += transcript
                document.getElementById("PlainTextEdit").value = `${document.getElementById("PlainTextEdit").value} ${Content}`
            }
            
            if (document.getElementById("stt").className === "Stop") {
                document.getElementById("stt").className = "Start"
                recognition.stop()
            } else {
                document.getElementById("stt").className = "Stop"
                if (Content.length) {
                    Content += " "
                }
                recognition.start()
            }    
        }
        catch(err) {
            console.log(`ChromeSpeechToText Error : ${err}`)
        }    
    }
    else {
        alert("Speech To Text Supports only on chromium based browsers.")
    }
}

