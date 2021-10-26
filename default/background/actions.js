function saveTextAsFile() {
    var toPlainText = document.getElementById("PlainTextEdit").value
    var File = new Blob([toPlainText], { type: "text/plain" })
    var FileName = "Untitled.txt"

    var downloadLink = document.createElement("a")
    downloadLink.download = FileName
    downloadLink.innerHTML = "Untitled"

    window.URL = window.URL || window.webkitURL
    downloadLink.href = window.URL.createObjectURL(File);
    downloadLink.style.display = "none"
    document.body.appendChild(downloadLink)
    downloadLink.click()
}
