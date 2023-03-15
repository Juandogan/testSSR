import { Injectable } from '@angular/core';
import { Data } from '../modelos/data';
import { HttpClient } from '@angular/common/http';

// import {MatSnackBar} from '@angular/material/snack-bar';
// import {MatSnackBarConfig} from '@angular/material/snack-bar';
// import { Revista } from '../modelos/revista';
@Injectable({
  providedIn: 'root'
})


//Clase general de crud Articulos y subida de imagenes
export class CrudService {

  data = new Data
    readonly URL_API  = "http://localhost:4200/data";

  constructor(private http:HttpClient) {}

   uploadFile(formData:any){console.log('Bandera', formData)
   return this.http.post('/upload', formData)   // en produccion poner '/upload' por this.URL_API2

    }

//CRUD

//pedir TODO
  getDatas() {
     return this.http.get(this.URL_API);

  };

 //Pedir 1
   getOneData(_id:Data){
    return this.http.get(this.URL_API + `/${_id}`);
  };

 // Agregar
  addData(data:Data) {

    return this.http.post(this.URL_API, data);

  };


  modifyData(data:Data) {
    return this.http.put(this.URL_API + `/${data._id}` , data);

  };


  deleteData(_id:any) {
    return this.http.delete(this.URL_API + `/${_id}`);

  };





 };




//FIN DE CLASE GENERAL
