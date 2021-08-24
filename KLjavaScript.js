//Função validar Email
function ValidaEmail(campo) {
    if (campo.value != '' && campo.value != null) {
        var f = campo.value
        if ((f.indexOf("@") == -1) || (f.indexOf(".") == -1) && (f != '')) {
            window.alert('Email invalido');
            campo.focus();
            campo.value = '';
        }
    }
}

//Função para preencher todos campos
function confirmar() {

    d = document.formcadastro;
    var s = new String();
    var erro = false;

    s = '==== Para prosseguir, preencha os seguintes campos====\n\n';

    if (d.TxtNome.value == '') {
        s = s + '- Digite o Nome Completo \n';
        erro = true
    }

    if (d.TxtData.value == '') {
        s = s + '- Digite sua data de Nascimento \n';
        erro = true
    }

    if (d.TxtSexo.value == '') {
        s = s + '- Selecione o Sexo\n';
        erro = true
    }

    if (d.TxtCivil.value == '') {
        s = s + '- Selecione o Estado Civil\n';
        erro = true
    }

    if (d.TxtMae.value == '') {
        s = s + '- Digite o Nome da sua Mãe \n';
        erro = true
    }

    if (d.TxtPai.value == '') {
        s = s + '- Digite o Nome do seu Pai \n';
        erro = true
    }

    if (d.TxtCpf.value == '') {
        s = s + '- Digite o CPF \n';
        erro = true
    }

    if (d.TxtRg.value == '') {
        s = s + '- Digite o RG \n';
        erro = true
    }

    if (d.TxtTr.value == '') {
        s = s + '- Digite o seu Número de Telefone \n';
        erro = true
    }

    if (d.TxtCel.value == '') {
        s = s + '- Digite o seu Número Celular \n';
        erro = true
    }

    if (d.TxtEmail.value == '') {
        s = s + '- Digite o seu Email \n';
        erro = true
    }

    if (erro) { alert(s); } else {
        d.hdnCadastra.value = 1;
        d.submit();
    }

}

//Função somente números
function SomenteNumero() {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla > 47 && tecla < 58)) return true;
    else {
        if (tecla == 8 || tecla == 0) return true;
        else return false;
    }

}

//Função somente letras com espaço
function SomenteLetras() {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla > 64 && tecla < 91)) return true;
    else {
        if (tecla > 96 && tecla < 123 || tecla == 32) return true;
        else return false;
    }

}

//função somente caracteres de email
function SomenteEmail() {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla > 63 && tecla < 91 || tecla == 46)) return true;
    else {
        if (tecla > 96 && tecla < 123 || tecla == 95) return true;
        else {
            if (tecla > 47 && tecla < 58) return true;
            else
                return false;
        }
    }
}

//Função para formatar mascara
function formatar(mascara, documento) {
    var i = documento.value.length;
    var saida = mascara.substring(0, 1);
    var texto = mascara.substring(i)

    if (texto.substring(0, 1) != saida) {
        documento.value += texto.substring(0, 1);

    }
}

//Função para validar CPF
function ValidarCPF(input) {
    s = input.value;
    filteredValues = ".-/";
    var i;
    var returnString = "";
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (filteredValues.indexOf(c) == -1) returnString += c;
    }
    if (returnString == '11111111111' || returnString == '22222222222' ||
        returnString == '33333333333' || returnString == '44444444444' ||
        returnString == '55555555555' || returnString == '66666666666' ||
        returnString == '77777777777' || returnString == '88888888888' ||
        returnString == '99999999999' || returnString == '00000000000' || returnString == '00000000191') {
        alert('CFP Inválido!');
        input.value = "";
        return false;
    }
    if (returnString.length != 11) { sim = false } else { sim = true }
    if (sim) {
        for (i = 0;
            ((i <= (returnString.length - 1)) && sim); i++) {
            val = returnString.charAt(i)
            if ((val != "9") && (val != "0") && (val != "1") && (val != "2") && (val != "3") && (val != "4") &&
                (val != "5") && (val != "6") && (val != "7") && (val != "8")) { sim = false }
        }
        if (sim) {
            soma = 0
            for (i = 0; i <= 8; i++) {
                val = eval(returnString.charAt(i))
                soma = soma + (val * (i + 1))
            }
            resto = soma % 11
            if (resto > 9) dig = resto - 10
            else dig = resto
            if (dig != eval(returnString.charAt(9))) { sim = false } else {
                soma = 0
                for (i = 0; i <= 7; i++) {
                    val = eval(returnString.charAt(i + 1))
                    soma = soma + (val * (i + 1))
                }
                soma = soma + (dig * 9)
                resto = soma % 11
                if (resto > 9) dig = resto - 10
                else dig = resto
                if (dig != eval(returnString.charAt(10))) { sim = false } else { sim = true; }
            }
        }
    }

    if (sim != true) {
        if (input.value != '') {
            alert("CPF Invalido!");
            input.value = '';
            return false;
        } else {
            return false;
        }
    }
}

//Função máscara de dinheiro
function Limpar(valor, validos) {
    // Retira caracteres invalidos da string
    var result = "";
    var aux;
    for (var i = 0; i < valor.length; i++) {
        aux = validos.indexOf(valor.substring(i, i + 1));
        if (aux >= 0) {
            result += aux;
        }
    }
    return result;
}

//Formata número tipo moeda usando o evento onKeyDown
function formataMoeda(a, e, r, t) {
    let n = ""
      , h = j = 0
      , u = tamanho2 = 0
      , l = ajd2 = ""
      , o = window.Event ? t.which : t.keyCode;
      a.value = a.value.replace('R$ ','');
    if (n = String.fromCharCode(o),
    -1 == "0123456789".indexOf(n))
        return !1;
    for (u = a.value.replace('R$ ','').length,
    h = 0; h < u && ("0" == a.value.charAt(h) || a.value.charAt(h) == r); h++)
        ;
    for (l = ""; h < u; h++)
        -1 != "0123456789".indexOf(a.value.charAt(h)) && (l += a.value.charAt(h));
    if (l += n,
    0 == (u = l.length) && (a.value = ""),
    1 == u && (a.value = "R$ 0" + r + "0" + l),
    2 == u && (a.value = "R$ 0" + r + l),
    u > 2) {
        for (ajd2 = "",
        j = 0,
        h = u - 3; h >= 0; h--)
            3 == j && (ajd2 += e,
            j = 0),
            ajd2 += l.charAt(h),
            j++;
        for (a.value = "R$ ",
        tamanho2 = ajd2.length,
        h = tamanho2 - 1; h >= 0; h--)
            a.value += ajd2.charAt(h);
        a.value += r + l.substr(u - 2, u)
    }
    return !1
}


//Função validar data
function ValidaData(campo) {
    var erro = true;
    if (campo.value != '') {
        var strData = campo.value;

        var dia = strData.substr(0, 2);
        var mes = strData.substr(3, 2);
        var ano = strData.substr(6, 4);
        var datainteira = new String();
        datainteira = "";

        if (dia > 31) {
            alert("Dia inválido!");
            campo.value = "";
            return false;
        }
        datainteira = dia + '/';

        if (mes > 12) {
            alert("Mes inválido!");
            campo.value = "";
            return false;
        }

        datainteira = datainteira + mes + '/';
        if (ano < 1900 || ano > 2200) {
            alert("Ano inválido!");
            campo.value = "";
            return false;
        }
        datainteira = datainteira + ano;
        if (mes == 02 && ano % 4 == 0) {
            if (dia > 29) {
                alert("O mês de fevereiro em um ano bissexto so possui 29 dias!");
                campo.value = "";
                return false;
            }
        }

        if (mes == 02 && ano % 4 != 0) {
            if (dia > 28) {
                alert("O mês de fevereiro so possui 28 dias!");
                campo.value = ""
                return false;
            }
        }

        if (mes != 01 || mes != 03 || mes != 05 || mes != 07 || mes != 08 || mes != 10 || mes != 12) {
            if (dia > 31) {
                alert("O Mês informado não possui 31 dias!")
                campo.value = ""
                return false;
            }
        }
        campo.value = datainteira;
    }
}
