function switchMode()
{

    if (window.getComputedStyle(document.body).backgroundColor === "rgb(34, 29, 35)")
    {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('logo-img').src = "media/logo-for-light.png";
        document.getElementById('theme-switch-img-default').src = "media/lamp-for-light.png";
        document.getElementById('theme-switch-img-hover').src = "media/lamp-for-light-hover.png";
    }
    else
    {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('logo-img').src = "media/logo-for-dark.png";
        document.getElementById('theme-switch-img-default').src = "media/lamp-for-dark.png";
        document.getElementById('theme-switch-img-hover').src = "media/lamp-for-dark-hover.png";
    }
}