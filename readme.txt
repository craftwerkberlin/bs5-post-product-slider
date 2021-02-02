=== bS5 Post / Product Slider ===

Contributors: craftwerk

Requires at least: 4.5
Tested up to: 5.5.1
Requires PHP: 5.6
Stable tag: 5.0.0
License: GNU General Public License v2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Post or WooCommerce product Slider for bootScore 5 WordPress theme, made with Swiper, Copyright 2020 Bastian Kreiter.

== Installation ==

1. In your admin panel, go to Plugins > and click the Add New button.
2. Click Upload Plugin and Choose File, then select the Plugin's .zip file. Click Install Now.
3. Click Activate to use your new Plugin right away.

== Usage ==

    = Posts =

        Use shortcode to display your posts in a page:

        [post-slider type="post" category="sample-category" order="ASC" orderby="title" posts="12"]

        Options:

        category: category slug
        order: ASC or DESC
        orderby: date or title
        posts: number of posts to display

    = Products =

        Use shortcode to display your products in a page:

        [bs-product-slider order="DESC" orderby="date" posts="12" category="sample-category, test-category"]

        Options:

        order: ASC or DESC
        orderby: date or title
        posts: number of posts to display
        category: category slug, seperated by comma for multiple categories


== Changelog ==

    = 5.0.0 - December 12 2020 =
    
        * Initial release
        
        
== Credits ==

Swiper: https://swiperjs.com/, MIT License