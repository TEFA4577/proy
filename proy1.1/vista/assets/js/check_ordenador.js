 function showContentOrd() {
        element = document.getElementById("ordenadorReg");
        check = document.getElementById("check_ordenador");
        if (check.checked) {
            element.style.display='none';
        }
        else {
            element.style.display='block';
        }
    }