import db from "./fireBaseConexion";
import { collection, getDocs, updateDoc, deleteDoc, doc, query, where, addDoc, setDoc } from "firebase/firestore";//importar las funciones con las cuales vamos a trabajar
import { User } from "src/app/models/user.model";

const userRef = collection(db, 'usuariosFinal');

export async function obtenerUsuarios() {
    // Función sirve para listar todos los usuario
    const usersSnapshot = await getDocs(userRef);
    const usersList = usersSnapshot.docs.map((doc) => doc.data() as User);//map recorrido
    return usersList;
}

export async function agregarUser(user: any) {
    return await setDoc(doc(userRef, `${user.nombre}`), user);
  }

  export async function eliminarUser(user: any) {
    const userRefDoc = doc(db, `usuariosFinal/${user.nombre}`);
    return await deleteDoc(userRefDoc);
  }