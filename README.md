# Backend-Final **BACK - END DEVELOPMENT CURE.IT**

### **Postman Documentation**

https://documenter.getpostman.com/

#

# **API SPEC CURE.IT**

## 1. Register

Router ini terhubung dengan register di MongoDB. End point ini dapat diakses oleh non user dan admin.

- Endpoint : /register
- Request :

```
{
    "name": "string",
    "email": "string",
    "email_Ortu": "string"
    "no_hp": "Number",
    "birthdate": "Date",
    "password": "string",
    "gender": "string",
    "role" : "string",
    "member" : "string",
}
```

## 2. Login

Router ini terhubung dengan login di MongoDb. Hanya role admin dan user yang dapat memiliki akses di endpoint ini.

- Endpoint : /login
- Request :
  ```
  {
      "email": "string",
      "password": "string"
  }
  ```

## 3. Tim Kami Collection

| Judul     | Tipe     | Deskripsi                                                                   |
| --------- | -------- | --------------------------------------------------------------------------- |
| \_id      | ObjectId | ID Tim Kami dibuat secara otomatis oleh MongoDB saat admin menambahkan data |
| nama      | string   | Nama dari Tim Kami                                                          |
| deskripsi | string   | Deskripsi mengenai anggota tim                                              |
| posisi    | string   | Jabatan/posisi di dalam tim                                                 |
| gambar    | string   | Foto dari anggota tim                                                       |

### a. Create Tim Kami

Router ini terhubung dengan Tim Kami collection di mongoDB. hanya role admin yang bisa mengakses.

Request :

- Method : POST
- Endpoint : /tim/add-tim
- Header :
  - Tipe konten : application/json
  - Accept: application/json
  - Authorization: bearer token
- Body :

```
{
   "nama" : "string",
   "deskripsi" : "string",
   "posisi" : "string",
   "gambar" : "string"
}
```

- Response :

```
{
    "message": "tim added",
    "result": {
        "nama": "string",
        "deskripsi": "string",
        "posisi": "string",
        "gambar": "string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date"
    }
}
```

### b. Read All Tim Kami

Router ini terhubung ke Tim Kami collection di MongoDB. role admin, user dan non user dapat membaca Tim Kami.

Request :

- Method : GET
- Endpoint : /tim
- Header :
  - Accept: application/json
- Response :

```
"result": {
    "nama": "string",
    "deskripsi": "string",
    "posisi": "string",
    "gambar": "string",
    "_id": "ObjectId",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### c. Read by Id Tim Kami

Router ini terhubung ke Tim Kami collection di MongoDB. role admin, user, dan non user dapat membaca Tim Kami berdasarkan Id.

Request :

- Method : GET
- Endpoint : /tim/:id
- Header :
  - Accept: application/json
- Response :

```
"result": {
    "nama": "string",
    "deskripsi": "string",
    "posisi": "string",
    "gambar": "string",
    "_id": "ObjectId",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### d. Update Tim Kami

Router ini terhubung ke Tim Kami collection di MongoDB. hanya role admin yang dapat update data Tim Kami berdasarkan Id.

Request :

- Method : PATCH
- Endpoint : /tim/edit-tim/:id
- Header :
  - Content-Type: application/json
  - Accept: application/json
  - Authorization: bearer token
- Body :

```
{
    "nama" : "string",
    "deskripsi" : "string",
    "posisi" : "string",
    "gambar" : "string"
}
```

- Response :

```
{
    "message": "tim updated"
}
```

### e. Delete Tim Kami

Router ini terhubung ke Tim Kami collection di MongoDB. hanya role admin yang dapat delete data Tim Kami berdasarkan Id.

Request :

- Method : DELETE
- Endpoint : /tim/delete-tim/:id
- Header :
  - Accept: application/json
  - Authorization: bearer token
- Response :

```
{
    "message": "tim deleted"
}
```

## 4. Webinar Collection

| Judul     | Tipe     | Deskripsi                                                                  |
| --------- | -------- | -------------------------------------------------------------------------- |
| \_id      | ObjectId | ID Webinar dibuat secara otomatis oleh MongoDB saat admin menambahkan data |
| judul     | string   | Judul tentang webinar                                                      |
| deskripsi | string   | Deskripsi webinar                                                          |
| gambar    | string   | Foto dari webinar                                                          |

### a. Create Webinar

Router ini terhubung dengan webinar collection di mongoDB. Hanya bisa diakses oleh role admin.

Request :

- Method : POST
- Endpoint : /webinar/add-webinar
- Header :
  - Tipe konten : application/json
  - Accept: application/json
  - Authorization: bearer token
- Body :

```
{
   "judul" : "string",
   "deskripsi" : "string",
   "gambar" : "string"
}
```

- Response :

```
{
    "message": "webinar added",
    "result": {
        "judul": "string",
        "deskripsi": "string",
        "gambar": "string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}
```

### b. Read All Webinar

Router ini terhubung ke webinar collection di MongoDB. role admin,user, dan non user dapat melihat info webinar.

Request :

- Method : GET
- Endpoint : /webinar
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "judul": "string",
    "deskripsi": "string",
    "gambar": "string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### c. Read by Id webinar

Router ini terhubung ke webinar collection di MongoDB. role admin, user dan non user dapat melihat webinar berdasarkan Id.

Request :

- Method : GET
- Endpoint : /webinar/:id
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "judul": "string",
    "deskripsi": "string",
    "gambar": "string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### d. Update webinar

Router ini terhubung ke webinar collection di MongoDB. hanya role admin yang dapat update data webinar berdasarkan Id.
Request :

- Method : PATCH
- Endpoint : /webinar/edit-webinar/:id
- Header :
  - Content-Type: application/json
  - Accept: application/json
  - Authorization: bearer token
- Body :

```
{
    "judul" : "string",
    "deskripsi" : "string",
    "gambar" : "string"
}
```

- Response :

```
{
    "message": "webinar updated"
}
```

### e. Delete webinar

Router ini terhubung ke webinar collection di MongoDB. hanya role admin yang dapat delete data webinar berdasarkan Id.

Request :

- Method : DELETE
- Endpoint : /webinar/delete-webinar/:id
- Header :
  - Accept: application/json
  - Authorization: bearer token
- Response :

```
{
    "message": "webinar deleted"
}
```

## 5. Artikel Collection

| Judul     | Tipe     | Deskripsi                                                                  |
| --------- | -------- | -------------------------------------------------------------------------- |
| \_id      | ObjectId | ID Artikel dibuat secara otomatis oleh MongoDB saat admin menambahkan data |
| judul     | string   | Judul tentang artikel                                                      |
| deskripsi | string   | Deskripsi artikel                                                          |
| gambar    | string   | Foto dari artikel                                                          |

### a. Create Artikel

Router ini terhubung dengan artikel collection di mongoDB.
Hanya role admin yang dapat mengakses.

Request :

- Method : POST
- Endpoint : /artikel/add-artikel
- Header :
  - Tipe konten : application/json
  - Accept: application/json
  - Authorization: bearer token
- Body :

```
{
   "judul" : "string",
   "deskripsi" : "string",
   "gambar" : "string"
}
```

- Response :

```
{
    "message": "artikel added",
    "result": {
        "judul": "string",
        "deskripsi": "string",
        "gambar": "string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}
```

### b. Read All Artikel

Router ini terhubung ke artikel collection di MongoDB. role admin, user, dan non user dapat melihat info artikel.

Request :

- Method : GET
- Endpoint : /artikel
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "judul": "string",
    "deskripsi": "string",
    "gambar": "string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### c. Read by Id artikel

Router ini terhubung ke artikel collection di MongoDB. role admin, user, dan non user dapat melihat artikel berdasarkan Id.

Request :

- Method : GET
- Endpoint : /artikel/:id
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "judul": "string",
    "deskripsi": "string",
    "gambar": "string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### d. Update artikel

Router ini terhubung ke artikel collection di MongoDB. hanya role admin yang dapat update data artikel berdasarkan Id.
Request :

- Method : PATCH
- Endpoint : /artikel/edit-artikel/:id
- Header :
  - Content-Type: application/json
  - Accept: application/json
  - Authorization: bearer token
- Body :

```
{
    "judul" : "string",
    "deskripsi" : "string",
    "gambar" : "string"
}
```

- Response :

```
{
    "message": "artikel updated"
}
```

### e. Delete artikel

Router ini terhubung ke artikel collection di MongoDB. hanya role admin yang dapat delete data artikel berdasarkan Id.
Request :

- Method : DELETE
- Endpoint : /artikel/delete-artikel/:id
- Header :
  - Accept: application/json
  - Authorization: bearer token
- Response :

```
{
    "message": "artikel deleted"
}
```

## 6. Testimoni Collection

| Judul     | Tipe     | Deskripsi                                                                    |
| --------- | -------- | ---------------------------------------------------------------------------- |
| \_id      | ObjectId | ID Testimoni dibuat secara otomatis oleh MongoDB saat admin menambahkan data |
| judul     | string   | Judul tentang testimoni                                                      |
| deskripsi | string   | Deskripsi testimoni                                                          |
| video     | string   | video dari user testimoni                                                    |
| problema  | string   | masalah dari user testimoni                                                  |

### a. Create testimoni

Router ini terhubung dengan testimoni collection di mongoDB. hanya role admin yang bisa mengakses.

Request :

- Method : POST
- Endpoint : /testimoni/add-testimoni
- Header :
  - Tipe konten : application/json
  - Accept: application/json
  - Authorization: bearer token
- Body :

```
{
   "judul" : "string",
   "deskripsi" : "string",
   "video" : "string",
   "problema" : "string"
}
```

- Response :

```
{
    "message": "testimoni added",
    "result": {
        "judul" : "string",
        "deskripsi" : "string",
        "video" : "string",
        "problema" : "string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}
```

### b. Read All testimoni

Router ini terhubung ke testimoni collection di MongoDB. role user, admin, dan non user dapat melihat info testimoni.

Request :

- Method : GET
- Endpoint : /testimoni
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "judul" : "string",
    "deskripsi" : "string",
    "video" : "string",
    "problema" : "string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

## c. Read by Id testimoni

Router ini terhubung ke testimoni collection di MongoDB. role admin, user, dan non user dapat melihat testimoni berdasarkan Id.

Request :

- Method : GET
- Endpoint : /testimoni/:id
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "judul" : "string",
    "deskripsi" : "string",
    "video" : "string",
    "problema" : "string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### d. Update testimoni

Router ini terhubung ke testimoni collection di MongoDB. hanya role admin yang dapat update data testimoni berdasarkan Id.

Request :

- Method : PATCH
- Endpoint : /testimoni/edit-testimoni/:id
- Header :
  - Content-Type: application/json
  - Accept: application/json
  - Authorization: bearer token
- Body :

```
{
    "judul" : "string",
    "deskripsi" : "string",
    "gambar" : "string"
}
```

- Response :

```
{
    "message": "testimoni updated"
}
```

### e. Delete testimoni

Router ini terhubung ke webinar collection di MongoDB. hanya role admin yang dapat delete data webinar berdasarkan Id.

Request :

- Method : DELETE
- Endpoint : /testimoni/delete-testimoni/:id
- Header :
  - Accept: application/json
  - Authorization: bearer token
- Response :

```
{
    "message": "testimoni deleted"
}
```

## 7. Komunitas Collection <!-- ini gimana -->

| Judul              | Tipe     | Deskripsi                                                                    |
| ------------------ | -------- | ---------------------------------------------------------------------------- |
| \_id               | ObjectId | ID komunitas dibuat secara otomatis oleh MongoDB saat admin menambahkan data |
| judul              | string   | Judul tentang komunitas                                                      |
| deskripsi          | string   | Deskripsi komunitas                                                          |
| gambar             | string   | Foto dari komunitas                                                          |
| judul_dokumentasi  | string   | Judul tentang komunitas                                                      |
| desk_dokumentasi   | string   | Deskripsi komunitas                                                          |
| gambar_dokumentasi | string   | Foto dari komunitas                                                          |

### a. Create komunitas

Router ini terhubung dengan komunitas collection di mongoDB. hanya role admin yang bisa mengakses.

Request :

- Method : POST
- Endpoint : /komunitas/add-komunitas
- Header :
  - Tipe konten : application/json
  - Accept: application/json
  - Authorization: bearer token
- Body :

```
{
   "judul": "string",
   "deskripsi":"string",
   "gambar":"string",
   "judul_dokumentasi":"string",
   "desk_dokumentasi":"string",
   "gambar_dokumentasi":"string"
}
```

- Response :

```
{
    "message": "komunitas added",
    "result": {
        "judul": "string",
        "deskripsi":"string",
        "gambar":"string",
        "judul_dokumentasi":"string",
        "desk_dokumentasi":"string",
        "gambar_dokumentasi":"string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}
```

### b. Read All komunitas

Router ini terhubung ke komunitas collection di MongoDB. role admin, user, dan non user dapat melihat info komunitas.

Request :

- Method : GET
- Endpoint : /komunitas
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "judul": "string",
    "deskripsi":"string",
    "gambar":"string",
    "judul_dokumentasi":"string",
    "desk_dokumentasi":"string",
    "gambar_dokumentasi":"string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### c. Read by Id komunitas

Router ini terhubung ke komunitas collection di MongoDB. role admin, user, dan non user dapat melihat komunitas berdasarkan Id.

Request :

- Method : GET
- Endpoint : /komunitas/:id
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "judul": "string",
    "deskripsi":"string",
    "gambar":"string",
    "judul_dokumentasi":"string",
    "desk_dokumentasi":"string",
    "gambar_dokumentasi":"string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### d. Update komunitas

Router ini terhubung ke komunitas collection di MongoDB. hanya role admin yang dapat update data komunitas berdasarkan Id.

Request :

- Method : PATCH
- Endpoint : /komunitas/edit-komunitas/:id
- Header :
  - Content-Type: application/json
  - Accept: application/json
  - Authorization: bearer token
- Body :

```
{
    "judul": "string",
    "deskripsi":"string",
    "gambar":"string",
    "judul_dokumentasi":"string",
    "desk_dokumentasi":"string",
    "gambar_dokumentasi":"string"
}
```

- Response :

```
{
    "message": "komunitas updated"
}
```

### e. Delete komunitas

Router ini terhubung ke komunitas collection di MongoDB. hanya role admin yang dapat delete data komunitas berdasarkan Id.

Request :

- Method : DELETE
- Endpoint : /komunitas/delete-komunitas/:id
- Header :
  - Accept: application/json
  - Authorization: bearer token
- Respone :

```
{
    "message": "komunitas deleted"
}
```

## 8. Kategori Masalah Collection

| Judul     | Tipe     | Deskripsi                                                                   |
| --------- | -------- | --------------------------------------------------------------------------- |
| \_id      | ObjectId | ID Kategori dibuat secara otomatis oleh MongoDB saat admin menambahkan data |
| judul     | string   | Judul tentang kategori masalah                                              |
| deskripsi | string   | Deskripsi kategori masalah                                                  |
| gambar    | string   | Gambar dari kategori masalah                                                |

### a. Create kategori masalah

Router ini terhubung dengan kategori masalah collection di mongoDB. hanya role admin yang bisa mengakses.

Request :

- Method : POST
- Endpoint : /kategori/add-kategori
- Header :
  - Tipe konten : application/json
  * Accept: application/json
  * Authorization: bearer token
- Body :

```
{
   "judul" : "string",
   "deskripsi" : "string",
   "gambar":"string"
}
```

- Response :

```
{
    "message": "kategori masalah added",
    "result": {
        "judul" : "string",
        "deskripsi" : "string",
        "gambar":"string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}
```

### b. Read All Kategori Masalah

Router ini terhubung ke kategori masalah collection di MongoDB. role admin, user, dan non user dapat melihat info kategori masalah.

Request :

- Method : GET
- Endpoint : /kategori
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "judul" : "string",
    "deskripsi" : "string",
    "gambar":"string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### c. Read by Id kategori masalah

Router ini terhubung ke kategori masalah collection di MongoDB. role admin, user, dan non user dapat melihat kategori masalah berdasarkan Id.

Request :

- Method : GET
- Endpoint : /kategori/:id
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "judul" : "string",
    "deskripsi" : "string",
    "gambar":"string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### d. Update kategori masalah

Router ini terhubung ke kategori masalah collection di MongoDB. hanya role admin yang dapat update data kategori masalah berdasarkan Id.

Request :

- Method : PATCH
- Endpoint : /kategori/edit-kategori/:id
- Header :
  - Content-Type: application/json
  - Accept: application/json
  - Authorization: bearer token
- Body :

```
{
    "judul" : "string",
    "deskripsi" : "string",
    "gambar" : "string"
}
```

- Response :

```
{
    "message": "kategori masalah updated"
}
```

### e. Delete kategori masalah

Router ini terhubung ke kategori masalah collection di MongoDB. hanya role admin yang dapat delete data kategori masalah berdasarkan Id.

Request :

- Method : DELETE
- Endpoint : /kategori/delete-kategori/:id
- Header :
  - Accept: application/json
  * Authorization: bearer token
- Response :

```
{
    "message": "kategori masalah deleted"
}
```

## 9. Admin Collection

| Judul    | Tipe     | Deskripsi                                                                |
| -------- | -------- | ------------------------------------------------------------------------ |
| \_id     | ObjectId | ID Admin dibuat secara otomatis oleh MongoDB saat admin menambahkan data |
| name     | string   | nama admin                                                               |
| email    | string   | email admin                                                              |
| password | string   | password dari admin                                                      |
| role     | string   | password dari admin                                                      |

### a. Create admin

Router ini terhubung dengan admin collection di mongoDB. hanya role admin yang bisa mengakses

Request :

- Method : POST
- Endpoint : /admin/add-users
- Header :
  - Tipe konten : application/json
  - Accept: application/json
  * Authorization: bearer token
- Body :

```
{
   "name": "string",
   "email": "string",
   "password": "string",
   "role": "string"
}
```

- Response :

```
{
    "message": "user added",
    "result": {
        "name": "string",
        "email": "string",
        "password": "string",
        "role": "string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}
```

### b. Read All user

Router ini terhubung ke admin collection di MongoDB. hanya admin dapat melihat info user.

Request :

- Method : GET
- Endpoint : /list-users
- Header :
  - Accept: application/json
  * Authorization: bearer token
- Response :

```
{
    "_id": "ObjectId",
    "name": "string",
    "email": "string",
    "password": "string",
    "role": "string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### c. Read by Id user

Router ini terhubung ke admin collection di MongoDB. admin role dapat melihat user berdasarkan Id.

Request :

- Method : GET
- Endpoint : /users/:id
- Header :
  - Accept: application/json
  * Authorization: bearer token
- Response :

```
{
    "_id": "ObjectId",
    "name": "string",
    "email": "string",
    "password": "string",
    "role": "string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### d. Update user

Router ini terhubung ke admin collection di MongoDB. hanya role admin yang dapat update data user berdasarkan Id.

Request :

- Method : PATCH
- Endpoint : /users/:id
- Header :
  - Content-Type: application/json
  - Accept: application/json
  * Authorization: bearer token
- Body :

```
{
    "name": "string",
    "email": "string",
    "password": "string",
    "role": "string"
}
```

- Response :

```
{
    "message": "user updated"
}
```

### e. Delete user

Router ini terhubung ke user collection di MongoDB. hanya role admin yang dapat delete data user Id.

Request :

- Method : DELETE
- Endpoint : /users/:id
- Header :
  - Accept: application/json
  * Authorization: bearer token
- Response :

```
{
    "message": "user deleted"
}
```

## 10. Psikolog Collection

| Judul     | Tipe     | Deskripsi                                                                      |
| --------- | -------- | ------------------------------------------------------------------------------ |
| \_id      | ObjectId | ID Psikolog dibuat secara otomatis oleh MongoDB saat psikolog menambahkan data |
| name      | string   | nama psikolog                                                                  |
| spesialis | string   | spesialis psikolog                                                             |
| deskripsi | string   | deskripsi dari psikolog                                                        |
| testimoni | string   | testimoni dari psikolog                                                        |
| gambar    | string   | gambar dari psikolog                                                           |

### a. Create psikolog

Router ini terhubung dengan psikolog collection di mongoDB. hanya bisa diakses oleh role admin.

Request :

- Method : POST
- Endpoint : /psikolog/add-psikolog
- Header :
  - Tipe konten : application/json
  - Accept: application/json
  * Authorization: bearer token
- Body :

```
{
   "name": "string",
   "spesialis": "string",
   "deskripsi": "string",
   "testimoni": "string",
   "gambar": "string"
}
```

- Response :

```
{
    "message": "psikolog added",
    "result": {
        "name": "string",
        "spesialis": "string",
        "deskripsi": "string",
        "testimoni": "string",
        "gambar": "string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}
```

### b. Read All psikolog

Router ini terhubung ke psikolog collection di MongoDB. role admin, user, dan non user dapat melihat info psikolog.

Request :

- Method : GET
- Endpoint : /psikolog
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "name": "string",
    "spesialis": "string",
    "deskripsi": "string",
    "testimoni": "string",
    "gambar": "string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### c. Read by Id psikolog

Router ini terhubung ke psikolog collection di MongoDB. role admin, user, dan non user dapat melihat psikolog berdasarkan Id.

Request :

- Method : GET
- Endpoint : /psikolog/:id
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "name": "string",
    "spesialis": "string",
    "deskripsi": "string",
    "testimoni": "string",
    "gambar": "string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### d. Update psikolog

Router ini terhubung ke psikolog collection di MongoDB. hanya role admin yang dapat update data psikolog berdasarkan Id.
Request :

- Method : PATCH
- Endpoint : /psikolog/edit-psikolog/:id
- Header :
  - Content-Type: application/json
  - Accept: application/json
  * Authorization: bearer token
- Body :

```
{
    "name": "string",
    "spesialis": "string",
    "deskripsi": "string",
    "testimoni": "string",
    "gambar": "string"
}
```

- Response :

```
{
    "message": "psikolog updated"
}
```

### e. Delete psikolog

Router ini terhubung ke psikolog collection di MongoDB. hanya role admin yang dapat delete data psikolog Id.

Request :

- Method : DELETE
- Endpoint : /psikolog/delete-psikolog/:id
- Header :
  - Accept: application/json
  * Authorization: bearer token
- Respone :

```
{
    "message": "psikolog deleted"
}
```

## 10. Hubungi Collection

| Judul   | Tipe     | Deskripsi                                                                   |
| ------- | -------- | --------------------------------------------------------------------------- |
| \_id    | ObjectId | ID Message dibuat secara otomatis oleh MongoDB saat hubungimenambahkan data |
| email   | string   | nama user                                                                   |
| keluhan | string   | keluhan dari user                                                           |

### a. Create Message

Router ini terhubung dengan hubungi kami collection di mongoDB. hanya role user yang bisa mengakses.

Request :

- Method : POST
- Endpoint : /message/send-message
- Header :
  - Tipe konten : application/json
  - Accept: application/json
  * Authorization: bearer token
- Body :

```
{
   "email": "string",
   "keluhan": "string"
}
```

- Response :

```
{
    "message": "message submitted",
    "result": {
        "email": "string",
        "keluhan": "string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}
```

### b. Read All Message

Router ini terhubung ke hubungi collection di MongoDB. hanya admin yang dapat melihat pesan yang dikirimkan.

Request :

- Method : GET
- Endpoint : /message
- Header :
  - Accept: application/json
  * Authorization: bearer token
- Response :

```
{
    "_id": "ObjectId",
    "email": "string",
    "keluhan": "string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### c. Read by Id Message

Router ini terhubung ke hubungi kami collection di MongoDB. hanya admin yang dapat melihat data pesan berdasarkan Id.

Request :

- Method : GET
- Endpoint : /message/:id
- Header :
  - Accept: application/json
  * Authorization: bearer token
- Response :

```
{
    "_id": "ObjectId",
    "email": "string",
    "keluhan": "string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

## 11. Testimoni Psikolog Collection

| Judul       | Tipe     | Deskripsi                                                                   |
| ----------- | -------- | --------------------------------------------------------------------------- |
| \_id        | ObjectId | ID Message dibuat secara otomatis oleh MongoDB saat hubungimenambahkan data |
| patientname | string   | nama user                                                                   |
| deskripsi   | string   | deskripsi keluhan dari user                                                 |
| gambar      | string   | gambar dari testimoni psikolog                                              |
| problema    | string   | keluhan dari user                                                           |

### a. Create Testimoni Psikolog

Router ini terhubung dengan testimoni Psikolog collection di mongoDB. hanya role admin yang bisa mengakses.

Request :

- Method : POST
- Endpoint : /testiPsikolog/add-testiPsikolog
- Header :
  - Tipe konten : application/json
  - Accept: application/json
  * Authorization: bearer token
- Body :

```
{
   "patientname": "string",
   "deskripsi": "string",
   "gambar": "string",
   "problema": "string"
   "psikolog": "string"
}
```

- Response :

```
{
    "message": "message submitted",
    "result": {
        "patientname": "string",
        "deskripsi": "string",
        "gambar": "string",
        "problema": "string",
        "psikolog": "string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}
```

### b. Read All Testi Psikolog

Router ini terhubung ke testimoni Psikolog  collection di MongoDB. role admin, user, dan non user dapat melihat pesan yang dikirimkan.

Request :

- Method : GET
- Endpoint : /testiPsikolog
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "patientname": "string",
    "deskripsi": "string",
    "gambar": "string",
    "problema": "string",
    "psikolog": "string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### c. Read by Id Testi Psikolog

Router ini terhubung ke testimoni Psikolog collection di MongoDB. role admin, user, dan non user dapat melihat data pesan berdasarkan Id.

Request :

- Method : GET
- Endpoint : /testiPsikolog/:id
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "patientname": "string",
    "deskripsi": "string",
    "gambar": "string",
    "problema": "string",
    "psikolog": "string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### e. Delete testi psikolog

Router ini terhubung ke testimoni psikolog collection di MongoDB. hanya role admin yang dapat delete data psikolog Id.

Request :

- Method : DELETE
- Endpoint : /testiPsikolog/delete-testiPsikolog/:id
- Header :
  - Accept: application/json
  * Authorization: bearer token
- Respone :

```
{
    "message": "psikolog deleted"
}
```

## 12. Konsultasi Collection

| Judul      | Tipe     | Deskripsi                                                                     |
| ---------- | -------- | ----------------------------------------------------------------------------- |
| \_id       | ObjectId | ID Konsultasi dibuat secara otomatis oleh MongoDB saat admin menambahkan data |
| name       | string   | Judul tentang Konsultasi                                                      |
| psikolog   | string   | Deskripsi Konsultasi                                                          |
| gender     | string   | gender dari                                                                   |
| date       | date     | tanggal Konsultasi                                                            |
| no_hp      | string   | nomor hp Konsultasi                                                           |
| email      | string   | email pasien                                                                  |
| email_ortu | string   | email orang tua pasien                                                        |
| keluhan    | string   | keluhan dari Konsultasi                                                       |

### a. Create Konsultasi

Router ini terhubung dengan Konsultasi collection di mongoDB. Hanya bisa diakses oleh role admin.

Request :

- Method : POST
- Endpoint : /konsultasi/add-konsultasi
- Header :
  - Tipe konten : application/json
  - Accept: application/json
  - Authorization: bearer token
- Body :

```
{
   "judul" : "string",
   "name" : "string",
   "psikolog" : "string",
   "gender" : "string",
   "date" : "date",
   "no_hp" : "string",
   "email" : "string",
   "email_Ortu" : "string",
   "keluhan" : "string"
}
```

- Response :

```
{
    "message": "konsultasi added",
    "result": {
        "judul" : "string",
        "name" : "string",
        "psikolog" : "string",
        "gender" : "string",
        "date" : "date",
        "no_hp" : "string",
        "email" : "string",
        "email_Ortu" : "string",
        "keluhan" : "string"
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}
```

### b. Read All Konsultasi

Router ini terhubung ke konsultasi collection di MongoDB. role admin,user, dan non user dapat melihat info konsultasi.

Request :

- Method : GET
- Endpoint : /konsultasi
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "judul" : "string",
    "name" : "string",
    "psikolog" : "string",
    "gender" : "string",
    "date" : "date",
    "no_hp" : "string",
    "email" : "string",
    "email_Ortu" : "string",
    "keluhan" : "string"
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### c. Read by Id Konsultasi

Router ini terhubung ke Konsultasi collection di MongoDB. role admin, user dan non user dapat melihat Konsultasi berdasarkan Id.

Request :

- Method : GET
- Endpoint : /konsultasi/:id
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "judul" : "string",
    "name" : "string",
    "psikolog" : "string",
    "gender" : "string",
    "date" : "date",
    "no_hp" : "string",
    "email" : "string",
    "email_Ortu" : "string",
    "keluhan" : "string"
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### d. Update Konsultasi

Router ini terhubung ke konsultasi collection di MongoDB. hanya role admin yang dapat update data konsultasi berdasarkan Id.
Request :

- Method : PATCH
- Endpoint : /konsultasi/edit-konsultasi/:id
- Header :
  - Content-Type: application/json
  - Accept: application/json
  - Authorization: bearer token
- Body :

```
{
    "judul" : "string",
    "name" : "string",
    "psikolog" : "string",
    "gender" : "string",
    "date" : "date",
    "no_hp" : "string",
    "email" : "string",
    "email_Ortu" : "string",
    "keluhan" : "string"
}
```

- Response :

```
{
    "message": "konsultasi updated"
}
```

### e. Delete Konsultasi

Router ini terhubung ke konsultasi collection di MongoDB. hanya role admin yang dapat delete data konsultasi berdasarkan Id.

Request :

- Method : DELETE
- Endpoint : /konsultasi/delete-konsultasi/:id
- Header :
  - Accept: application/json
  - Authorization: bearer token
- Response :

```
{
    "message": "konsultasi deleted"
}
```

## 13 Deteksi Collection

| Judul      | Tipe     | Deskripsi                                                                     |
| ---------- | -------- | ----------------------------------------------------------------------------- |
| \_id       | ObjectId | ID Deteksi dibuat secara otomatis oleh MongoDB saat admin menambahkan data    |
| user       | string   | user yang melakukan Deteksi                                                   |
| question   | string   | pertanyaan-pertanyaan terkait  Deteksi                                        |
| totalScore | number   | total score                                                                   |

### a. Create Deteksi

Router ini terhubung dengan Deteksi collection di mongoDB. Hanya bisa diakses oleh role admin.

Request :

- Method : POST
- Endpoint : /deteksi/add-deteksi
- Header :
  - Tipe konten : application/json
  - Accept: application/json
  - Authorization: bearer token
- Body :

```
{
   "user" " "string",
   "question" : "string",
   "totalScore" : "number" 
}
```

- Response :

```
{
    "message": "konsultasi added",
    "result": {
        "user" : "string",
        "question" : "string",
        "totalScore" : "number",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}
```

### b. Read All Deteksi

Router ini terhubung ke Deteksi collection di MongoDB. role admin,user, dan non user dapat melihat info webinar.

Request :

- Method : GET
- Endpoint : /deteksi
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "user" : "string",
    "question" : "string",
    "totalScore" : "number",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### c. Read by Id Deteksi

Router ini terhubung ke Deteksi collection di MongoDB. role admin, user dan non user dapat melihat webinar berdasarkan Id.

Request :

- Method : GET
- Endpoint : /deteksi/:id
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "user" : "string",
    "question" : "string",
    "totalScore" : "number",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### d. Update Deteksi

Router ini terhubung ke Deteksi collection di MongoDB. hanya role admin yang dapat update data Deteksi berdasarkan Id.
Request :

- Method : PATCH
- Endpoint : /deteksi/edit-deteksi/:id
- Header :
  - Content-Type: application/json
  - Accept: application/json
  - Authorization: bearer token
- Body :

```
{
    "user" : "string",
    "question" : "string",
    "totalScore" : "number"
}
```

- Response :

```
{
    "message": "deteksi updated"
}
```

### e. Delete Deteksi

Router ini terhubung ke Deteksi collection di MongoDB. hanya role admin yang dapat delete data Deteksi berdasarkan Id.

Request :

- Method : DELETE
- Endpoint : /deteksi/delete-deteksi/:id
- Header :
  - Accept: application/json
  - Authorization: bearer token
- Response :

```
{
    "message": "deteksi deleted"
}
```

## 14 Dokumentasi Komunitas Collection

| Judul      | Tipe     | Deskripsi                                                                     |
| ---------- | -------- | ----------------------------------------------------------------------------- |
| \_id       | ObjectId | ID Deteksi dibuat secara otomatis oleh MongoDB saat admin menambahkan data    |
| judul      | string   | Judul tentang Dokumentasi Komunitas                                           |
| deskripsi  | string   | Deskripsi Dokumentasi Komunitas                                               |
| gambar     | string   | gambar dari Dokumentasi Komunitas                                             |
| komunitas  | ObjectId | ID dari komunitas                                                             |

### a. Create Dokumentasi Komunitas

Router ini terhubung dengan Dokumentasi Komunitas collection di mongoDB. Hanya bisa diakses oleh role admin.

Request :

- Method : POST
- Endpoint : /dokumentasi/add-dokumentasi
- Header :
  - Tipe konten : application/json
  - Accept: application/json
  - Authorization: bearer token
- Body :

```
{
   "judul" : "string",
   "deskripsi" : "string",
   "gambar" : "string",
   "komunitas" : "string" 
}
```

- Response :

```
{
    "message": "dokumentasi added",
    "result": {
        "judul" : "string",
        "deskripsi" : "string",
        "gambar" : "string",
        "komunitas" : "string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}
```

### b. Read All Dokumentasi Komunitas

Router ini terhubung ke Dokumentasi Komunitas collection di MongoDB. role admin,user, dan non user dapat melihat semua Dokumentasi Komunitas.

Request :

- Method : GET
- Endpoint : /dokumentasi
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "judul" : "string",
    "deskripsi" : "string",
    "gambar" : "string",
    "komunitas" : "string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### c. Read by Id Dokumentasi Komunitas

Router ini terhubung ke Dokumentasi Komunitas collection di MongoDB. role admin, user dan non user dapat melihat Dokumentasi Komunitas berdasarkan Id.

Request :

- Method : GET
- Endpoint : /dokumentasi/:id
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "judul" : "string",
    "deskripsi" : "string",
    "gambar" : "string",
    "komunitas" : "string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### d. Update Dokumentasi Komunitas

Router ini terhubung ke Dokumentasi Komunitas collection di MongoDB. hanya role admin yang dapat update data Dokumentasi Komunitas berdasarkan Id.
Request :

- Method : PATCH
- Endpoint : /dokumentasi/edit-dokumentasi/:id
- Header :
  - Content-Type: application/json
  - Accept: application/json
  - Authorization: bearer token
- Body :

```
{
    "judul" : "string",
    "deskripsi" : "string",
    "gambar" : "string",
    "komunitas" : "string"
}
```

- Response :

```
{
    "message": "Dokumentasi Komunitas updated"
}
```

### e. Delete Dokumentasi Komunitas

Router ini terhubung ke Dokumentasi Komunitas collection di MongoDB. hanya role admin yang dapat delete data Dokumentasi Komunitas berdasarkan Id.

Request :

- Method : DELETE
- Endpoint : /deteksi/delete-deteksi/:id
- Header :
  - Accept: application/json
  - Authorization: bearer token
- Response :

```
{
    "message": "Dokumentasi Komunitas deleted"
}
```

## 15 Paket Konsultasi Collection

| Judul     | Tipe     | Deskripsi                                                                     |
| --------- | -------- | ----------------------------------------------------------------------------- |
| \_id      | ObjectId | ID Deteksi dibuat secara otomatis oleh MongoDB saat admin menambahkan data    |
| name      | string   | nama Paket Konsultasi                                                         |
| deskripsi | string   | Deskripsi Paket Konsultasi                                                    |
| harga     | string   | harga dari Paket Konsultasi                                                   |

### a. Create Paket Konsultasi

Router ini terhubung dengan Paket Konsultasi collection di mongoDB. Hanya bisa diakses oleh role admin.

Request :

- Method : POST
- Endpoint : /paket/add-paket
- Header :
  - Tipe konten : application/json
  - Accept: application/json
  - Authorization: bearer token
- Body :

```
{
   "name" : "string",
   "deskripsi" : "string",
   "harga" : "string",
}
```

- Response :

```
{
    "message": "paket konsultasi added",
    "result": {
        "name" : "string",
        "deskripsi" : "string",
        "harga" : "string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}
```

### b. Read All Paket Konsultasi

Router ini terhubung ke Paket Konsultasi collection di MongoDB. role admin,user, dan non user dapat melihat semua Paket Konsultasi.

Request :

- Method : GET
- Endpoint : /paket
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "name" : "string",
    "deskripsi" : "string",
    "harga" : "string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### c. Read by Id Paket Konsultasi

Router ini terhubung ke Paket Konsultasi collection di MongoDB. role admin, user dan non user dapat melihat Paket Konsultasi berdasarkan Id.

Request :

- Method : GET
- Endpoint : /paket/:id
- Header :
  - Accept: application/json
- Response :

```
{
    "_id": "ObjectId",
    "name" : "string",
    "deskripsi" : "string",
    "harga" : "string",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### d. Update Paket Konsultasi

Router ini terhubung ke Paket Konsultasi collection di MongoDB. hanya role admin yang dapat update data Paket Konsultasi berdasarkan Id.
Request :

- Method : PATCH
- Endpoint : /paket/edit-paket/:id
- Header :
  - Content-Type: application/json
  - Accept: application/json
  - Authorization: bearer token
- Body :

```
{
    "name" : "string",
    "deskripsi" : "string",
    "harga" : "string"
}
```

- Response :

```
{
    "message": "Paket Konsultasi updated"
}
```

### e. Delete Paket Konsultasi

Router ini terhubung ke Paket Konsultasi collection di MongoDB. hanya role admin yang dapat delete data Paket Konsultasi berdasarkan Id.

Request :

- Method : DELETE
- Endpoint : /paket/delete-paket/:id
- Header :
  - Accept: application/json
  - Authorization: bearer token
- Response :

```
{
    "message": "Paket Konsultasi deleted"
}
```