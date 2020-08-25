function spli2rd() 
{
    var txtobj = document.getElementById('input')
    var txt = txtobj.value
    var txtfinal = ' '

    for (var i = 0; i < txt.length; i++) 
    {
        txtfinal += (txt.charAt(i)).toUpperCase()
        txtfinal += ' '
    }

    document.getElementById('res').innerHTML = txtfinal
}