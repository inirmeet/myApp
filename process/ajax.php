<?php session_start();
include_once('../includes/config.php');

if(!empty($_REQUEST['ajax']))
{
	$ajax = $_REQUEST['ajax'];
	switch ($ajax){
		
		case 'login':
			if(!empty($_REQUEST['username']))
			{
				$username = $_REQUEST['username'];
			}
			else
			{
				$username = '';
			}

			if(!empty($_REQUEST['password']))
			{
				$password = $_REQUEST['password'];
			}
			else
			{
				$password = '';
			}

			$sql = "select * from `users` where `username` = '".$username."' and `password` = '".$password."' and status = 1";
			$result = mysqli_query($db,$sql);
			if(mysqli_num_rows($result) > 0)
			{
				$_SESSION['user_login']='true';
				$_SESSION['username'] = $username;
				echo 1;
			}
			else
			{
				echo 0;
			}
		break;
	}

}
else
{
	echo 'Invalid Access';
}
 ?>