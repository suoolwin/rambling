//Get UI
 

// Start Back to Top 

    $(".btn-backtotops").hide();
    $(window).scroll(function(){

        let getscrolltop = $(this).scrollTop();
            // console.log(getscrolltop);

            if(getscrolltop >= 360){
                $(".btn-backtotops").fadeIn(1000);
            }else{
                $(".btn-backtotops").fadeOut(1000);
            }
    });


// End Back to Top 

// Start Footer Section 

    const getyear = document.getElementById("getyear");
    const getfullyear = new Date().getFullYear();
    getyear.textContent = getfullyear;


// End Footer Section 