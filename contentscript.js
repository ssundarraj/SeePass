function dblclickHandler(a){
    this.innerHTML = "TEST";
    if(a.type=="password")
        a.setAttribute("type", "text");
    else if(a.type=="text")
        a.setAttribute("type", "password");
}


var inputs = document.getElementsByTagName('input');
// var passwordInputs = [];
for (var i = 0; i < inputs.length; i++) {
    if(inputs[i].type=="password"){
        // passwordInputs.push(inputs[i]);

        var eyeImg = document.createElement("img");
        eyeImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB+0lEQVRYR+2W0VHDMBBENxUAFUAHIRUAHUAFhAqgA6ADqACogKQCoINQAdABVADzZnSesyxLcshMfqwfTxz77u3eneSJtrwmW86vEWB0YKgDh5LOJXFlHYfrq7suJa1qm7sGYFfSpaS5pIPKwJ+SHiXdS/rOvVMCuJJ0LQkI1nsIbApNuTmBM4BOw/MkJ8ZTH0QfAEqfndUEuJGEsprF+zxPuVgAn6TcSAGghuSoRjGK4ppyz/cC/2N5rBRHuI8juAFEK1YMQOCHQE0wfvsFFHBmeewGJTlLKAUC4A6EB/DJLwJ5KsFRoQZAoDReFr8FYQBY9RJs70vuAUt9UIrRQACArR/hmrLdkqGspN6efcuUycpBQ88AsMA0nG0wKYVQ75Sku/HbyzxLI9KYCwCMiJuzzEtDAH7c3pEKaQBLKwEuQAQM9UutTZfgC8d9E5IAi0sNVFOFUgwcYpRXfgypfwmixoW+BrQpapKjJN6IPESqHEzMIjMNJD/NbESt5CkA7nkImgU7U1sximxqbCsG2i/+Z2fl2kneB8D9WCmBbwceRpyitpUz4tS8czSXjmMC3Ln5N6XmCJazCP4blHpnUM1xHDvTuFQCMDcIQuD9mhGQxIiRFPh/fZDE+aglTWanoW3N5gRTQpNu9JOsUvR6j9WUYL3IlW+NAKMDf7vKgKDXxKVxAAAAAElFTkSuQmCC";
        eyeImg.style.float = "left";

        eyeImg.style.backgroundColor = inputs[i].style.backgroundColor || "white";
        // eyeImg.height = inputs[i].height;
        eyeImg.style.height = inputs[i].style.height;
        eyeImg.style.borderTop = inputs[i].style.borderTop;
        eyeImg.style.borderBottom = inputs[i].style.borderBottom;
        
        
        eyeImg.style.position = "absolute";
        eyeImg.style.borderLeft = "none";
        inputs[i].style.borderRight = "none";
        


        inputs[i].parentNode.insertBefore(eyeImg, inputs[i].nextSibling);
        inputs[i].addEventListener("dblclick", function(){
            dblclickHandler(this);
        });
    }
};
