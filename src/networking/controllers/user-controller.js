import axios from 'axios';

class UserController {
  static async createUser(email, password) {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      throw new Error('Error en el login');
    }
  }
}

export default UserController;
