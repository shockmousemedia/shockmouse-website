


            /* CTA Template Link */
            $(function () {
                $("#cta").load("templates/cta.html");
            });

            /* Services CTA Template Link */
            $(function () {
                $("#service-cta").load("../templates/cta.html");
            });

            /* Navigation Hamburger Menu Link */

            $(function () {
                $("#navigation").load("../templates/navigation.html");
            });

            // Hamburger Menu
            $('.menu-btn').on('click', function (e) {
                $(".menu-btn").toggleClass("active");
                $(".bars .bar").toggleClass("rotated");
                $(".header img").toggleClass("light");
                $(".navigation").toggleClass("active");
                $(".navigation ul li").toggleClass("active");
                $("body").toggleClass("overflow-hidden");
            });
