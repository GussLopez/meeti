import { auth } from "@/lib/auth";
import { SignUpInput } from "../schemas/authSchema";

class AuthService {
  
  async register(credentials: SignUpInput) {
     const { name, email, password } = credentials;

     await auth.api.signUpEmail({
      body: {
        name, 
        email,
        password,
        
      }
     })
  }

}
export const authService = new AuthService();