function createUser(name, email) { 
    this.name = name;
    this.email = email;

    Object.defineProperty(this, "name",{
        get: function () {
            return this._name.toUpperCase()
        },
        set: function (value) { 
            this._name = value;
        }
    });

    Object.defineProperty(this, "email", {
        get: function () { 
            return `${this._email.toUpperCase()}.JS` 
        },

        set: function (value) { 
            return this._email = value
        }
    });
}

const newUser = new createUser("shakir", "shakir@dev.com");
