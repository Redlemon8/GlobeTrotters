function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

class user {
    constructor(name, firstName, userName, birthDate, email, password){
        this.name = name,
        this.firstName = firstName,
        this.userName = userName,
        this.birthDate = birthDate,
        this.email = email,
        this.password = password
    }

    validInscription = () => {
        if (!this.name || !this.firstName || !this.email || !this.password) {
            console.log("Veuillez remplir tous les champs.");
            return false;
        }

        else {
            console.log("Demande accetpé");
            return true;
        }
    }
}

    const newUser = new user ("benjamin", "hanquez", "lambda@gmx.com", Naya);
    newUser.validInscription();

