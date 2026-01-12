function toggleMode () {
    const html = document.documentElement
    html.classList.toggle("light");

    // Pegar a img
    const img = document.querySelector("#profile img");

    // Verifica se o elemento html possui light mode
    if (html.classList.contains("light")){
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        img.setAttribute("src", "./assets/avatar.png")
    }
}


