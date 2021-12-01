<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'forge' );

/** MySQL database username */
define( 'DB_USER', 'forge' );

/** MySQL database password */
define( 'DB_PASSWORD', '8qP4tOFkxHvuBKkvbhT8' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '=l:JAju4|R2ciuZ@~|:6B:cH8{Tp.w-HwiLC8OAZ4R@RS@$u8nFh[[]i#DR0,!fp' );
define( 'SECURE_AUTH_KEY',   '@iGZvg:Ryn`*|B)Ll##4kz-iVNORvLv!~:+<&h{}=&bTDD|i@$N6=m`:z>e-S|Sy' );
define( 'LOGGED_IN_KEY',     'qvyL}/I%NMj$&$o#+@!hi~Jax$4?|28VQ0Awu<87:0nt*P#VNog~L;r#QaXG|v~#' );
define( 'NONCE_KEY',         'iZ.2)e9/6uW sPHaY{ /&_tdOinN~X|h>A4h$ckI%j(^Hdt<-swgf;6v=<TmBGG%' );
define( 'AUTH_SALT',         'AysFYx3S&1z`@q36{-gg!E?9bsMxFC)Lx;eP0IxTO|v|<)//.0:3L8xrD7WuGK@#' );
define( 'SECURE_AUTH_SALT',  'V.iL[V1<bJ4*ypSG=wdXqio][H,%owq*RGM5@(o7V]G+.{?>0tfW$8l}Wv/+xC%<' );
define( 'LOGGED_IN_SALT',    'KVQ$];/L,BziJ]e<XdeMaIX&hQ%@HU}FQE&a)U&_-117R~pe=kp^Ba:Q@&bmNYKR' );
define( 'NONCE_SALT',        'J:!~w95@V)xTv(6,&]B@Wfp&bk I=EKdq[^&?C=6&4]yZmC5lrUWb,zglN%krjZg' );
define( 'WP_CACHE_KEY_SALT', '%vZe^I3%)Cz{>dHcf{>3aFYs(V.$&<Axl5tdH01TLrQ R{_aRF#@!1)k=$[I<hxa' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
