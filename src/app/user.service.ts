import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase) { }

save(user:firebase.User)
{
  this.db.object('/users/'+user.uid).update(
    {
      name:user.displayName,
      email:user.email
    }
  );
}

}
