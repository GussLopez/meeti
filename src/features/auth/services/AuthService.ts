import { auth } from "@/lib/auth";
import { SignUpInput } from "../schemas/authSchema";
import { authRepository, IAuthRepository } from "./AuthRepository";

class AuthService {
  constructor (
    private authRepository : IAuthRepository
  ){}
  
  async register(credentials: SignUpInput) {
    const { name, email, password } = credentials;

    await this.authRepository.userExist(email)

    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });

    return {
      error: "",
      success: "Cuenta creada correctamente, revisa tu e-mail",
    };
  }
}
export const authService = new AuthService(authRepository);
