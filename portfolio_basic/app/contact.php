<?php
	FB::log("got here 1");
	require 'scripts/FirePHPCore/fb.php';
	require_once "Mail.php";

	$job = $_POST['job'];
	// FB::log($job);
	if ($job) 
  	{
  		if ( $job['args'] && $job['args'][0] )
  		{
/*	  		FB::log($job['args'][0][name]);
	  		FB::log($job['args'][0][email]);
	  		FB::log($job['args'][0][body]);
*/

	  		FB::log("got here 1");
			require_once('scripts/PHPMailer-master/class.phpmailer.php');

			$mail             = new PHPMailer();

			$body             = 'Name: ' . $job['args'][0][name] . '<br />' . 'EMail: ' . $job['args'][0][email] . '<br />' . 'Body:<br />' . $job['args'][0][body];

			$mail->IsSMTP(); // telling the class to use SMTP
			// $mail->Host       = "ssl://smtp.gmail.com"; // SMTP server
			$mail->SMTPDebug  = 1;                     // enables SMTP debug information (for testing)
			                                           // 1 = errors and messages
			                                           // 2 = messages only
			$mail->SMTPAuth   = true;                  // enable SMTP authentication
			$mail->SMTPSecure = "ssl";                 // sets the prefix to the servier
			$mail->Host       = "smtp.gmail.com";      // sets GMAIL as the SMTP server
			$mail->Port       = 465;                   // set the SMTP port for the GMAIL server
			$mail->Username   = "amorris.home@gmail.com";  // GMAIL username
			$mail->Password   = "septsessions";            // GMAIL password

			$mail->SetFrom($job['args'][0][email], $job['args'][0][name]);

			$mail->AddReplyTo($job['args'][0][email], $job['args'][0][name]);

			$mail->Subject    = "Andrew Morris portfolio contact form sent";

			//$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test

			$mail->MsgHTML($body);

			$address = "amorris.home@gmail.com";
			$mail->AddAddress($address, "Andrew Morris");

			//$mail->AddAttachment("images/phpmailer.gif");      // attachment
			//$mail->AddAttachment("images/phpmailer_mini.gif"); // attachment

			if(!$mail->Send()) {
			  FB::log( "Mailer Error: " . $mail->ErrorInfo);
			} else {
			  FB::log( "Message sent!");
			}

			FB::log("got here");
	  	}
	}
	else
	{
		//FB::log("not found email");
	}
?>