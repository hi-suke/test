for(var gyoD=1; gyoD<=5; gyoD++){ //内部のfor文を3回繰り返し、5行まで出力する。
    for(var starD=1; starD<=5; starD++){ //変数値を1でスタート、最大5まで処理する。
        if(starD%2==0){
            document.write("☆"); //もしも変数starDの値を2で割った余りが0の時、☆を出力する。
        }else {
            document.write("★"); //0でない時は★を出力する。
        }
        
    }
    document.write("<br>"); //内部のfor文終了後、改行する。
}