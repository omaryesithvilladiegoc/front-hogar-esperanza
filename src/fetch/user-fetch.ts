const URL_FETCH = 'https://back-hogar-esperanza.onrender.com'

export const loginFetch = async (email:string,password:string) => {

    try {
        const response = await fetch(`${URL_FETCH}/auth`, {
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