function spli2rd() 
{
    var txt = document.getElementById('input').value
    var txtfinal = ''
    var res = document.getElementById('res')
    res.innerHTML = ''

    for (let i = 0; i < txt.length; i++) 
    {
        if (txt.charAt(i) == ' ')
        {
            txtfinal += '  '
        }
        else
        {
            txtfinal += txt.charAt(i).toUpperCase()
            txtfinal += ' ' 
        }
    }

    res.innerHTML = txtfinal
}