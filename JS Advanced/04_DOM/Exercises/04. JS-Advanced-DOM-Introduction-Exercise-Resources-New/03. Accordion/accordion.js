function toggle() {
    let moreButtonText = document.getElementsByClassName('button');
    let textInfo = document.getElementById('extra');
    if ( moreButtonText[0].textContent === "More" ){
        textInfo.style.display = 'block';
        moreButtonText[0].textContent = "Less";
    }
    else{
        textInfo.style.display = 'none';
        moreButtonText[0].textContent = "More";
    }

}