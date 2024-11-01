<?php
/**
* Plugin Name: SyntaxHighlighter Evolved: PostgreSQL Brush
* Description: Adds support for the PostgreSQL language to the SyntaxHighlighter Evolved plugin.
* Author: Chris B. Kerndter
* Version: 0.1
* Author URI: http://www.kerndter.net
* Plugin URI: http://www.kerndter.net/syntaxhighlighter_postgres
*/
 
// SyntaxHighlighter Evolved doesn't do anything until early in the "init" hook, so best to wait until after that
add_action( 'init', 'syntaxhighlighter_postgres_regscript' );
 
// Tell SyntaxHighlighter Evolved about this new language/brush
add_filter( 'syntaxhighlighter_brushes', 'syntaxhighlighter_postgres_addlang' );
 
// Register the brush file with WordPress
function syntaxhighlighter_postgres_regscript() {
    wp_register_script( 'syntaxhighlighter-brush-postgres', plugins_url( 'shBrushPostgreSQL.js', __FILE__ ), array('syntaxhighlighter-core'), '1.2.4' );
}
 
// Filter SyntaxHighlighter Evolved's language array
function syntaxhighlighter_postgres_addlang( $brushes ) {
    $brushes['postgres'] = 'postgres';

    return $brushes;
}