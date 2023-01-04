const String2 = "Lorem ~ipsum~ dolor sit amet, ~consectetur adipisicing elit.~ Vitae illum unde nulla, distinctio placeat ad at corrupti ~cupiditate maxime iure.~"
// This function will bold the some part of the string which are comming from backend
// There has to be a specific symbol to tell the function which part of the string has to be bold.
//  for example ~Bold this string~

const BoldString = (string) => {
    const Splittext = string.split(' ')
    console.log(Splittext);
    let newtext = "";
    Splittext.forEach((text) => {
        if (text.startsWith("~") && text.endsWith("~")) {
            newtext += ` <strong>${text.slice(1, text.length-1)}</strong> `
        }
        else if (text.startsWith("~")) {
            newtext += ` <strong>${text.replace("~", "")} `
        } else if (text.endsWith("~")) {
            newtext += ` ${text.replace("~", "")}</strong> `
        }
        else {
            newtext += `${text}`
        }
    })
    const element = document.createElement("p");
    element.setAttribute("class", "bold-para")
    element.innerHTML = newtext
    document.body.appendChild(element)
    console.log(newtext);
}
BoldString(String2);