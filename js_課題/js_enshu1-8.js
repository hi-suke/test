for(var starB=0; starB<5; starB++){ //内部のfor文を5回繰り返し、5行まで出力する。
    for(var starBB=0; starBB<=starB; starBB++){ //変数starBの変数値に沿って、★を出力する数を決める。
        document.write("★");   
    }
    document.write("<br>"); //内部のfor文終了後、改行する。
}
    

/*for(starB=1; starB<=5; starB++){
    if(starB==1){
        document.write("★");
        //document.write("<br>");
    }else if(starB==2){
        document.write("★★");
        //document.write("<br>");
    }else if(starB==3){
        document.write("★★★");
        //document.write("<br>");
    }else if(starB==4){
        document.write("★★★★");
        //document.write("<br>");
    }else if(starB==5){
        document.write("★★★★★");
        //document.write("<br>");
    }document.write("<br>");
}*/
    