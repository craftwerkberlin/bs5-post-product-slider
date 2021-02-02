<?php
/*Plugin Name: bS5 Post/Product Slider
Plugin URI: https://bootscore.me/plugins/bs-post-product-slider/
Description: Post / Product slider for bootScore 5 theme https://bootscore.me. Use Shortcode [bs-post-slider type="post" category="sample-category" order="ASC" orderby="title" posts="12"] to display posts or [bs-product-slider order="DESC" orderby="date" posts="12" category="theme, child-themes, free, plugins"] to show WooCommerce products. Check readme.txt in PlugIn folder for options.
Version: 5.0.0
Author: Bastian Kreiter
Author URI: https://crftwrk.de
License: GPLv2
*/


// Register Styles and Scripts
function swiper_scripts() {
    
    wp_enqueue_script( 'swiper-js', plugins_url( '/js/swiper.min.js', __FILE__ ));
    
    wp_enqueue_script( 'swiper-init', plugins_url( '/js/swiper-init.js', __FILE__ ));
    
    wp_register_style( 'swiper', plugins_url('css/swiper.min.css', __FILE__) );
        wp_enqueue_style( 'swiper' );
    
    wp_register_style( 'swiper-style', plugins_url('css/swiper-style.css', __FILE__) );
        wp_enqueue_style( 'swiper-style' );
    }

add_action('wp_enqueue_scripts','swiper_scripts');



// Include Scripts
include_once('inc/sc-post-slider.php');
include_once('inc/sc-product-slider.php');