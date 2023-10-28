 <!-- Twas but a cookie test-->
        <?php 
        
        if (isset($_POST["fname"])){
        setcookie("fname", $_POST["fname"], time() +   30);
        //print $_POST["fname"];
        }
        if (isset($_POST["lname"])){setcookie("lname", $_POST["lname"], time() +   30, "/");
        //print $_POST["lname"];
        }
        if (isset($_POST["email"])){setcookie("email", $_POST["email"], time() +   30, "/");
        //print $_POST["email"];
        }
        if (isset($_POST["pnumber"])){setcookie("pnumber", $_POST["pnumber"], time() +   30, "/");
        //print $_POST["pnumber"];
        }
        if (isset($_POST["saddress"])){setcookie("saddress", $_POST["saddress"], time() +   30, "/");
        //print $_POST["saddress"];
        }
        if (isset($_POST["quone"])){setcookie("quone", $_POST["quone"], time() +   30, "/");
        //print $_POST["quone"];
        }
        if (isset($_POST["qutwo"])){setcookie("qutwo", $_POST["qutwo"], time() +   30, "/");
        //print $_POST["qutwo"];
        }
        if (isset($_POST["quthree"])){setcookie("quthree", $_POST["quthree"], time() +   30, "/");
        //print $_POST["quthree"];
        }
        if (isset($_POST["qufour"])){setcookie("qufour", $_POST["qufour"], time() +   30, "/");
        //print $_POST["qufour"];
        }
        if (isset($_POST["qufive"])){setcookie("qufive", $_POST["qufive"], time() +   30, "/");
        //print $_POST["qufive"];
        } ?>
<!DOCTYPE HTML>
<html>
    <head>
    <title>form_preview.php</title>
    <link rel="stylesheet" href="css/styles.css">
    </head>

   
    <body>
    <div id="pv" class="pv">
        <h1>Your Information</h1>
            <p>First Name - <?php print $_POST["fname"]; ?></p> 
            
             
            <p> Last Name - <?php print $_POST["lname"]; ?></p>
            
             
            <p>Email - <?php print $_POST["email"];?></p>
            
             
            <p>Phone Number - <?php print $_POST["pnumber"]; ?></p>
            
             
            <p>Server Address - <?php print $_POST["saddress"]; ?></p>
            
             
            <p>Favorite Flavor - <?php print $_POST["quone"]; ?></p>
            
             
            <p>Temperature Preference - <?php print $_POST["qutwo"]; ?></p>
            
             
            <p>Type of Drink - <?php print $_POST["quthree"]; ?></p>
            
             
            <p>How Sweet - <?php print $_POST["qufour"]; ?></p>
            
             
            <p>Type of Glassware - <?php print $_POST["qufive"]; ?></p>
            
    </div>
    <!--don't forget to delete this part-->
    <pre>    
    </pre>
    <div>
        <a href="form_entry.php">Edit</a>
        <a href="form_confirmed.php">Finish</a> 
    </div>
    </body>
</html> 