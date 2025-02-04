# User Analytics API

API sederhana untuk user analytics.

## Base URL
```
http://example.com/api/v1
```

## Authentication
Beberapa endpoint memerlukan autentikasi dengan JWT. 
Kirim token JWT pada header request:
```
Authorization: Bearer <your-token>
```

---
## Endpoints

### Auth

#### Register User
**POST** `/auth/signup`

**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

#### Login User
**POST** `/auth/signIn`

**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

---
## User

#### Get All Users
**GET** `/user`

**Headers:**
```
Authorization: Bearer <your-token>
```

#### Get User By ID
**GET** `/user/:id`

**Headers:**
```
Authorization: Bearer <your-token>
```

#### Delete User
**DELETE** `/user/:id`

**Headers:**
```
Authorization: Bearer <your-token>
```

#### Update User
**PUT** `/user/:id`

**Headers:**
```
Authorization: Bearer <your-token>
```

**Body (opsional, bisa kirim salah satu atau semua):**
```json
{
  "name": "New Name",
  "email": "newemail@example.com",
  "password": "newpassword123"
}
```

---
## Activity

#### Get Total Activity
**GET** `/activity`

**Headers:**
```
Authorization: Bearer <your-token>
```

#### Get Activity By ID
**GET** `/activity/:id`

**Headers:**
```
Authorization: Bearer <your-token>
```

#### Get All Activity
**GET** `/activity/all`

**Headers:**
```
Authorization: Bearer <your-token>
```

---
## Contoh Penggunaan API

### Contoh: Get All Users
**Request:**
```
GET /api/v1/user
Authorization: Bearer <your-token>
```

**Response:**
# User Analytics API

API sederhana untuk user analytics sebagai portofolio.

## Base URL
```
http://your-api-domain.com/api/v1
```

## Authentication
Beberapa endpoint memerlukan autentikasi dengan JWT. 
Kirim token JWT pada header request:
```
Authorization: Bearer <your-token>
```

---
## Endpoints

### Auth

#### Register User
**POST** `/auth/signup`

**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

#### Login User
**POST** `/auth/signIn`

**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

---
## User

#### Get All Users
**GET** `/user`

**Headers:**
```
Authorization: Bearer <your-token>
```

#### Get User By ID
**GET** `/user/:id`

**Headers:**
```
Authorization: Bearer <your-token>
```

#### Delete User
**DELETE** `/user/:id`

**Headers:**
```
Authorization: Bearer <your-token>
```

#### Update User
**PUT** `/user/:id`

**Headers:**
```
Authorization: Bearer <your-token>
```

**Body (opsional, bisa kirim salah satu atau semua):**
```json
{
  "name": "New Name",
  "email": "newemail@example.com",
  "password": "newpassword123"
}
```

---
## Activity

#### Get Total Activity
**GET** `/activity`

**Headers:**
```
Authorization: Bearer <your-token>
```

#### Get Activity By ID
**GET** `/activity/:id`

**Headers:**
```
Authorization: Bearer <your-token>
```

#### Get All Activity
**GET** `/activity/all`

**Headers:**
```
Authorization: Bearer <your-token>
```

---
## Contoh Penggunaan API

### Contoh: Get All Users
**Request:**
```
GET /api/v1/user
Authorization: Bearer <your-token>
```

**Response:**
```json
{
  "statusCode": 200,
  "msg": "Users fetched successfully",
  "data": [
    {
      "id": 9,
      "name": "User A",
      "email": "usera@example.com",
      "password": "$2b$10$71pe.Wg/NXWzxepxQnaywOsUbAcBSrxDKK0yY9MdC2R6YgnFjstbC",
      "createdAt": "2025-01-30T14:21:48.599Z",
      "updatedAt": "2025-01-30T14:21:48.599Z"
    },
    {
      "id": 13,
      "name": "User B",
      "email": "userb@example.com",
      "password": "$2b$10$MENvy/PZDpLNX193GUP5mOih04sSm7.AqUr5SKdEmIKCCTIdCqjMm",
      "createdAt": "2025-01-31T07:32:30.559Z",
      "updatedAt": "2025-01-31T07:32:30.559Z"
    },
    {
      "id": 14,
      "name": "User C",
      "email": "userc@example.com",
      "password": "$2b$10$ttrxClkqagtbsC2aQCT/behfarWTgq6WFHbONiJ3OPwj4nLaJAmRq",
      "createdAt": "2025-01-31T07:32:42.321Z",
      "updatedAt": "2025-01-31T07:45:04.910Z"
    }
  ]
}
```