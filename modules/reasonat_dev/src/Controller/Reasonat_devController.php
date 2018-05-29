<?php
namespace Drupal\reasonat_dev\Controller;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerAwareTrait;
use Symfony\Component\HttpFoundation\Response;

class Reasonat_devController implements ContainerAwareInterface {

  use ContainerAwareTrait;

  public function close() {
	$pass=\Drupal::config('reasonat_dev.settings')->get('autorization');
	if (isset($_POST['pass']) and $_POST['pass'] == $pass['pass']) {
    $expire = 60*60*24;
    setcookie('reasonat_norobot', 'passed', time() + $expire, '/');
    header('Location:http://' . $_SERVER['HTTP_HOST'] . $_POST['destination'], TRUE, 302);
    exit();
	}
	  $response='<!DOCTYPE html>
<html>
<meta charset="utf-8" />
<body>
<form action="/" method="post">
  Development website require authentication:
  <input type="text" size="15" name="pass"></input>
  <div> the authentication will hold for 24 hour </div>
  <input type="hidden" value="'. $_SERVER['REQUEST_URI'].'" name="destination"></input>
    </div>
  <input type="submit" value="submit"> </input>
  <div>
  <label> Destination : </label>
  <input type="text" disabled value="'. $_SERVER['REQUEST_URI'].'"></input>
    </div>
</form>
</body>
</html>';
    return new Response($response);
  }

}