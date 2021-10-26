document.title = "PaperPro"

const head = document.querySelector("head")

var favicon = document.createElement("link")
favicon.rel = "shortcut icon"
favicon.href = "https://cdn-icons-png.flaticon.com/512/2541/2541988.png"
head.appendChild(favicon)

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
