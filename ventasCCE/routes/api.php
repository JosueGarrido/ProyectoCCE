<?php

use app\User;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Rutas usuarios
Route::group(['middleware' => ['cors']], function () {

Route::post('login', 'UserController@authenticate');
Route::post('register', 'UserController@register');
Route::get('users', 'UserController@index');
Route::delete('users/{id}', 'UserController@delete');

Route::group(['middleware' => ['jwt.verify']], function() {


    Route::get('users/{id}', 'UserController@show');
    Route::post('users', 'UserController@store');
    Route::put('users/{id}', 'UserController@update');


    //Rutas audio/video formats
    Route::get('audioformats', 'AudioVideoFormatController@index');
    Route::get('audioformats/{id}', 'AudioVideoFormatController@show');
    Route::post('audioformats', 'AudioVideoFormatController@store');
    Route::put('audioformats/{id}', 'AudioVideoFormatController@update');
    Route::delete('audioformats/{id}', 'AudioVideoFormatController@delete');

    //Rutas categorias nivel 1
    Route::get('category1', 'CategoryLevel1Controller@index');
    Route::get('category1/{id}', 'CategoryLevel1Controller@show');
    Route::post('category1', 'CategoryLevel1Controller@store');
    Route::put('category1/{id}', 'CategoryLevel1Controller@update');
    Route::delete('category1/{id}', 'CategoryLevel1Controller@delete');

    //Rutas categorias nivel 2
    Route::get('category2', 'CategoryLevel2Controller@index');
    Route::get('category2/{id}', 'CategoryLevel2Controller@show');
    Route::post('category2', 'CategoryLevel2Controller@store');
    Route::put('category2/{id}', 'CategoryLevel2Controller@update');
    Route::delete('category2/{id}', 'CategoryLevel2Controller@delete');

    //Rutas categorias nivel 3
    Route::get('category3', 'CategoryLevel3Controller@index');
    Route::get('category3/{id}', 'CategoryLevel3Controller@show');
    Route::post('category3', 'CategoryLevel3Controller@store');
    Route::put('category3/{id}', 'CategoryLevel3Controller@update');
    Route::delete('category3/{id}', 'CategoryLevel3Controller@delete');

    //Rutas categorias nivel 4
    Route::get('category4', 'CategoryLevel4Controller@index');
    Route::get('category4/{id}', 'CategoryLevel4Controller@show');
    Route::post('category4', 'CategoryLevel4Controller@store');
    Route::put('category4/{id}', 'CategoryLevel4Controller@update');
    Route::delete('category4/{id}', 'CategoryLevel4Controller@delete');

    //Rutas categorias nivel 4
    Route::get('category4', 'CategoryLevel4Controller@index');
    Route::get('category4/{id}', 'CategoryLevel4Controller@show');
    Route::post('category4', 'CategoryLevel4Controller@store');
    Route::put('category4/{id}', 'CategoryLevel4Controller@update');
    Route::delete('category4/{id}', 'CategoryLevel4Controller@delete');

    //Rutas proyectos culturales
    Route::get('culturalprojects', 'Cultural_ProjectsController@index');
    Route::get('culturalprojects/{id}', 'Cultural_ProjectsController@show');
    Route::post('culturalprojects', 'Cultural_ProjectsController@store');
    Route::put('culturalprojects/{id}', 'Cultural_ProjectsController@update');
    Route::delete('culturalprojects/{id}', 'Cultural_ProjectsController@delete');

    //Rutas formatos de foto
    Route::get('photoformats', 'PhotoFormatController@index');
    Route::get('photoformats/{id}', 'PhotoFormatController@show');
    Route::post('photoformats', 'PhotoFormatController@store');
    Route::put('photoformats/{id}', 'PhotoFormatController@update');
    Route::delete('photoformats/{id}', 'PhotoFormatController@delete');

    //Productos
    Route::get('products', 'ProductController@index');
    Route::get('products/{id}', 'ProductController@show');
    Route::post('products', 'ProductController@store');
    Route::put('products/{id}', 'ProductController@update');
    Route::delete('products/{id}', 'ProductController@delete');

    //Reconocimientos
    Route::get('recognitions', 'RecognitionController@index');
    Route::get('recognitions/{id}', 'RecognitionController@show');
    Route::post('recognitions', 'RecognitionController@store');
    Route::put('recognitions/{id}', 'RecognitionController@update');
    Route::delete('recognitions/{id}', 'RecognitionController@delete');

    //ventas
    Route::get('sales', 'SaleController@index');
    Route::get('sales/{id}', 'SaleController@show');
    Route::post('sales', 'SaleController@store');
    Route::put('sales/{id}', 'SaleController@update');
    Route::delete('sales/{id}', 'SaleController@delete');

    //links
    Route::get('weblinks', 'Web_LinksController@index');
    Route::get('weblinks/{id}', 'Web_LinksController@show');
    Route::post('weblinks', 'Web_LinksController@store');
    Route::put('weblinks/{id}', 'Web_LinksController@update');
    Route::delete('weblinks/{id}', 'Web_LinksController@delete');



    });
});




