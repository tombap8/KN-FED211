window.addEventListener("load", () => {

    // 1. 텍스트 바인딩
    new Vue({
        el: '#app1',
        data: {
            message: 'Hello Vue.js!'
        }
    });

    // 2. 반복 렌더링
    new Vue({
        el: '#app2',
        data: {
            list: ['사과', '바나나', '딸기']
        }
    });

    // 3. 이벤트 사용하기
    new Vue({
        el: '#app3',
        methods: {
            handleClick: function (event) {
                alert(event.target) // [object HTMLButtonElement]
            }
        }
    });

    // 4. 입력 양식과 동기화하기
    new Vue({
        el: '#app4',
        data: {
            message: '초기 메시지'
        }
    });

    // 5. 조건 분기
    new Vue({
        el: '#app5',
        data: {
            show: true
        }
    });

    // 6. 트랜지션과 애니메이션
    var app = new Vue({
        el: '#app6',
        data: {
          show: true
        }
    });


}); ////////////// load ///////////////////////
///////////////////////////////////////////////