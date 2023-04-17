#!/bin/sh

/usr/local/bin/php artisan migrate
/usr/local/bin/php artisan serve --host=0.0.0.0 --port=8082