function mouseDownHandler(a){
    if(a.type=="password")
        a.setAttribute("type", "text");
}
function mouseUpHandler(a){
    if(a.type=="text")
        a.setAttribute("type", "password");
}

var inputs = document.getElementsByTagName('input');
for (var i = 0; i < inputs.length; i++) {
    if(inputs[i].type=="password"){
        // Creating new img node for eye image
        var eyeImg = document.createElement("img");
        eyeImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB+0lEQVRYR+2W0VHDMBBENxUAFUAHIRUAHUAFhAqgA6ADqACogKQCoINQAdABVADzZnSesyxLcshMfqwfTxz77u3eneSJtrwmW86vEWB0YKgDh5LOJXFlHYfrq7suJa1qm7sGYFfSpaS5pIPKwJ+SHiXdS/rOvVMCuJJ0LQkI1nsIbApNuTmBM4BOw/MkJ8ZTH0QfAEqfndUEuJGEsprF+zxPuVgAn6TcSAGghuSoRjGK4ppyz/cC/2N5rBRHuI8juAFEK1YMQOCHQE0wfvsFFHBmeewGJTlLKAUC4A6EB/DJLwJ5KsFRoQZAoDReFr8FYQBY9RJs70vuAUt9UIrRQACArR/hmrLdkqGspN6efcuUycpBQ88AsMA0nG0wKYVQ75Sku/HbyzxLI9KYCwCMiJuzzEtDAH7c3pEKaQBLKwEuQAQM9UutTZfgC8d9E5IAi0sNVFOFUgwcYpRXfgypfwmixoW+BrQpapKjJN6IPESqHEzMIjMNJD/NbESt5CkA7nkImgU7U1sximxqbCsG2i/+Z2fl2kneB8D9WCmBbwceRpyitpUz4tS8czSXjmMC3Ln5N6XmCJazCP4blHpnUM1xHDvTuFQCMDcIQuD9mhGQxIiRFPh/fZDE+aglTWanoW3N5gRTQpNu9JOsUvR6j9WUYL3IlW+NAKMDf7vKgKDXxKVxAAAAAElFTkSuQmCC";
        // copying style attributes from input to eye
        eyeImg.style.backgroundColor = getComputedStyle(inputs[i]).backgroundColor || "white";
        eyeImg.style.height = getComputedStyle(inputs[i]).height;
        eyeImg.style.borderTop = getComputedStyle(inputs[i]).borderTop;
        eyeImg.style.borderBottom = getComputedStyle(inputs[i]).borderBottom;
        eyeImg.style.borderRight = getComputedStyle(inputs[i]).borderRight;
        eyeImg.style.padding = getComputedStyle(inputs[i]).padding;
        eyeImg.style.borderRadius = getComputedStyle(inputs[i]).borderRadius;
        eyeImg.style.borderTopLeftRadius = 0;
        eyeImg.style.borderBottomLeftRadius = 0;

        eyeImg.style.position = "absolute";
        eyeImg.style.borderLeft = "none";
        inputs[i].style.borderRight = "none";
        
        if(inputs[i].parentNode.lastchild == inputs[i]) {
            inputs[i].parentNode.appendChild(eyeImg);
        } else {
            inputs[i].parentNode.insertBefore(eyeImg, inputs[i].nextSibling);
        }

        eyeImg.addEventListener("mousedown", function(){
            mouseDownHandler(this.previousSibling);
        });
        eyeImg.addEventListener("mouseup", function(){
            mouseUpHandler(this.previousSibling);
        });
    }
};
