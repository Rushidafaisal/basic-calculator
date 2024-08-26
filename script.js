
function button(number)
{
    document.getElementsByClassName("smallbox")[0].innerHTML += number


}
function displayclear()
{
    document.getElementsByClassName("smallbox")[0].innerHTML = ""

}
function calculation()
{
    document.getElementsByClassName("smallbox")[0].innerHTML = eval(document.getElementsByClassName("smallbox")[0].innerHTML)
}


