(function ($) {
    window.onload = Function('nwxforms(this)');
    $(document).ready(function () {
        $('#email,#telefono,#cp').popover();
        var $telefono = $('#telefono');
        var $movil = $('#movil');
        var $pais = $('#pais');
        var $acepto = $('#acepto');
        var valorPais = "";

        $pais.change(function () {
            valorPais = $pais.val();
            $('#bandera').removeClass().addClass('icon-flag-' + valorPais);
            $telefono.val($pais.val() != "ES" ? '' : '+34');
        });

        $movil.focus(function () {
            var mensaje =
                                $pais.val() == 'ES' ?
                                    'El teléfono móvil es correcto si cumple con los siguiente formato +34 6 ó +34 7 (+34 Prefijo País, 6 ó 7 indica prefijo móvil)' :
                                    'El teléfono móvil es correcto si cumple con el siguiente formato +CODPAIS (Prefijo País)';
            MensajeFono($movil, mensaje);
            ValidarMovil($movil, $pais);
        });

        $telefono.focus(function () {
            var mensaje =
                                $pais.val() == 'ES' ?
                                    'El teléfono fijo es correcto si cumple con los siguiente formato +34 8 ó +34 9 (+34 Prefijo País, 8 ó 9 indica número fijo)' :
                                    'El teléfono fijo es correcto si cumple con el siguiente formato +CODPAIS (Prefijo País)';
            MensajeFono($telefono, mensaje);
            ValidarFono($telefono, $pais);
        });

        $("#form1").bind('submit', function () {
            var esvalido = $acepto.is(':checked');
            if (!esvalido) {
                $acepto.focus();
            }
            return esvalido;
        });

    });
})(jQuery);

function ValidarMovil(fono, pais) {
    if (pais.val() == "ES") {
        fono.attr('pattern', '^[+]34[ ][67][0-9]{2}[ ][0-9]{2}[ ][0-9]{2}[ ][0-9]{2}$');
    }
    else {
        var patron = BFHPhoneFormatList[$('#pais').val()];
        var expres = '^' + patron.replace(/[d]/gi, '[0-9]').replace(/[ ]/gi, "[ ]").replace("+", "[+]") + '$';
        fono.attr('pattern', expres);
    }
}

function ValidarFono(fono, pais) {
    if (pais.val() == "ES") {
        fono.attr('pattern', '^[+]34[ ][89][0-9]{2}[ ][0-9]{2}[ ][0-9]{2}[ ][0-9]{2}$');
    }
    else {
        var patron = BFHPhoneFormatList[$('#pais').val()];
        var expres = '^' + patron.replace(/[d]/gi, '[0-9]').replace(/[ ]/gi, "[ ]").replace("+", "[+]") + '$';
        fono.attr('pattern', expres);
        fono[0].checkValidity();
    }
}

function MensajeFono(fono, mensaje) {
    fono.popover('destroy');
    var patron = BFHPhoneFormatList[$('#pais').val()];
    fono.popover({ 'content': mensaje.toString().replace("+CODPAIS", patron.toString().substr(0, 3)) });
    fono.popover('show');
}
