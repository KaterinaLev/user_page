function phone() {
    var number = /^[\d]{2}\([\d]{3}\)[\d]{3}-[\d]{2}-[\d]{2}$/;
    var block = document.getElementById('check_phone');
    var value = block.value;
    var valid = number.test(value);

    if(valid){
        alert("Номер телефону вказаний вірно");
    }else{
        alert("Неправельний номер телефону");
    }
}