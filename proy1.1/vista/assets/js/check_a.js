function showContent() {
        element = document.getElementById("persona");
        check = document.getElementById("check");
        if (check.checked) {
            element.style.display='none';
        }
        else {
            element.style.display='block';
        }
    }