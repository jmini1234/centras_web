# CENTRAS 

### 스마트 양식장 관제를 위한 저전력 임베디드 시스템 개발



#### [팀 소개]

- 지도 교수 : 조동섭 교수님
- 팀원 : 박소연, 박지연, 심정민, 정연우 


#### [기술 소개]

#### Artificial Intelligence

- **HardWare** : ESP32

- **Model** :

- **FLOW CHART** : 
<img width="800" height="580" src="https://user-images.githubusercontent.com/37237145/79559030-0c8fc600-80e0-11ea-96af-c19fabf6c819.png"/>

#### BackEnd 

- **사용 프레임 워크** : Node.js , Express Engine 


  ```js
  // 서버 실행 
  $ npm start
  ```
  
```js
  // routes/dbConfig.js
  let dbConfig = {
  host:'Your host name',
  user :'Your user name',
  port : 3306,
  password: 'Your password',
  database: 'Your database'
}

module.exports = dbConfig;

```
```js
  // .env
   SECRET_KEY='Your secret_key',
   JWT_SECRET_KEY='Your jwt secret_key'

```
- **REST API**

  - EndPoint 및 API DOCS  :  [Wiki에서 자세히보기](<https://github.com/jmini1234/centras_web/wiki>)


#### FrontEnd

- **사용 라이브러리** : React.js



