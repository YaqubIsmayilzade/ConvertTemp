const CF = document.getElementById("C-to-F")
const CK = document.getElementById("C-to-K")
const input = document.getElementById("text")
const output = document.getElementById("output")
const container = document.getElementById("container")


function convert() {
    if (input.value!="" && (CF.checked || CK.checked)) {
        container.style.height="400px"
        if (CF.checked) {
            output.textContent = `${(((input.value)*1.8) + 32).toFixed(2)} °F`
        }
        else if(CK.checked){
            output.textContent = `${(input.value) + 273.15} °K`
        }
    
        
    
        console.log(input.value);
    }
}

input.addEventListener("input", () => {
    if(input.value==""){
        container.style.height="320px"
        output.textContent = ""
    }
})