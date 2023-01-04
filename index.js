const String = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illum unde nulla, distinctio placeat ad at corrupti cupiditate maxime iure. 1 Anshal is a good boy Hello World. 2 Anshal is a good boy Hello World Nice to meet you. 3 wrtwurtqwurtqwiurtqwirut 4 qwriyqwirutqwiurtqwruiqwtuirty"

const printAsItIs = (string) => {
    const splitText = string.split(" ");
    let newtext = "";
    splitText.forEach((text) => {
        if (Number(parseInt(text))) {
            newtext += ` </br>${text} `
        } else {
            newtext += ` ${text} `;
        }
    })
    const element = document.createElement("p");
    element.setAttribute("class", "text")
    element.innerHTML = newtext
    document.body.appendChild(element);
}
printAsItIs(String);