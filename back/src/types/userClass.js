class Users {
    constructor({userName,email,password}) {
      if(!userName || !email || !password){
        throw new Error("Missing data");
      }  
      this.userName = userName;
      this.email = email;
      this.password = password;
    }
};

module.exports = {Users}