$(document).ready(function() {
    //Hàm active tab nào đó
    function activeTab(obj) {
        //Xóa class active tất cả các tab
        $('.noidung ul li').removeClass('active');

        //Thêm class active vào tab đang click
        $(obj).addClass('active');

        //Lấy href của tab để show content tương ứng
        var id = $(obj).find('a').attr('href');

        //Ẩn hết nội dung các tab đang hiển thị
        $('.page-item').hide();

        //Hiển thị nội dung của tab hiện tại
        $(id).show();
    }

    //Sự kiện click đổi tab
    $('.navbar-nav li').click(function() {
        activeTab(this);
        return false;
    });


    //Active tab đầu tiên ngay sau khi trang web được chạy
    activeTab($('.navbar-nav li:first-child'));
});

