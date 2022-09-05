function switchMode()
{

    if (document.body.backgroundColor === "rgb(34, 29, 35)")
    {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    else
    {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}