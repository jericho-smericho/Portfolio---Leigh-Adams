
<!DOCTYPE html>
<html>
    <head>
        <title>form_entry.php</title>
        <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
        <div id="formEntry">
        <form action="form_preview.php" method="post">
            <div class="grid formWhole">
            <div id="fs1" class="grid-item fs1">
            <fieldset>
                <legend>General Information</legend>
                <br>
                <ul>
                <li><label for="fname">First Name:</label>
                <input type="textarea" name="fname" value="<?php if (isset($_COOKIE["fname"])){
                                                                        print $_COOKIE["fname"];                        
                                                                        } ?>"></li>
                <br>
                <li><label for="lname">Last Name:</label>
                <input type="textarea" name="lname" value="<?php if (isset($_COOKIE["lname"])){
                                                                        print $_COOKIE["lname"];                        
                                                                        } ?>"></li>
                <br>
                <li><label for="email">Email:</label>
                <input type="textarea" name="email" value="<?php if (isset($_COOKIE["email"])){
                                                                        print $_COOKIE["email"];                        
                                                                        } ?>"></li>
                <br>
                <li><label for="pnumber">Phone Number:</label>
                <input type="tetarea" name="pnumber" value="<?php if (isset($_COOKIE["pnumber"])  ){
                                                                        print $_COOKIE["pnumber"];                        
                                                                        } ?>"></li>
                <br>
                <li><label for="saddress">Server Address:</label>
                <input type="textarea" name="saddress" value="<?php if (isset($_COOKIE["saddress"])  ){
                                                                        print $_COOKIE["saddress"];                        
                                                                        } ?>"></li>
                <ul>
                <br>
                </div>
            </fieldset>
            <fieldset>
                <div id="fs2" class="fs2">
                <legend>Drink Preferences</legend>
                <br>
                <ul>
                <li><label for="quone">Favorite drink?</label>
                <input type="textarea" name="quone" value="<?php if (isset($_COOKIE["quone"])){
                    print $_COOKIE["quone"];
                } ?>"></li>
                <br>
                <li><label for="qutwo">Favorite flavor?</label>
                <input type="textarea" name="qutwo" value="<?php if(isset($_COOKIE["qutwo"])) {
                    print $_COOKIE["qutwo"];
                } ?>"></li>
                <br>
                <li><label for="quthree">Favorite type of cup?</label>
                <input type="textarea" name="quthree" value="<?php if(isset($_COOKIE["quthree"])) {
                    print $_COOKIE["quthree"];
                } ?>"></li>
                <br>
                <li><label for="qufour">Favorite type of tea?</label>
                <input type="textarea" name="qufour" value="<?php if(isset($_COOKIE["qufour"])) {
                    print $_COOKIE["qufour"];
                } ?>"></li>
                <br>
                <li><label for="qufive">Favorite type of coffee?</label>
                <input type="textarea" name="qufive" value="<?php if(isset($_COOKIE["qufive"])) {
                    print $_COOKIE["qufive"];
                } ?>"></li>
                
                <br>
            </ul>
            </div>
            </div>
            </fieldset>
           <a href="form_preview.php"><input type="submit" name="submit" value="Preview Answers"></a>
           
        </form>
            </div>
    </body>
</html>