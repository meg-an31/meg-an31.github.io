document.getElementById("enter_text_btn").addEventListener('click', display_text, false);
document.getElementById("blackout_text_btn").addEventListener('click', blackout_text, false);
document.getElementById("clear_blackout_btn").addEventListener('click', clear_blackout, false);



let input_elements_ids = []

const selection = () => {
    if (window.getSelection) 
        var s = window.getSelection()
        if (! s.isCollapsed)
            return s;
    return null;
}


function isTypingInEditable(target) {
    if (!target) return false;
    const tag = (target.tagName || '').toLowerCase();
    const editableTags = ['input', 'textarea', 'select'];
    const isContentEditable = target.isContentEditable;
    return editableTags.includes(tag) || isContentEditable;
}

// Listen for key presses on the whole page
window.addEventListener('keydown', function (e) {
    
    if (isTypingInEditable(e.target) && !e.ctrlKey && !e.metaKey && !e.altKey) {
        return; // don't hijack normal typing
    }
    const key = e.key;

    switch (key) {
        case 'b':
            blackout_text();
            break;

        default:
            break;
    }
});


function blackout_text() {
    let blackout_selection = selection();
    if (blackout_selection == null){
        return null;
    }

    let element_list = blackout_selection.getRangeAt(0).cloneContents().querySelectorAll("span");

    if (element_list.length == 0){
        element_list = [blackout_selection.anchorNode.parentElement];
    }

    for (let i = 0; i < element_list.length; i++){
        if (input_elements_ids.includes(element_list[i].id)){
            if (document.getElementById(element_list[i].id).style.cssText == "background-color: rgb(169, 169, 169);") {
                document.getElementById(element_list[i].id).style = "background-color: transparent;";
            }
            else {
                document.getElementById(element_list[i].id).style = "background-color: rgb(169, 169, 169);";
            }
        }
    }
}

function display_text() {
    let input_txt = document.getElementById("input_text").value.replace(/(<([^>]+)>)/ig, '');
    document.getElementById("result").innerHTML = "";
    var current_element;
    let current_id = "";
    input_elements_ids = [];
    for (let i = 0; i < input_txt.length; i++){
        current_id = "char_".concat(i.toString());
        current_element = document.createElement("span");
        current_element.id = current_id;
        current_element.innerText = input_txt.charAt(i).toString();
        current_element.style = "background-color: transparent;";
        input_elements_ids.push(current_element.id);
        document.getElementById("result").appendChild(current_element);
        
    }
}

function clear_blackout() {
    for (let i = 0; i< input_elements_ids.length; i++){
        document.getElementById(input_elements_ids[i]).style = "background-color: transparent;";
    }
}

