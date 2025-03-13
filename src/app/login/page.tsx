"use client";

import { useContext, useState, FormEvent } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { UserContext } from "@/src/context/user";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { login } = useContext(UserContext);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validación de email
    const reg =
      "[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}";
    const validateReg = new RegExp(reg);

    if (!validateReg.test(email)) {
      setEmailError("Por favor, ingrese un correo electrónico válido.");

      return;
    } else {
      setEmailError("");
    }

    // Mostrar indicador de carga
    setLoading(true);

    try {
      const response = await login(email, password);

      if (response) {
        setLoading(false);
        router.push("home-admin");
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error);

      alert("Credenciales inválidas");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2 style={styles.title}>INICIAR SESIÓN</h2>
        <p style={styles.registerText}>
          ¿Es tu primera vez?{" "}
          <a href="/register" style={styles.link}>
            Regístrate
          </a>
        </p>

        <input
          required
          placeholder="Email*"
          style={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p style={styles.error}>{emailError}</p>}

        <input
          required
          placeholder="Contraseña*"
          style={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="/forgot-password" style={styles.forgotPassword}>
          ¿Olvidaste la contraseña?
        </a>

        <Button disabled={loading} style={styles.button} type="submit">
          {loading ? "Cargando..." : "Iniciar sesión"}
        </Button>

        <p style={styles.connectText}>O conéctate con</p>
        <div style={styles.socialIcons}>
          <Link href="/" style={styles.icon}>
            🌐
          </Link>
          <Link href="/" style={styles.icon}>
            📘
          </Link>
          <Link href="/" style={styles.icon}>
            🐦
          </Link>
        </div>
      </form>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  card: {
    background: "rgba(38,113,82,255)",
    padding: "2rem",
    borderRadius: "25px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  title: {
    color: "#fff",
    marginBottom: "1rem",
    fontSize: "1.5rem",
  },
  registerText: {
    color: "#fff",
    marginBottom: "1.5rem",
  },
  link: {
    color: "#00ffcc",
    textDecoration: "none",
  },
  input: {
    marginBottom: "1rem",
    width: "100%",
    backgroundColor: "transparent",
    border: "1.5px solid white",
    padding: "1rem",
    borderRadius: "15px",
  },
  error: {
    color: "#ff4d4d",
    fontSize: "0.875rem",
    marginBottom: "1rem",
  },
  forgotPassword: {
    display: "block",
    color: "#fff",
    marginBottom: "1.5rem",
    textDecoration: "none",
  },
  button: {
    width: "100%",
    background: "rgb(58,226,169)",
    color: "#004d33",
  },
  connectText: {
    color: "#fff",
    margin: "1.5rem 0 1rem",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  icon: {
    color: "#fff",
    fontSize: "1.5rem",
  },
};

export default Login;
