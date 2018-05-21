 function showContentd() {
        element = document.getElementById("usuario_modf");
        check = document.getElementById("checkd");
        if (check.checked) {
            element.style.display='block';
        }
        else {
            element.style.display='none';
        }
    }