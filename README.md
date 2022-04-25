# 반찬가게 매출 관리 프로젝트
<div style="text-align: center">
<img src="https://user-images.githubusercontent.com/29935107/165127248-8a6fe625-9b36-448f-acb7-764b69a98b07.png" width="50%" height="50%">

  ## [The 엄마 반찬가게](https://m.place.naver.com/place/1194601549/home?entry=ple)
  클릭하시면 반찬 가게 위치를 확인하실 수 있습니다.
  <br/>
  반찬은 역시 더엄마
</div>
<br/>

# Description

> 어머니의 반찬 가게 운영을 돕고자 제작하게 된 웹 프로젝트입니다. 가게 내의 POS기의 데이터를 실시간으로 수집하여 저장한 뒤, 금일 손님 수, 총 매출액 그 외 설정된 기간에 대한 매출액은 물론  상품 분류 [ex) 국, 김치 등],  세부 메뉴 등의 매출을 쉽게 확인할 수 있도록 기획하였습니다.


<br/>
<br/>

# 구조 요약
<div style="text-align: center">
<img src="https://user-images.githubusercontent.com/29935107/165130079-df995136-63db-45da-b465-5f18bec49479.png" width="100%" height="100%">
</div>
<br/>

<div style="font-size: 22px">
POS기의 데이터는 PostgreSql 데이터베이스에 저장되어있으며, 이를 스프링 프레임워크로 구현된 서버 단에서 처리한 뒤, 리액트에서 CSR을 진행하는 구조를 가지고 있습니다.
</div>

<br/>
<br/>

# REST API
* [Repository Wiki](https://github.com/qsc7342/BanchanMangement/wiki/POS-REST-API)에서 REST API 명세를 확인하실 수 있습니다.
<div style="text-align: center">
<img src="https://user-images.githubusercontent.com/29935107/165136214-9066d9c8-6894-44a8-a682-18bcc1d65c5f.png" width="100%" height="100%">
</div>

<br/>
<br/>

# Getting Started
* 보안상의 이유로, 해당 레포지토리에는 서버의 주소와 관련된 내용이 포함되어있지 않습니다.
* OKPOS를 사용하는 경우, properties에 아래 요소를 추가하여 사용해보실 수 있습니다.

<br/>


``` java
spring.datasource.username="username"
spring.datasource.password="password"
spring.datasource.url="Database Link"
```

* 서버를 가동시킨 뒤, 웹 서버를 실행합니다.
<br/>


```
yarn install
```
```
yarn start
```
<br/>
<br/>

# Demo

* 실제 매출 데이터입니다.
* 이미지를 클릭하시면 고화질로 확인하실 수 있습니다.
</br>
<img src="https://user-images.githubusercontent.com/29935107/165137393-ef5200bc-d7de-4a4c-b43d-b42d4a2752f8.png" width=150% height="150%">
<img src="https://user-images.githubusercontent.com/29935107/165137768-10554da4-71df-462c-83ed-f6a129f4cae7.png" width="150%" height="150%">
<img src="https://user-images.githubusercontent.com/29935107/165137609-8dc80379-a37f-4970-be5b-c1aff43a93c8.png" width="150%" height="150%">

