import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { obtenerUsuarios, eliminarUser} from 'src/firebaseConection/firestore';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  arrayListUser:any = [];
  Users: User[] = [];

  constructor(private usuarioService:UsuarioService,private toastr: ToastrService){}

  ngOnInit(): void {
    this.usuarioService.listarUserListaServer().subscribe((result:any) => {
      this.arrayListUser = result;
    });

    this.getUsers();    
  }

  getUsers() {
    obtenerUsuarios()
      .then((result) => {
        this.Users = [];
        console.log(result);
        result.forEach((item) => {
          this.Users.push(item as User);
        });
      })
      .catch((err) => {
        console.log(err);
        this.Users = [];
      });
  }

  eliminarUsuario(user: User) {
    eliminarUser(user)
      .then((result) => {
        this.toastr.error(
          'El usuario ha sido eliminado con exito',
          'Usuario eliminado'
        );
        this.getUsers();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
