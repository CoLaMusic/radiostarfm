(function(){

    var content = document.querySelector(".jd-gallery");
    var i = 0;
    
    var box = '';
    var bg = $(".jd-gallery").attr("data-screen");
    console.log(bg)

    function initBgs(){

        $(".jd-title").html('CHAT')
        
        $(".box-home").css({
            "background-image":"url('"+bg+"')",
            "background-size":"cover"
        })
    }

    initBgs();

    $("#acasa").on('click', function(){

        $(".jd-container").html("");

        $(".jd-title").html("CHAT");

        content.innerHTML = '<div class="box-home" style="background-image:url('+bg+')"><iframe src="https://xat.com/embed/chat.php#id=220513358&amp;gn=StarFmRomania2022" width="840" height="505" frameborder="0" scrolling="no"></iframe><br/><iframe loading="lazy" src="https://program.radiostarfmromania.com/dedicatii" width="840" height="505" frameborder="0" scrolling="no"></iframe></div>';

        $(".jd-container").html(content);

    })
    
    $("#programdj").on('click', function(){

        $(".jd-container").html("");
        content.innerHTML = "";
        $(".jd-title").html('PROGRAM DJ');

        var listModelsSimple = modelos.filter(modelo => modelo.type === 'programdj');
        var y = 0;

        while(y < listModelsSimple.length){

            pcb_img = listModelsSimple[y].img;

            box = `<div class="jd-box-cola">\
                        <iframe src="${pcb_img}" width="100%" height="1050">\
                    </div>`;
                  
            content.innerHTML += box;

            $(".jd-container").html(content);

            y++;
        }
    })
     $("#programetv").on('click', function(){

        $(".jd-container").html("");
        content.innerHTML = "";
        $(".jd-title").html('PROGRAME TV');

        var listModelsSimple = modelos.filter(modelo => modelo.type === 'programetv');
        var y = 0;

        while(y < listModelsSimple.length){

            pcb_img = listModelsSimple[y].img;

            box = `<div class="jd-box-cola">\
                        <iframe src="${pcb_img}" width="100%" height="1050">\
                    </div>`;
                  
            content.innerHTML += box;

            $(".jd-container").html(content);

            y++;
        }
    })
     $("#dedicatii").on('click', function(){

        $(".jd-container").html("");
        content.innerHTML = "";
        $(".jd-title").html('DEDICATII LIVE');

        var listModelsSimple = modelos.filter(modelo => modelo.type === 'dedicatii');
        var y = 0;

        while(y < listModelsSimple.length){

            pcb_img = listModelsSimple[y].img;

            box = `<div class="jd-box-cola">\
                        <iframe src="${pcb_img}" width="100%" height="1050">\
                    </div>`;
                  
            content.innerHTML += box;

            $(".jd-container").html(content);

            y++;
        }
    })
     $("#horoscop").on('click', function(){

        $(".jd-container").html("");
        content.innerHTML = "";
        $(".jd-title").html('HOROSCOP');

        var listModelsSimple = modelos.filter(modelo => modelo.type === 'horoscop');
        var y = 0;

        while(y < listModelsSimple.length){

            pcb_img = listModelsSimple[y].img;

            box = `<div class="jd-box-cola">\
                        <iframe src="${pcb_img}" width="100%" height="1050">\
                    </div>`;
                  
            content.innerHTML += box;

            $(".jd-container").html(content);

            y++;
        }
    })

    $("#echipa").on('click', function(){

        $(".jd-container").html("");
        content.innerHTML = "";
        $(".jd-title").html('ECHIPA');

        var listModelsCouple = modelos.filter(modelo => modelo.type == 'background');
        var j = 0;

        while(j < listModelsCouple.length){

            pc_img = listModelsCouple[j].img;

            box = `<div class="jd-box-img">\
                        <img src="${pc_img}">\
                        <a href="${pc_img}" target="_blank"><i class="bx bx-zoom-in"></i></a>\
                    </div>`;

            content.innerHTML += box;

            $(".jd-container").html(content);

            j++;
        }
    })
    
    /*############## ACTION ##########*/

    $(".jd-btn-menu").on('click', function(){

        $(".jd-bar").toggleClass("active")

        $(".jd-aside").toggleClass("hide")

        $(".jd-content").toggleClass("active")
    })
})();
