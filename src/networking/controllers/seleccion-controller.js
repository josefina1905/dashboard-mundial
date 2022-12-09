/* eslint-disable no-unused-vars */
import axios from 'axios';

export class SeleccionController {
  static async getSeleccion() {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/seleccion`);
    return {
      Uruguay: {
        nombre: 'Uruguay',
        bandera: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/200px-Flag_of_Uruguay.svg.png',
      },
      Brasil: {
        nombre: 'Brasil',
        bandera: 'https://png.vector.me/files/images/3/5/355126/bandeira_do_brasil_flag_brazil_preview',
      },
    };
  }
}

export default SeleccionController;
