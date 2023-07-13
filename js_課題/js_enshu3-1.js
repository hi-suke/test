document.write("■■■問1■■■"+"<br>");

function keisan(hankei){ //円面積の計算式を作成する。
    return "半径" + hankei + "cmの円面積は" + hankei + "×" + hankei + "×" + "3.14" + "=" + hankei*hankei*3.14 + "㎠" + "<br>";
}

document.write(keisan(5)); //半径5cm
document.write(keisan(7)); //半径7cm
document.write(keisan(10)); //半径10cm