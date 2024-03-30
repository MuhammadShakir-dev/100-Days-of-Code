// class based syntax
class user {
  constructor(email, password, username) {
    this.email = email
    this.password = password
    this.username = username
  }

  get username() {
    return `${this._username}@jsdev`
  }

  set username(value) {
    this._username = value
  }
  get email() {
    return `${this._email.toUpperCase()}.AI`
  }

  set email(value) {
    this._email = value
  }
  get password() {
    return this._password.toUpperCase()
  }

  set password(value) {
    this._password = value
  }
}
const userOne = new user('shakir@gmail.com', 'absjhs','shakir')
console.log(userOne.password)
console.log(userOne.email)
console.log(userOne.username);
