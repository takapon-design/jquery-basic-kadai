$(function(){
    //class属性がbtnの要素がクリックされたら
    $('.btn').on('click', function(){
     // 入力ボックスに「クリックしました！」を表示する   
       $('.text-box').val('クリックしました！');

    });
});