import { SignUpInput } from "../schemas/authSchema";

class AuthService {
  
  async register(credentials: SignUpInput) {
     const { name, email, password } = credentials;

     
  }

}
export const authService = new AuthService();