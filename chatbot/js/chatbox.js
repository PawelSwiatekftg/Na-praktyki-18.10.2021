$(document).ready(function(){
    $('.ikonachatu').click(function(event){
        $('.chatbox').toggleClass('active');
    });

    $('.conv-form-wrapper').convform({selectInputStyle: 'disable'});
})

function wartosc(event){
    var selectElement = event.target;
    var value = selectElement.value;
    alert(value);

}

function przypisaniewartosci(event){
    var selectElement = event.target;
    var tekst = selectElement.value;
    alert(tekst);
}

