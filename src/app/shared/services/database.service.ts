import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirePerformance, trace } from '@angular/fire/performance';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private db: AngularFirestore,
    private perf: AngularFirePerformance,
  ) { }


  addUser = (data: any) => this.db.collection('users').doc(data.acces).set(data);
  updateUser = (id: string, data: any) => this.db.collection('users').doc(id).set(data);
  deleteUser = (id: string) => this.db.collection('users').doc(id).delete();
  getUsers = () => {
    return this.db.collection('users').snapshotChanges().pipe(
      map(actions => {
        let data: any = [];
        return actions.map(a => {
          data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return data;
        });
      }),
      trace('getUsers')
    );
  }
  getUserById = (id: string) => this.db.collection('users').doc(id).snapshotChanges().pipe(trace('getUsers'));
}
