'use client'
import { useContext, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { UserContext } from "@/src/context/user";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const {login} = useContext(UserContext)
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validación de email
    const reg = '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}';
    const validateReg = new RegExp(reg);
    if (!validateReg.test(email)) {
      setEmailError('Por favor, ingrese un correo electrónico válido.');
      
      return;
    } else {
      setEmailError('');
    }

    // Mostrar indicador de carga
    setLoading(true);
    console.log(email, password);
    
    try {
      const response = await login(email,password)
      if(response) {
        setLoading(false)
        router.push('home-admin')
      }
    } catch (error) {
      setLoading(false)
      alert('Credenciales invalidas')
    }


  };

  return (
    <div 
    
      className="flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/IMG_1238.PNG?alt=media&token=db6cbf2a-7d50-44a9-a728-c1f6ea36149a')", height:'100vh', backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
      
      <Card className="w-full flex content-center max-w-md bg-white shadow-lg rounded-lg p-6 bg-opacity-90 h-[400px]">
        <CardHeader style={{display:'flex', width:'100%', justifyContent:'center'}}>
          <h2 className="text-2xl font-semibold text-center text-gray-800">INICIAR SESION</h2>
        </CardHeader>

        <CardBody>
          {/* Error Message */}
          {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

          <form style={{display:'flex', gap:'2rem', flexDirection:'column'}} onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-6">
              <Input
                aria-label="Correo electrónico"
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                size="lg"
                className="focus:ring-blue-500"
              />
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <Input
                aria-label="Contraseña"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                size="lg"
                className="focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              size="lg"
              isLoading={loading}
            >
              Iniciar sesión
            </Button>
          </form>
        </CardBody>

        <CardFooter className="text-center">
          <p className="text-sm text-gray-600">¿No tienes cuenta? <a href="/register" className="text-blue-600 hover:underline">Regístrate</a></p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
