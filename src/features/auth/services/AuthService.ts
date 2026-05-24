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
      },
    });

    return {
      error: "",
      success: "Cuenta creada correctamente, revisa tu e-mail",
    };
  }
}
export const authService = new AuthService();
