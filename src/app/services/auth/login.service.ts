import { Injectable } from '@angular/core';
import { LoginRequest,autenticarUsuario} from './loginRequest';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }
  inLogin=false;
  login(credentials:LoginRequest){
    this.inLogin=autenticarUsuario(credentials.name,credentials.password);
   return this.inLogin;
  }
}
