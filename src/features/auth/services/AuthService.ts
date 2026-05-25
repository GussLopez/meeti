import { auth } from "@/lib/auth";
import { SignInInput, SignUpInput } from "../schemas/authSchema";
import { authRepository, IAuthRepository } from "./AuthRepository";
import { headers } from "next/headers";
import { APIError } from "better-auth";

class AuthService {
  constructor(private authRepository: IAuthRepository) {}

  async register(credentials: SignUpInput) {
    const { name, email, password } = credentials;

    const user = await this.authRepository.userExist(email);
    if (user) {
      return {
        error: "Este e-mail ya esta registrado",
        success: "",
      };
    }
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

  async login(credentials: SignInInput) {
    const { email, password } = credentials;

    const user = await this.authRepository.userExist(email);
    if (!user) {
      return {
        error: "Este usuario no existe",
        success: "",
      };
    }

    try {
      await auth.api.signInEmail({
        body: {
          email,
          password,
          callbackURL: '/dashboard'
        },
        headers: await headers()
      });

      return {
        error: '',
        success: 'Sesión iniciada correctamente'
      }
    } catch (error) {
      if (error instanceof APIError) {
        const messages: Record<number, string> = {
          401: 'Password Incorrecto',
          403: 'Tu cuenta no ha sido confirmada, hemos enviado un email'
        };

        const errorMessage = messages[error.statusCode];
        if (errorMessage) {
          return {
            error: errorMessage,
            success: ''
          }
        }
      }
    }

    return {
      error: "",
      success: "",
    };
  }
}
export const authService = new AuthService(authRepository);
