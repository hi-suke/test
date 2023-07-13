document.write("<br>");
document.write("■■■問2■■■"+"<br>");

function yuenchiryokin(adult,kids,adultryokin=500,kidsryokin=200){ //各グループの料金計算式を作成する。
    return "大人" + adult + "人、" + "子供" + kids + "人の合計金額は" + (adult*adultryokin+kids*kidsryokin) + "円です。";
}
document.write("【Aグループの場合】"+"<br>");
document.write(yuenchiryokin(2,4)+"<br>"); //Aグループ
document.write("【Bグループの場合】"+"<br>");
document.write(yuenchiryokin(1,5)+"<br>"); //Bグループ
document.write("【Cグループの場合】"+"<br>");
document.write(yuenchiryokin(3,7)+"<br>"); //Cグループ