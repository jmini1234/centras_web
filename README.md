# CENTRAS 

### 스마트 양식장 관제를 위한 저전력 임베디드 시스템 개발



#### [팀 소개]

- 지도 교수 : 조동섭 교수님
- 팀원 : 박소연, 박지연, 심정민, 정연우 

#### [프로젝트 결과]
- 이화여자대학교 캡스톤 경진대회 **장려상**
- 2020 SW 인재 페스티벌 **최우수상(정보통신기획평가원장상)** </br></br>
[링크]</br>
공모전 링크 : https://swhrfestival.kr/swuniv/cate04/page01_view.do</br>
영상 링크 : https://www.youtube.com/watch?v=2qtgapoS8AM</br>


#### [기술 소개]

#### Artificial Intelligence

- **HardWare** : ESP32

- **Model** :
<img width="800" height="500" src="https://user-images.githubusercontent.com/37237145/79690553-ff1c3c80-8295-11ea-83c2-48e042da00cb.PNG">


- **FLOW CHART** : 
<img width="800" height="580" src="https://user-images.githubusercontent.com/37237145/79559030-0c8fc600-80e0-11ea-96af-c19fabf6c819.png"/>

- **기술 stack 및 도식화** :
<img width="800" height="500" src="https://user-images.githubusercontent.com/37237145/81133955-28271780-8f8e-11ea-9a2f-2785248c142c.png"/>


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



#### 화면 소개

[메인 화면] 
<br>
<img width="500" height="300" src="https://user-images.githubusercontent.com/37237145/83961674-6175de80-a8d0-11ea-9248-65174b78b98a.png"/>

[프로젝트 소개] 
<br>
<img width="500" height="300" src="https://user-images.githubusercontent.com/37237145/83961704-bade0d80-a8d0-11ea-9e21-a496f3af4a1f.png"/>

[로그인] 
<br>
<img width="500" height="300" src="https://user-images.githubusercontent.com/37237145/83961718-ce897400-a8d0-11ea-91a3-06431c80c04b.png"/>

[회원가입] 
<br>
<img width="500" height="300" src="https://user-images.githubusercontent.com/37237145/83961718-ce897400-a8d0-11ea-91a3-06431c80c04b.png"/>

[양식장 등록] 
<br>
<img width="500" height="300" src="https://user-images.githubusercontent.com/37237145/83961728-e06b1700-a8d0-11ea-94ed-0c14df1efd01.png"/>

[카메라 등록] 
<br>
<img width="500" height="300" src="https://user-images.githubusercontent.com/37237145/83961726-dea15380-a8d0-11ea-9b00-fd746aa9489a.png"/>

[스트리밍] 
<br>
<img width="500" height="300" src="https://user-images.githubusercontent.com/37237145/83961728-e06b1700-a8d0-11ea-94ed-0c14df1efd01.png"/>

[스트리밍 화면] 
<br>
<img width="500" height="300" src="https://user-images.githubusercontent.com/37237145/83961748-0e505b80-a8d1-11ea-9d35-e8daf7d3b0f8.png"/>

[물고기 크기 측정] 
<br>
<img width="500" height="300" src="https://user-images.githubusercontent.com/37237145/83961729-e234da80-a8d0-11ea-945e-c7672541d354.png"/>
