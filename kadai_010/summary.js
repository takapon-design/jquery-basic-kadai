$(function(){
    $('#change-color').on('click', function(){
     $('#target').css('color', 'purple');
    });

    $('#change-text').on('click', function(){
    $('#target').text('プリンさんも大好き！');
    });

    $('#fade-out').on('click', function(){
        $('#target').fadeOut();
    })

    $('#fade-in').on('click', function(){
        $('#target').fadeIn();
    });
});