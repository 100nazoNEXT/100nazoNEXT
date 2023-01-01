<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>お問合せ内容の入力｜メール送信フォーム</title>
</head>
<body>

<form method="post" action="confirm.php">
<p><label>お名前：<br>
<input type="text" maxlength="255" name="namae">
</label></p>

<p><label>メールアドレス：<br>
<input type="email" size="30" maxlength="255" name="mailaddress">
</label></p>

<p><label>お問合せ内容：<br>
<textarea name="naiyou" cols="40" rows="5"></textarea>
</label></p>

<p><input type="submit" value="入力内容を確認する"></p>
</form>

</body>
</html>