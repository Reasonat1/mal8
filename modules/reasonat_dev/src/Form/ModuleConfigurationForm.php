<?php

namespace Drupal\reasonat_dev\Form;

use Drupal\Core\Form\ConfigFormBase;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Core\Form\FormStateInterface;

/**
 * Defines a form that configures forms module settings.
 */
class ModuleConfigurationForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'reasonat_dev_admin_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'reasonat_dev.settings',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state, Request $request = NULL) {
    $config = $this->config('reasonat_dev.settings');
	$data=$config->get('autorization');
	$form['password'] = array(
      '#type' => 'textfield',
      '#title' => $this->t('Password'),
      '#default_value' => $data['pass'],
    );
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $values = $form_state->getValues();
    $this->config('reasonat_dev.settings')
      ->set('autorization', array('pass'=>$values['password']))
      ->save();
  }
}