<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Sites
    |--------------------------------------------------------------------------
    |
    | Each site should have root URL that is either relative or absolute. Sites
    | are typically used for localization (eg. English/French) but may also
    | be used for related content (eg. different franchise locations).
    |
    */

    'sites' => [

        'de' => [
            'name' => 'de',
            'locale' => 'de_DE',
            'url' => '/',
        ],

        'en' => [
            'name' => 'en',
            'locale' => 'en_US',
            'url' => '/en/',
        ],

        'fr' => [
            'name' => 'fr',
            'locale' => 'fr_FR',
            'url' => '/fr/',
        ],

        'ar' => [
            'name' => 'ar',
            'locale' => 'ar_MA',
            'url' => '/ar/',
            'direction' => 'ltr',
        ],

    ],
];
