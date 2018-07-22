function MemberDrop() {
    var x = document.getElementById("memberdrop");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
        x.previousElementSibling.className += " on";
    } else {
        x.className = x.className.replace(" show", "");
        x.previousElementSibling.className =
        x.previousElementSibling.className.replace(" on", "");
    }
}