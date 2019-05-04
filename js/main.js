$(document).ready(function () {


    $(".my-2").on("click", ".tab", function () {
   //    Удаляем классы active
        $(".inner-content").find(".active_form").removeClass("active_form");
         
   //    Добавляем класс active
        $(this).addClass("active_form");
        $(".tab-form").eq($(this).index()).addClass("active_form");
    });


});