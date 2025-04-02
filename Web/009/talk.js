$(function() {
    $('#yes').click(function(event) {
        modal('我就知道今天是妳生日~(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();
        });
    });
    $('#no').click(function(event) {
        modal('別想按不是！', A);
    });
});

function A() {
    modal('生日快樂！', B);
}

function B() {
    modal('祝你有一个美好的一天！', function() {
        // 这里可以添加更多的逻辑
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
