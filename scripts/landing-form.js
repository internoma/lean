(function ($) {
    window.onload = Function('nwxforms(this)');
    $(document).ready(function () {
        //  $('#email,#telefono,#cp').popover();
        $('#email,#telefono').popover();
        var $telefono = $('#telefono');
        var $sltPais = $('#sltPais');
        var $acepto = $('#acepto');
        var valorPais = "";
//        var $cp = $('#cp');
        var $solicitudInfo = $('.solicitudInfo');
        var $nombre = $('#nombre');
        var offsetNombre = $nombre.offset().top - 155;

        $solicitudInfo.click(function () {
            $nombre.focus();
            $('body,html').animate({
                scrollTop: offsetNombre
            }, 500);
            return false;
        });

        $sltPais.change(function () {
            valorPais = $sltPais.val();
            $('#bandera').removeClass().addClass('icon-flag-' + valorPais);
            $telefono.val($sltPais.val() != "ES" ? '' : '+34');
            ValidarFono($telefono, $sltPais);
//            LargoCodigoPostal($cp, $sltPais);
        });

//        $cp.focus(function () {
//            var mensaje =
//                $sltPais.val() == 'ES' ?
//                    'El código postal de España consta de 5 dígitos.' :
//                    'El código postal consta de un mínimo de 5 y un máximo de 7 dígitos.';
//            MensajeCodPostal($cp, mensaje);
//            ValidarCodPostal($cp, $sltPais);
//            LargoCodigoPostal($cp, $sltPais);
//        });

        $telefono.focus(function () {
            var mensaje =
            $sltPais.val() == 'ES' ?
                'El teléfono es correcto si cumple con el siguiente formato +34 6 ó +34 7 ó +34 8 ó +34 9 (+34 Prefijo País, 6 ó 7 indica número móvil, 8 ó 9 indica número fijo)' :
                'El teléfono es correcto si cumple con el siguiente formato +CODPAIS (Prefijo País)';
            MensajeFono($telefono, mensaje);
            ValidarFono($telefono, $sltPais);
        });

        $("#form1").bind('submit', function () {
            var esvalido = $acepto.is(':checked');
            if (!esvalido) {
                $acepto.focus();
            }
            if (esvalido) {
                $('#pais').val($('#sltPais').children(':selected').text());
            }
            return esvalido;
        });

    });
})(jQuery);

function ValidarFono(fono, sltPais) {
    if (sltPais.val() == "ES") {
        fono.attr('pattern', '^[+]34[ ][6789][0-9]{2}[ ][0-9]{2}[ ][0-9]{2}[ ][0-9]{2}$');
    }
    else {
        var patron = BFHPhoneFormatList[$('#sltPais').val()];
        var expres = '^' + patron.replace(/[d]/gi, '[0-9]').replace(/[ ]/gi, "[ ]").replace("+", "[+]") + '$';
        fono.attr('pattern', expres);
    }
}

//function ValidarCodPostal(codPostal, sltPais) {
//    if (sltPais.val() == "ES") {
//        codPostal.attr('pattern', '^(5[0-2]|[0-4][0-9])[0-9]{3}$');
//    }
//    else {
//        codPostal.attr('pattern', '^[0-9]{5,7}$');
//    }
//}

function MensajeFono(fono, mensaje) {
    fono.popover('destroy');
    var patron = BFHPhoneFormatList[$('#sltPais').val()];
    fono.popover({ 'content': mensaje.toString().replace("+CODPAIS", patron.toString().substr(0, 3)) });
    fono.popover('show');
}

//function MensajeCodPostal(codPostal, mensaje) {
//    codPostal.popover('destroy');
//    codPostal.popover({ 'content': mensaje });
//    codPostal.popover('show');
//}

//function LargoCodigoPostal(codPostal, sltPais) {
//    if (sltPais.val() == "ES") {
//        codPostal.attr('maxlength', '5');
//    }
//    else {
//        codPostal.attr('maxlength', '7');
//    }
//}
