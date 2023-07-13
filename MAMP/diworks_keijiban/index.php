<!DOCTYPE html>
<html lang="ja">

    <head>
        <meta charset="utf-8">
        <title>diworksblog 掲示板</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>

    <body>
        
        <?php
        
        mb_internal_encoding("utf8");
        $pdo = new PDO("mysql:dbname=lesson1;host=localhost;","root","root");
        $stmt = $pdo->query("select * from diworks_keijiban");
        
        ?>
        
        <img src="diblog_logo.jpg">
        <header>
            <ul>
                <li>トップ</li>
                <li>プロフィール</li>
                <li>D.I.Blogについて</li>
                <li>登録フォーム</li>
                <li>問い合わせ</li>
                <li>その他</li>
            </ul>
        </header>

        <main>
            <div class="main_container">
                <div class="left">
                    <h1>プログラミングに役立つ掲示板</h1>
        
                    
                    <form method="post" action="insert.php">
                        
                        <div class="nyuryoku"><h3>入力フォーム</h3></div>
                        
            
                        <div>
                            <label>ハンドルネーム</label><br>
                            <input type="text" class="text" size="35" name="handlename">
                        </div>
            
                        <div>
                            <label>タイトル</label><br>
                            <input type="text" class="text" size="35" name="title">
                        </div>
            
                        <div>
                            <label>コメント</label>
                            <br>
                            <textarea cols="60" rows="7" class="comments" name="comments"></textarea>
                        </div>
            
                        <div>
                            <input type="submit" class="submit" value="送信する">
                        </div>
            
                    </form>
                    
                    <?php
                    
                    while($row = $stmt->fetch()){
                        echo "<div class='kiji'>";
                        echo "<h3>".$row['title']."</h3>";
                        echo "<div class='comments1'>";
                        echo $row['comments'];
                            
                        echo "<div class='handlename'>posted by ".$row['handlename']."</div>";
                            
                        echo "</div>";
                        
                        echo "</div>";
                    }
                    ?>
                    
                    
                    
                </div>
    
                <div class="right">
                    <h3>人気の記事</h3>
                    <ul>
                        <li>PHPオススメ本</li>
                        <li>PHP MyAdminの使い方</li>
                        <li>いま人気のエディターTops</li>
                        <li>HTMLの基礎</li>
                    </ul>
                    <h3>オススメリンク</h3>
                    <ul>
                        <li>ディーアイワークス株式会社</li>
                        <li>XAMPPのダウンロード</li>
                        <li>Eclipseのダウンロード</li>
                        <li>Braketsのダウンロード</li>
                    </ul>
                    <h3>カテゴリ</h3>
                    <ul>
                        <li>HTML</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                
            </div>


        </main>

    </body>

<footer>
    Copyright D.I.Works| D.I.Blog is the one which provides A to Z about programming
</footer>

</html>










