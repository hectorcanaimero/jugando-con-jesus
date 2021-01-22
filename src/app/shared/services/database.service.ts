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


  /** Users */
  addUser = (data: any) => this.db.collection('users').doc(data.key).set(data);
  updateUser = (data: any) => this.db.collection('users').doc(data.key).set(data);
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
  getUserById = (id: string) => this.db.collection('users').doc(id).valueChanges().pipe(trace('getUser'));


  /** Grupos */
  addGrupo = (data: any) => this.db.collection('grupos').doc(data.slug).set(data);
  updateGrupo = (id: string, data: any) => this.db.collection('grupos').doc(id).set(data);
  deleteGrupo = (id: string) => this.db.collection('grupos').doc(id).delete();
  getGrupos = () => {
    return this.db.collection('grupos').snapshotChanges().pipe(
      map(actions => {
        let data: any = [];
        return actions.map(a => {
          data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return data;
        });
      }),
      trace('getGrupos')
    );
  }
  getGrupoById = (id: string) => this.db.collection('grupos').doc(id).snapshotChanges().pipe(trace('getGrupos'));


  /** Alumnos */
  addAlumnos = (data: any) => this.db.collection('students').add(data);
  updateAlumnos = (id: string, data: any) => this.db.collection('students').doc(id).set(data);
  deleteAlumnos = (id: string) => this.db.collection('students').doc(id).delete();
  getAlumnos = () => {
    return this.db.collection('students').snapshotChanges().pipe(
      map(actions => {
        let data: any = [];
        return actions.map(a => {
          data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return data;
        });
      }),
      trace('getAlumnos')
    );
  }
  getAlumnosById = (id: string) => this.db.collection('students').doc(id).snapshotChanges().pipe(trace('getAlumno'));
  getAlumnosByGrupo = (grupo: string) => this.db.collection('students', ref => ref.where('grupo', '==', grupo)).snapshotChanges().pipe(trace('getAlumnosGRupo'));


  /** Timeline */
  addTimeline = (data: any) => this.db.collection('timeline').add(data);
  deleteTimeline = (id: string) => this.db.collection('timeline').doc(id).delete();
  getTimelines = () => {
    return this.db.collection('timeline').snapshotChanges().pipe(
      map(actions => {
        let data: any = [];
        return actions.map(a => {
          data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return data;
        });
      }),
      trace('getTimelines')
    );
  }
}
