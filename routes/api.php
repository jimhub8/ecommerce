<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource('products', 'Api\ProductController');

Route::get('couponSes', 'Api\CartController@couponSes')->name('couponSes');
Route::post('/cart/{id}', 'Api\CartController@addToCart')->name('addToCart');
Route::get('/getCart', 'Api\CartController@getCart')->name('getCart');
Route::post('/update_cart/{id}', 'Api\CartController@update_cart')->name('update_cart');
Route::post('/cartAdd/{id}', 'Api\CartController@cartAdd')->name('cartAdd');
Route::post('/flashCart/{id}', 'Api\CartController@flashCart')->name('flashCart');
Route::get('/getCartProduct', 'Api\CartController@getCartProduct')->name('getCartProduct');
Route::get('/cart_total', 'Api\CartController@cart_total')->name('cart_total');
Route::get('/cart_count', 'Api\CartController@cart_count')->name('cart_count');

Route::get('scroll_products', 'Api\ProductController@scroll_products')->name('scroll_products');
Route::get('/related/{id}', 'Api\ProductController@related')->name('related');

