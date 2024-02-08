export interface LoginRequest {
    name: string;
    password: string;
    remember: boolean;
}
const usuarios = [
  { id: 1, name: 'admin', password: 'admin' },
  { id: 2, name: 'guchi', password: 'guchi' },
  { id: 3, name: 'levi', password: 'levi' }
];
export function autenticarUsuario(user:string , password:string):boolean {
  for (const usuarioActual of usuarios) {
    if (usuarioActual.name === user && usuarioActual.password === password) {
      
      return true;
    }
  }
  return false;
}