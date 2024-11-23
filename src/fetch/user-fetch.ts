export const loginFetch = async (email:string,password:string) => {

    try {
        const response = await fetch('http://localhost:3001/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
        return data
      
      } catch (error) {
        console.error('Error en la solicitud:', error);
      } 
}