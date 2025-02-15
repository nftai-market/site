/* main js */
$(document).ready(function(){
  "use strict";

  /* Aos animation on scroll */
  AOS.init({
    once: true,
  });

  /* Scroll to fixed navigation bar */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".infy-header").addClass("header-fixed");
    } else {
      $(".infy-header").removeClass("header-fixed");
    }
  });

  /* Loader */
  $(window).on("load", function () {
    $(".infy-loader").fadeOut("slow");
  });

  /* Mobaile menu slider */
  $(".navbar-toggler").on("click", function () {
    $(".infy-sidebar-overlay").fadeIn();
    $(".infy-mobile-menu").addClass("infy-menu-open");
  });

  $(".infy-sidebar-overlay, .infy-close").on("click", function () {
    $(".infy-sidebar-overlay").fadeOut();
    $(".infy-mobile-menu").removeClass("infy-menu-open");
  });

  function ResponsiveMobilemsMenu() {
    var $msNav = $(".infy-menu-content"),
      $msNavSubMenu = $msNav.find(".sub-menu");
    $msNavSubMenu.parent().prepend('<span class="menu-toggle"></span>');
    $msNav.on("click", "li a, .menu-toggle", function (e) {
      var $this = $(this);
      if ($this.attr("href") === "#" || $this.hasClass("menu-toggle")) {
        e.preventDefault();
        if ($this.siblings("ul:visible").length) {
          $this.parent("li").removeClass("active");
          $this.siblings("ul").slideUp();
          $this.parent("li").find("li").removeClass("active");
          $this.parent("li").find("ul:visible").slideUp();
        } else {
          $this.parent("li").addClass("active");
          $this
            .closest("li")
            .siblings("li")
            .removeClass("active")
            .find("li")
            .removeClass("active");
          $this.closest("li").siblings("li").find("ul:visible").slideUp();
          $this.siblings("ul").slideDown();
        }
      }
    });
  }

  ResponsiveMobilemsMenu();

  /* Wishlist active */
  $(".bids-img a").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      var getCount = $(this).children("p").html();
      var num = parseInt(getCount);
      $(this)
        .children("p")
        .html(num - 1);
    } else {
      $(this).addClass("active");
      var getCount = $(this).children("p").html();
      var num = parseInt(getCount);
      $(this)
        .children("p")
        .html(num + 1);
    }
  });

  /* Bids Slider */
  $(".bids-slider").owlCarousel({
    loop: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    margin: 24,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
        scroll: 1,
      },
      480: {
        items: 2,
        scroll: 2,
      },
      992: {
        items: 3,
        scroll: 2,
      },
      1200: {
        items: 4,
        scroll: 2,
      },
      1400: {
        items: 4,
        scroll: 4,
      },
    },
  });

  /* Live Biding Slider */
  $(".live-biding-slider").owlCarousel({
    loop: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 500,
    autoplayTimeout: 2500,
    margin: 24,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
        scroll: 1,
      },
      480: {
        items: 2,
        scroll: 2,
      },
      992: {
        items: 3,
        scroll: 3,
      },
      1200: {
        items: 2,
        scroll: 2,
      },
      1400: {
        items: 2,
        scroll: 2,
      },
    },
  });

  /* Collection slider */
  $(".collection-slider").owlCarousel({
    loop: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    margin: 24,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
        scroll: 1,
      },
      480: {
        items: 2,
        scroll: 2,
      },
      992: {
        items: 3,
        scroll: 2,
      },
    },
  });

  /* In week seller slider */
  $(".infy-week-seller-slider").owlCarousel({
    loop: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    margin: 24,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
        scroll: 1,
      },
      480: {
        items: 2,
        scroll: 2,
      },
      992: {
        items: 3,
        scroll: 2,
      },
      1200: {
        items: 4,
        scroll: 4,
      },
      1400: {
        items: 5,
        scroll: 5,
      },
    },
  });

  /* Home owl Explore slider */
  $(".owl-explore-slider").owlCarousel({
    loop: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 500,
    autoplayTimeout: 3000,
    margin: 24,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
        scroll: 1,
      },
      480: {
        items: 2,
        scroll: 2,
      },
      992: {
        items: 3,
        scroll: 2,
      },
      1200: {
        items: 4,
        scroll: 2,
      },
      1400: {
        items: 4,
        scroll: 4,
      },
    },
  });

  /* Testimonial Slider */
  $(".testimonial-slider").owlCarousel({
    loop: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 3000,
    margin: 24,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
        scroll: 1,
      },
      992: {
        items: 2,
        scroll: 2,
      },
    },
  });

  /* Tabs-Tailwindcss */
  $("#myTab li:first-child").addClass("active");
  $(".tab-pane").hide();
  $(".tab-pane:first").show();
  $("#myTab li").click(function () {
    $("#myTab li").removeClass("active");
    $(this).addClass("active");
    $(".tab-pane").hide();
    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });

  /*========== Faq Tailwindcss ===========*/
  $(".accordion_head").click(function () {
    if ($(".accordion_body").is(":visible")) {
      $(".accordion_body").slideUp(300);
      $("div").removeClass("active-arrow");
    }
    if ($(this).next(".accordion_body").is(":visible")) {
      $(this).next(".accordion_body").slideUp(300);
      $("div").removeClass("active-arrow");
    } else {
      $(this).next(".accordion_body").slideDown(300);
      $(this).addClass("active-arrow");
    }
  });

  /* Dropdown-Tailwindcss */
  $('.inner-activity > a').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('selected');
    $(this).parent().find('ul').first().toggle();
    $(this).parent().siblings().find('ul').hide();
    $(this).parent().find('ul').parent().mouseleave(function () {
      var thisUI = $(this);
      $('html').click(function () {
        thisUI.children(".activity-dropdown").hide();
        thisUI.children("a").removeClass('selected');
        $('html').unbind('click');
      });
    });
  });

  /* Custom select */
  $('select').each(function () {
    var $this = $(this), selectOptions = $(this).children('option').length;
    $this.addClass('hide-select');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="custom-select"></div>');
    var $customSelect = $this.next('div.custom-select');
    $customSelect.text($this.children('option').eq(0).text());
    var $optionlist = $('<ul />', {
      'class': 'select-options'
    }).insertAfter($customSelect);
    for (var i = 0; i < selectOptions; i++) {
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
      }).appendTo($optionlist);
    }
    var $optionlistItems = $optionlist.children('li');
    $customSelect.click(function (e) {
      e.stopPropagation();
      $('div.custom-select.active').not(this).each(function () {
        $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').slideToggle();
    });
    $optionlistItems.click(function (e) {
      e.stopPropagation();
      $customSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $optionlist.hide();
    });
    $(document).click(function () {
      $customSelect.removeClass('active');
      $optionlist.hide();
    });
  });

  /* Counter */
  $(".counters").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 3000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
  function slideGo(dir) {
    let slider = $(".news__slider");
    if (dir === "+") {
      slider.slick("slickNext");
    } else if (dir === "-") {
      slider.slick("slickPrev");
    }
  }

 

  /* Tap to top */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });

  $('.back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
  });

  /* Modal */
  $(".modal-toggle").on("click", function () {
    $(".infy-modal-overlay").fadeIn();
    $(".infy-modal").fadeIn();
    $(".infy-modal-dialog").addClass("infy-fadeOutUp");
    $(".infy-modal-dialog").removeClass("infy-fadeInDown");
  });

  $(".infy-close-modal, .infy-modal-overlay").on("click", function () {
    $(".infy-modal-overlay").fadeOut();
    $(".infy-modal").fadeOut();
    $(".infy-modal-dialog").removeClass("infy-fadeOutUp");
    $(".infy-modal-dialog").addClass("infy-fadeInDown");
  });

  /* Upload image preview */
  $("body").on("change", ".infy-image-upload", function (e) {
    var lkthislk = $(this);
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var ec_image_preview = lkthislk
          .parent()
          .parent()
          .children(".infy-preview")
          .find(".infy-image-preview")
          .attr("style", "background-image: url(" + e.target.result + ");");
        ec_image_preview.hide();
        ec_image_preview.fadeIn(650);
      };
      reader.readAsDataURL(this.files[0]);
    }
  });

  /* Single product Slider */
  $(".single-product-cover").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: ".single-nav-thumb",
  });

  $(".single-nav-thumb").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".single-product-cover",
    dots: false,
    arrows: true,
    focusOnSelect: true,
  });

  /* Parallaxmouse JS  */
  $(window).on("mousemove", function (e) {
    var w = $(window).width();
    var h = $(window).height();
    var offsetX = 0.5 - e.pageX / w;
    var offsetY = 0.5 - e.pageY / h;
    $(".parallax").each(function (i, el) {
      var offset = parseInt($(el).data("offset"));
      var translate =
        "translate3d(" +
        Math.round(offsetX * offset) +
        "px," +
        Math.round(offsetY * offset) +
        "px, 0px)";

      $(el).css({
        "-webkit-transform": translate,
        transform: translate,
        "moz-transform": translate,
      });
    });
  });

  /* Create file method */
  $(".infy-width-full").on("click", function () {
    $(".infy-width-full").removeClass("active");
    $(this).addClass("active");
  });

});
