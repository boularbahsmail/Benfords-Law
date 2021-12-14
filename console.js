
const writeToConsole = function(Text, id) {
    Text = Text.replace(/  /g, "&nbsp;&nbsp;");
    let ExistingText = document.getElementById(id).innerHTML
    let NewText = "";

    if (arguments.length > 0) {
        if (ExistingText != "")
        {
            NewText = ExistingText;
        }

        NewText += Text;
    }
    else {
        NewText = ExistingText + "<br />";
    }

    document.getElementById(id).innerHTML = NewText;
}


const clearConsole = function(id) {
    document.getElementById(id).innerHTML = "";
}
