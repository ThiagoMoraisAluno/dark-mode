const changeThemeBtn = document.querySelector("#change-theme");

//Toggle dark mode
function toggleDarkmode(){
    document.body.classList.toggle("dark");
}

//carregando o light e dark mode

function loadTheme(){
    const darkMode = localStorage.getItem("dark");

    if (darkMode){
        toggleDarkmode();
    }
}

loadTheme()

changeThemeBtn.addEventListener("change", function(){
    toggleDarkmode();

    //salvar ou remover-esta função que irá definir a preferência do usuário

    localStorage.removeItem("dark");

    if (document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1);
    }
});