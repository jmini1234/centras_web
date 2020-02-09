# Centras API Documentation

## user

#### 목차

- `/users/sign_up/`
- `/users/login/`
- `/users/update/`



### /users/sign_up/



### `POST`

#### Request Format (x-www-form-urlencoded)

| id       | <string> |
| -------- | -------- |
| pw       | <string> |
| nickname | <string> |
| email    | <string> |

#### Response Format - Success

회원 등록에 성공하면 다음의 데이터 리턴 `status 200`

```json
{
    "message": "회원가입이 성공적으로 완료됐습니다."
}
```

#### Response Format - Fail

회원 등록에 실패하면 다음의 데이터 리턴 `status 400`

```json
{
    "message": "error ocurred"
}
```

중복된 아이디가 있을 때 `status 400`

```json
{
    "message": "중복된 아이디입니다."
}
```



### /users/login/



### `POST`

#### Request Format (x-www-form-urlencoded)

| id   | <string> |
| ---- | -------- |
| pw   | <string> |

#### Response Format - Success

회원 등록에 성공하면 다음의 데이터 리턴 `status 200`

```json
{
    "message": "로그인 성공",
    "user": {
        "idx": 6,
        "id": "a",
        "pw": "34954ac8bde8e338615e39b48ddc8b2ce09b2a3ba656594c498dbcccfd1d3d2d33ecbc2d3b7e6166a309967ac737db91ecdec5660947741ac493d146e5b5abc2",
        "nickname": "new nick",
        "email": "new email",
        "regist_date": "2020-02-05T15:03:27.000Z",
        "login_date": "2020-02-09T06:16:02.000Z",
        "salt": "506008305029"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZHgiOjYsImlkIjoiYSIsInNhbHQiOiI1MDYwMDgzMDUwMjkiLCJpYXQiOjE1ODEyMzIxODEsImV4cCI6MTU4MTIzNTc4MX0.rHpYo01i7lKcp2e_qW-IG5BqZLNiFbIQ1DO_aw8qTVk"
}
```

#### Response Format - Fail

로그인에 실패하면 다음의 데이터 리턴 `status 400`

```json
{
    "message": "로그인 실패"
}
```



### /users/update/



### `POST`

#### Authorization & Headers

```json
{
    "x-access-token": "<TOKEN>"
    "Content-Type" : application/x-www-form-urlencoded
}
```



#### Request Format (x-www-form-urlencoded)

| id       | <string> |
| -------- | -------- |
| email    | <string> |
| nickname | <string> |
| pw       | <string> |

#### Response Format - Success

회원 수정에 성공하면 다음의 데이터 리턴 `status 200`

```json
{
    "message": "회원정보 수정이 완료되었습니다."
}
```

#### Response Format - Fail

회원 등록에 실패하면 다음의 데이터 리턴 `status 400`

```json
{
    "message": "error ocurred"
}
```



## nursery

#### 목차

- `/nursery/register`
- `/nursery/update/{idx}/`
- `nursery/list/`
- `/nursery/{idx}/temperature/`
- `/nursery/{idx}/size/`
- `/nursery/{idx}/streaming/`
- `/nursery/delete/{idx}/`



#### Authorization & Headers

```json
{
    "x-access-token": "<TOKEN>"
    "Content-Type" : application/x-www-form-urlencoded
}
```







### API_DOC 
https://lively-rocket-8595.postman.co/collections/7395289-b94d807d-a4d1-4d44-8f1e-be8e0a5032cd?version=latest&workspace=a66d4b1a-c75b-47b4-8578-344127d3e277
