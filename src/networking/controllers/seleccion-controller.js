import axios from 'axios';

class seleccioncontroller {

    export class seleccioncontroller {
        static async getSeleccion(name) {
          const response = await ApiService.get(API_ROUTES.SELECCION_NOMBRE(name));
          return new seleccion(seleccionSerializer.deSerialize(response.data));
        }
      }
}      