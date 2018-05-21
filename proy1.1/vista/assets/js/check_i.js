 function showContentimp() {
        element = document.getElementById("impresora");
        check = document.getElementById("checki");
        if (check.checked) {
            element.style.display='none';
        }
        else {
            element.style.display='block';
        }
    }

