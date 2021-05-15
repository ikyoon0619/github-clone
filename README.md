# GitHub main page 
Gitbut 사이트의 메인 페이지를 반응형으로 작업.
## Example
[Github Responsive DEMO](https://pensive-davinci-26d79f.netlify.app)

## Video link
```
https://www.youtube.com/watch?v=afvT1c1ii0c
```

## Code

### `index.html`
`Google Map API` 호출
```
AIzaSyCTQIlxBn5AfKGvsfJiormAE1esN3fcCkg
```
위의 키를 아래 코드 YOUR_API_KEY 부분에 삽입
```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
```

### `main.js`
#### Insert Google Map.
`initMap` 함수에 `Google Map`에서 사용할 `Option`을 입력.
```js
function initMap() {

    // 위도(Latitude), 경도(Longitude)
    var myLatLng = {
        lat: 37.782293,
        lng: -122.391240
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 18
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'GitHub'
    });
}
```
#### Toggle 버튼 
```js
(function (window, document) {
  'use strict';

  const $toggles = document.querySelectorAll('.toggle');
  const $toggleBtn = document.getElementById('toggle-btn');

  $toggleBtn.addEventListener('click', function () {
    toggleElements();
  });

  window.addEventListener('resize', function () {
    if(window.innerWidth > 1024){
      OffElements();
    }
  })

  function toggleElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle('on');
    });
  }

  function OffElements(){
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.remove('on');
    });
  }
})(window, document)
```
## Media(Grid) options
| 종류 | 디바이스 | 단위(px) |
|:---:|:---:|:---:|
| Large Devices | Desktops | 1201px 이상 |
| Medium Devices | Desktops + Tablests | 1200px 이하 |
| Small Devices | Tablets | 992px 이하 |
| Extra Small Devices | Phones | 768px 이하 |