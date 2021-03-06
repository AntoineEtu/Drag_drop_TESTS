var username = "admin";
var password = "UHS";

$(document).ready(function () {
    //permet de se connecter en cliquant sur le bouton
    $('.connect_inner_button').click(function(){
        removeErrorMessage();
        verifyInputs();
    });
    //permet de se connecter avec le bouton entrée
    $('.connect_input_text').keydown(function (e) {
        if (e.keyCode == 13) {
            verifyInputs();
        }
    });
    mediaMoveRightListener();
    mediaMoveLeftListener();

});

//vérifie les identifiants
function verifyInputs(){
    console.log('verify');
    if(username == $('#username').val() && password == $('#password').val()){
        desappear();
    }else{
        $('.connect_error').addClass('connect_error_active');
    }
}

function connectToUHS(){
    window.location = 'home.html';
}

function removeErrorMessage(){
    $('.connect_error').removeClass('connect_error_active');
}

function desappear() {
    //fonction permettant de cacher la div quand on clique sur connnexion
    $('.connect_container').animate({
        opacity: 0
      },500,affiche_gif);
}

function affiche_gif(){
    //permet de détruire le bloc d'authentification
    $('.connect_container').hide();
    $('.loading_gif').css({
        display: 'block'
    });
    //function affichant le GIF après avoir cliqué sur connexion
    $('.loading_gif').animate({
        opacity: 1
    },300,function(){
        setTimeout(connectToUHS,700);
    });
}

function mediaMoveRightListener(){
    $('.arrow_button_right').click(function(){
        if(!$('.film_list_container').is(':animated')){
            var widthVideo = $('.film_added_element').width()*1.02;//on multiplie par 1.02 pour inclure le margin dans la largeur
            var posCurseur = $('.film_list_container').scrollLeft();
            var ratio = posCurseur/widthVideo;
            if( ratio == 0){
                $('.film_list_container').animate({'scrollLeft': widthVideo*1.02});
            }else{
                ratio = ratio+1;
                $('.film_list_container').animate({'scrollLeft': ratio*widthVideo});
            }
        }
    });
}
function mediaMoveLeftListener(){
    $('.arrow_button_left').click(function(){
        if(!$('.film_list_container').is(':animated')){
            var widthVideo = $('.film_added_element').width()*1.02;//on multiplie par 1.02 pour inclure le margin dans la largeur
            var posCurseur = $('.film_list_container').scrollLeft();
            var ratio = posCurseur/widthVideo;
            if( ratio == 0){
                //$('.film_list_container').scrollLeft(widthVideo*1.02);
            }else{
                $('.film_list_container').animate({'scrollLeft': posCurseur-widthVideo});
            }
        }
    });
}