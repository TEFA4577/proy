 function showContentImp() {
        element = document.getElementById("impresora_reg");
        check = document.getElementById("check_impresora");
        if (check.checked) {
            element.style.display='none';
        }
        else {
            element.style.display='block';
        }
    }

