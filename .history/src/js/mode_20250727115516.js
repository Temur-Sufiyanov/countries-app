const modeBtn = document.querySelector('.header__dark-mode')
const modeSpan = document.querySelector('.header__dark-mode span')
const body = document.querySelector("body")
const modeFromLocal = localStorage.getItem('mode') ? localStorage.getItem('mode') : null

if (modeFromLocal) {
    body.classList.add('dark-mode')
    modeSpan.textContent = "Dark Mode";
}

modeBtn.addEventListener('click', () => {
      const isDark = body.classList.toggle('dark-mode')
    modeFromLocal ? localStorage.setItem('mode', '') : localStorage.setItem('mode', 'dark') 
    
    if (isDark) {
        document.body.classList.remove("light");
        modeSpan.textContent = "Light Mode";
    } else {
        document.body.classList.add("light");
        modeSpan.textContent = "Dark Mode";
    }
})