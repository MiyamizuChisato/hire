export const themeChangeTrigger = () => {
    switch (getTheme()) {
        case 'light': {
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
            break
        }
        case 'dark': {
            setTheme('light')
            localStorage.setItem('theme', 'light')
            break
        }
    }
}
export const getTheme = () => {
    return document.documentElement.className
}
export const setTheme = (theme) => {
    document.documentElement.className = theme
}