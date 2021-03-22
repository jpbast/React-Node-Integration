let state = 0;

window.addEventListener("resize", () => {
    
    if (window.innerWidth < 965 && state == 0) {
        let body = document.querySelector('.body');
        body.style.display = "flex"
        document.querySelector('.image').remove();
        state = 1;
        console.log("sem imagem")
    }

    if (window.innerWidth >= 965 && state == 1) {
        document.querySelector('.body').style.display = "grid";
        let referenceDiv = document.querySelector('.container');
        newDiv = document.createElement('div');
        newDiv.classList.add('image');
        newDiv.innerHTML = '<img src="../assets/studying.jpg" alt="Studying">';
        referenceDiv.parentNode.insertBefore(newDiv, referenceDiv.nextSibling);
        state = 0;
        console.log("com imagem")
    }
})

