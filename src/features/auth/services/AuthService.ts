import { SignUpInput } from "../schemas/authSchema";

class AuthService {
  
  async register(credentials: SignUpInput) {
    console.log('CREDENTIALS: ', credentials);
  }

}
export const authService = new AuthService();