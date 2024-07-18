<?php

/**
 * Theme functions file, which is auto-loaded by WordPress. Use this file to
 * load additional PHP files and bootstrap the theme.
 *
 * @author      Your Name <youremail@domain.tld>
 * @copyright   Copyright (c) 2023, Your Name
 * @link        https://yourwebsite.tld
 * @license     http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * @package     wp-dev-box
 * @since       1.0.0
 */

// Setup.
define('THEME_STYLE_URL', get_stylesheet_uri());
define('THEME_DIR', __DIR__);

require_once THEME_DIR . '/includes/register-block-style.php';
require_once THEME_DIR . '/includes/filter-block-metadata.php';
require_once THEME_DIR . '/includes/register-plugins.php';
require_once THEME_DIR . '/includes/prevent-plugin-deactivation.php';
require_once THEME_DIR . '/includes/tgmpa/class-tgm-plugin-activation.php';
require_once THEME_DIR . '/includes/enqueue-assets.php';

// setup
add_action('tgmpa_register', 'bse__register_plugins');
// add_filter('plugin_action_links', 'prevent_plugin_deactivation', 10, 4);
add_action('enqueue_block_editor_assets', 'bse__enqueue_block_variations_script');

// hand-drawn-red - Register Block Style via PHP.
add_action("init", 'bse__register_block_styles');

// hand-drawn-purple - Filter core/quote block metadata to add a new style variation.
add_filter('block_type_metadata', 'filter_block_metadata');
