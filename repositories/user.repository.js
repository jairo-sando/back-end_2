
import UserDAO from "../dao/mongo/user.dao.js";

export default class UserRepository {
 
  constructor() {
   
    this.dao = new UserDAO();
  }  

   getUserByEmail(email) {
      return this.dao.getByEmail(email);

   } 

   createUser(user) {

      return this.dao.create(user);
   
   }


  updatePassword(id, password) {
  return this.dao.updatePassword(id, password);
}

}