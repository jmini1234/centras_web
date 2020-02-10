# Centras API Documentation



## user

#### 목차

- `/users/sign_up/`
- `/users/login/`
- `/users/update/`



### /users/sign_up/



### `POST`

#### Request Format (x-www-form-urlencoded)

| KEY      | VALUE(Data Type) |
| -------- | ---------------- |
| id       | string           |
| pw       | string           |
| nickname | string           |
| email    | string           |

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

| KEY  | VALUE(Data Type) |
| ---- | ---------------- |
| id   | string           |
| pw   | string           |

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



### /users/



### `PUT`

#### Authorization & Headers

```json
{
    "x-access-token": "<TOKEN>",
    "Content-Type" : "application/x-www-form-urlencoded"
}
```



#### Request Format (x-www-form-urlencoded)

| KEY      | VALUE(Data Type) |
| -------- | ---------------- |
| id       | string           |
| pw       | string           |
| nickname | string           |
| email    | string           |

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

- `/nursery/`

- `/nursery/{idx}/` [put]

- `/nursery/{idx}/` [delete]

- `/nursery/list/`

- `/nursery/{idx}/temperature/`

- `/nursery/{idx}/size/`

- `/nursery/{idx}/streaming/`




#### Authorization & Headers

```json
{
    "x-access-token": "<TOKEN>",
    "Content-Type" : "application/x-www-form-urlencoded"
}
```



### /nursery



### `POST`

#### Request Format (x-www-form-urlencoded)

| KEY        | VALUE(Data Type) |
| ---------- | ---------------- |
| nursery_id | string           |

#### Response Format - Success

회원 수정에 성공하면 다음의 데이터 리턴 `status 200`

```json
{
    "message": "양식장 등록 성공"
}
```

#### Response Format - Fail

회원 등록에 실패하면 다음의 데이터 리턴 `status 400`

```json
{
    "message": "error ocurred"
}
```



### /nursery/{idx}



### `PUT`

#### Request Format (x-www-form-urlencoded)

| KEY        | VALUE(Data Type) |
| ---------- | ---------------- |
| nursery_id | string           |

#### Response Format - Success

양식장 정보 수정에 성공하면 다음의 데이터 리턴 `status 200`

```json
{
    "message": "양식장 업데이트 성공"
}
```

#### Response Format - Fail

양식장 정보 수정에 실패하면 다음의 데이터 리턴 `status 400`

```json
{
    "message": "error ocurred"
}
```

잘못된 양식장에 접근하면 다음의 데이터 리턴 `status 400`

```json
{
    "message": "해당 양식장 없음"
}
```

양식장 수정 권한이 없을시 다음의 데이터 리턴 `status 403`

```json
{
  	"message": "삭제 권한 없음"
}
```



### /nursery/{idx}



### `DELETE`

#### Response Format - Success

양식장 삭제에 성공하면 다음의 데이터 리턴 `status 200`

```json
{
    "message": "양식장 삭제 성공"
}
```

#### Response Format - Fail

양식장 삭제에 실패하면 다음의 데이터 리턴 `status 400`

```json
{
    "message": "error ocurred"
}
```

잘못된 양식장에 접근하면 다음의 데이터 리턴 `status 400`

```json
{
    "message": "해당 양식장 없음"
}
```

양식장 삭제 권한이 없을시 다음의 데이터 리턴 `status 403`

```json
{
  	"message": "삭제 권한 없음"
}
```



### /nursery/list



### `GET`

#### Response Format - Success

양식장 조회에 성공하면 다음의 데이터 리턴 `status 200`

```json
{
    "data": [
        {
            "idx": 1,
            "user_idx": 6,
            "nursery_id": "새로운 양식장"
        },
        {
            "idx": 2,
            "user_idx": 6,
            "nursery_id": "양식장2"
        }
    ]
}
```

#### Response Format - Fail

양식장 조회에 실패하면 다음의 데이터 리턴 `status 400`

```json
{
    "message": "error ocurred"
}
```



### /nursery/{idx}/temperature



### `GET`

#### Response Format - Success

양식장 온도 조회에 성공하면 다음의 데이터 리턴 `status 200`

```json
{
    "temperature": [
        {
            "idx": 1,
            "temp": 12,
            "update_time": "2020-02-02T14:22:04.000Z",
            "nursery_idx": 2
        }
    ]
}
```

#### Response Format - Fail

양식장 온도 조회에 실패하면 다음의 데이터 리턴 `status 400`

```json
{
    "message": "error ocurred"
}
```



### /nursery/{idx}/size



### `GET`

#### Response Format - Success

양식장 물고기 크기 분류 조회에 성공하면 다음의 데이터 리턴 `status 200`

```json
{
    "size": [
        {
            "idx": 1,
            "s_num": 313,
            "m_num": 314,
            "l_num": 76,
            "update_time": "2020-02-02T02:22:04.000Z",
            "nursery_idx": 2
        }
    ]
}
```

#### Response Format - Fail

양식장 물고기 크기 분류 조회에 실패하면 다음의 데이터 리턴 `status 400`

```json
{
    "message": "error ocurred"
}
```



### /nursery/{idx}/streaming



### `GET`

#### Response Format - Success

양식장 스트리밍 조회에 성공하면 다음의 데이터 리턴 `status 200`

```json
{
    "streaming": [
        {
            "idx": 1,
            "ip": "192.14.523",
            "nursery_idx": 1
        },
        {
            "idx": 2,
            "ip": "192.11.54",
            "nursery_idx": 1
        },
        {
            "idx": 3,
            "ip": "192.88.43",
            "nursery_idx": 1
        }
    ]
}
```

#### Response Format - Fail

양식장 스트리밍 조회에 실패하면 다음의 데이터 리턴 `status 400`

```json
{
    "message": "error ocurred"
}
```

