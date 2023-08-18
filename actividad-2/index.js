const getDataForm = () => { 
    const txtName = document.getElementById("txtName").value;
    const txtEmail = document.getElementById("txtEmail").value;
    const txtDescription = document.getElementById("txtTask").value;
    const acceptConditions = document.getElementById("acceptConditions").checked;
    const typeA = document.getElementById("typeA").checked;
    const typeB = document.getElementById("typeB").checked;
    const period = document.getElementById("semester").value;


    // JSON { CLAVE: VALOR }
    const data = {
        name: txtName,
        email: txtEmail,
        description: txtDescription,
        acceptCondition: acceptConditions,
        typeA, // Si se llaman iguales las claves y el valor, no hay necesidad de darle valor a la clave
        typeB,
        period,
    }

    console.log(data);

}