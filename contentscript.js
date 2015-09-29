function mousedownHandler(a){
    console.log("mouse down handler")
    if(a.type=="password")
        a.setAttribute("type", "text");
}
function mouseupHandler(a){
    console.log("mouse up handler")
    if(a.type=="text")
        a.setAttribute("type", "password");
}

function getStyle(el, styleProp)    {
    var x = document.getElementById(el);
    if (x.currentStyle)
        var y = x.currentStyle[styleProp];
    else if (window.getComputedStyle)
        var y = document.defaultView.getComputedStyle(x, null).getPropertyValue(styleProp);
    return y;
}

var inputs = document.getElementsByTagName('input');
for (var i = 0; i < inputs.length; i++) {
    if(inputs[i].type=="password"){

        // Creating new img node for eye image
        var eyeImg = document.createElement("img");
        eyeImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB+0lEQVRYR+2W0VHDMBBENxUAFUAHIRUAHUAFhAqgA6ADqACogKQCoINQAdABVADzZnSesyxLcshMfqwfTxz77u3eneSJtrwmW86vEWB0YKgDh5LOJXFlHYfrq7suJa1qm7sGYFfSpaS5pIPKwJ+SHiXdS/rOvVMCuJJ0LQkI1nsIbApNuTmBM4BOw/MkJ8ZTH0QfAEqfndUEuJGEsprF+zxPuVgAn6TcSAGghuSoRjGK4ppyz/cC/2N5rBRHuI8juAFEK1YMQOCHQE0wfvsFFHBmeewGJTlLKAUC4A6EB/DJLwJ5KsFRoQZAoDReFr8FYQBY9RJs70vuAUt9UIrRQACArR/hmrLdkqGspN6efcuUycpBQ88AsMA0nG0wKYVQ75Sku/HbyzxLI9KYCwCMiJuzzEtDAH7c3pEKaQBLKwEuQAQM9UutTZfgC8d9E5IAi0sNVFOFUgwcYpRXfgypfwmixoW+BrQpapKjJN6IPESqHEzMIjMNJD/NbESt5CkA7nkImgU7U1sximxqbCsG2i/+Z2fl2kneB8D9WCmBbwceRpyitpUz4tS8czSXjmMC3Ln5N6XmCJazCP4blHpnUM1xHDvTuFQCMDcIQuD9mhGQxIiRFPh/fZDE+aglTWanoW3N5gRTQpNu9JOsUvR6j9WUYL3IlW+NAKMDf7vKgKDXxKVxAAAAAElFTkSuQmCC";


        // copying style attributes from input to eye
        eyeImg.style.backgroundColor = getComputedStyle(inputs[i]).backgroundColor;
        eyeImg.style.height = getComputedStyle(inputs[i]).height;
        eyeImg.style.borderTop = getComputedStyle(inputs[i]).borderTop;
        eyeImg.style.borderBottom = getComputedStyle(inputs[i]).borderBottom;
        eyeImg.style.borderRight = getComputedStyle(inputs[i]).borderRight;
        eyeImg.style.padding = getComputedStyle(inputs[i]).padding;

        console.log(getComputedStyle(inputs[i]).width)
        console.log(getComputedStyle(eyeImg).width)
        // inputs[i].style.width = getComputedStyle(inputs[i]).width - getComputedStyle(eyeImg).width;
        // console.log(getComputedStyle(inputs[i]).width)
        
        // Specific styling
        // eyeImg.style.float = "left";
        eyeImg.style.position = "absolute";
        // eyeImg.style.verticalAlign = "middle";
        // eyeImg.style.right = "-10px";
        eyeImg.style.borderLeft = "none";
        inputs[i].style.borderRight = "none";
                


        inputs[i].parentNode.insertBefore(eyeImg, inputs[i].nextSibling);

        eyeImg.addEventListener("mousedown", function(){
            mousedownHandler(this.previousSibling);
        });
        eyeImg.addEventListener("mouseup", function(){
            mouseupHandler(this.previousSibling);
        });
    }
};
