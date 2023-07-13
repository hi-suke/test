for(var gyoA=1; gyoA<=3; gyoA++){ //内部のfor文を3回繰り返し、3行まで出力する。
    for(var starA=1; starA<=3; starA++){ //変数値を1でスタート、最大3まで処理する。
        if(starA%2==0){ 
            document.write("☆"); //もしも変数starAの値を2で割った余りが0の時、☆を出力する。
        }else if(starA%2==1){
            document.write("★"); //もしも変数starAの値を2で割った余りが1の時、★を出力する。
        }
        
    }
    document.write("<br>"); //内部のfor文終了後、改行する。
}