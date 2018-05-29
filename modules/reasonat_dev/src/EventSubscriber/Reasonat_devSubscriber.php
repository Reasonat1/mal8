<?php
namespace Drupal\reasonat_dev\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\HttpKernelInterface;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;
class Reasonat_devSubscriber implements EventSubscriberInterface {

  public function onRequestSetController(GetResponseEvent $event) {
    $request = $event->getRequest();
	$reasonat_dev= \Drupal::config('reasonat_dev.settings')->get('autorization');
    if (!empty($reasonat_dev['pass']) && !isset($_COOKIE['reasonat_norobot'])) {
      $request->attributes->set('_controller', '\Drupal\reasonat_dev\Controller\Reasonat_devController::close');
    }
  }

  static function getSubscribedEvents() {
    // The RouterListener has priority 32, and we need to run after that.
    $events[KernelEvents::REQUEST][] = array('onRequestSetController', 30);

    return $events;
  }
}