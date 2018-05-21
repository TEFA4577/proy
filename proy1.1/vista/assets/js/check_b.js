 function showContents() {
        element = document.getElementById("ordenador");
        check = document.getElementById("checkb");
        if (check.checked) {
            element.style.display='none';
        }
        else {
            element.style.display='block';
        }
    }