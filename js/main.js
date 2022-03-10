document.addEventListener('DOMContentLoaded', function() {

    window.onscroll = function() {
        if (window.pageYOffset > (document.querySelector('header').offsetHeight-100)) {
            document.querySelector('.navbar').classList.add('active');
        } else {
            document.querySelector('.navbar').classList.remove('active');
        }
    };

    let bannerNumber = 2;
    setInterval(function() {
        document.querySelectorAll(`.banner`).forEach(function(element) {
            element.classList.remove('active');
        })
        document.querySelector(`.banner:nth-child(${bannerNumber})`).classList.add('active');
        if (bannerNumber > 2) {
            bannerNumber = 1;
        } else {
            bannerNumber++;
        }
    }, 4000)

    // Khi click gửi form 
    if (document.getElementById('form-contact')) {
        document.getElementById('form-contact').onsubmit = function(e) {
            // check Nội dung có < 20 ký tự không
            if (document.getElementById('contact-message').value.length < 20) {
                // thông báo
                alert('Vui lòng nhập ít nhất 20 ký tự');
                // ngăn sự kiện gửi form
                e.preventDefault();
            }
            // biểu thức chính quy regular expression
            var reg = new RegExp('[0-9]+'); // Nếu trong chuỗi có số thì trả về true
            if (reg.test(document.getElementById('contact-name').value)) {
                // thông báo
                alert('Họ và tên không hợp lệ');
                // ngăn sự kiện gửi form
                e.preventDefault();
            }
        }
    }

    let formLogin = document.getElementById('form-login');
    // click nút mở form
    document.getElementById('btn-login').onclick = function() {
        formLogin.classList.add('show');
    }

    // click dấu X tắt form
    formLogin.querySelector('button.close').onclick = function() {
        formLogin.classList.remove('show');
    }
    // click vùng ngoài tắt form
    formLogin.onclick = function() {
        this.classList.remove('show');
    }
    // click form không tắt form
    formLogin.querySelector('.modal-content').onclick = function(e) {
        e.stopPropagation();
    }
})

$("a[href*='#']:not([href='#])").click(function() {
    let target = $(this).attr("href");
    $('html,body').stop().animate({
      scrollTop: $(target).offset().top
    }, 1000);
    event.preventDefault();
  });
  event.preventDefault();