function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

class user {
    constructor(name, firstName, email, password){
        this.name = name,
        this.firstName = firstName,
        this.email = email,
        this.password = password
    }

    validInscription() {
        if (!this.name || !this.firstName || !this.email || !this.password) {
            console.log("Veuillez remplir tous les champs.");
        }
    
      console.log("Inscription validée !");
      return true;
    }
}

const newUser = new user ();
newUser.validInscription();
