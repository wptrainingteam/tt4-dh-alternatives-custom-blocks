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
define('API_BASE_URL', 'https://api.quotable.io');

require_once THEME_DIR . '/includes/register-block-style.php';
require_once THEME_DIR . '/includes/register-source-block-binding.php';
require_once THEME_DIR . '/includes/enqueue-assets.php';

// setup
add_action('enqueue_block_editor_assets', 'dh__enqueue_block_variations_script');

// hand-drawn-red - Register Block Style via PHP.
add_action("init", 'dh__register_block_styles');

// Registers a custom block bindings source.
add_action('init', 'dh__register_block_bindings_source');
