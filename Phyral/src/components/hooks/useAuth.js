import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      console.log('Attempting to login with', { email, password });

      const response = await fetch('http://phyralbk.test/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Login error:', errorData);
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      console.log('Login successful, response data:', data);

      localStorage.setItem('token', data.accessToken);
      localStorage.setItem('user', JSON.stringify(data.user));

      const userId = data.user.id; // Obtener el ID del usuario de data.user
      console.log('User ID:', userId);

      navigate(`/${userId}`); // Navega a la página de inicio con el ID del usuario
    } catch (err) {
      console.error('Error during login:', err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, error, loading };
};
