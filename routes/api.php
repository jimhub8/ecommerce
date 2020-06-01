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


Route::group([
    'prefix' => 'auth',
], function () {
    Route::post('login', 'Api\AuthController@login');
    Route::post('signup', 'api\AuthController@signup');
    // Route::get('signup/activate/{token}', 'api\AuthController@signupActivate');
    Route::group([
        // 'middleware' => 'auth:api',
    ], function () {
        Route::get('logout', 'Api\AuthController@logout');
        Route::get('user', 'Api\AuthController@user');
    });
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Route::resource('products', 'Api\ProductController');
// Route::resource('categories', 'Api\CategoryController');
// Route::resource('sales', 'Api\SaleController');

// Route::get('couponSes', 'Api\CartController@couponSes')->name('couponSes');
// Route::post('/cart/{id}', 'Api\CartController@addToCart')->name('addToCart');
// Route::get('/getCart', 'Api\CartController@getCart')->name('getCart');
// Route::post('/update_cart/{id}', 'Api\CartController@update_cart')->name('update_cart');
// Route::post('/cartAdd/{id}', 'Api\CartController@cartAdd')->name('cartAdd');
// Route::post('/flashCart/{id}', 'Api\CartController@flashCart')->name('flashCart');
// Route::get('/getCartProduct', 'Api\CartController@getCartProduct')->name('getCartProduct');
// Route::get('/cart_total', 'Api\CartController@cart_total')->name('cart_total');
// Route::get('/cart_count', 'Api\CartController@cart_count')->name('cart_count');

// Route::get('scroll_products', 'Api\ProductController@scroll_products')->name('scroll_products');
// Route::get('/related/{id}', 'Api\ProductController@related')->name('related');

// Route::get('/category_product/{id}', 'Api\CategoryController@category_product')->name('category_product');













Route::post('/vendor_user', 'VendorController@vendor_user')->name('vendor_user');
Route::post('/vendor_company', 'VendorController@vendor_company')->name('vendor_company');
Route::post('vendor_logo/{id}', 'VendorController@vendor_logo')->name('vendor_logo');
// Mpesa
Route::any('/register_url', 'SafmpesaController@register_url')->name('register_url');
Route::any('/validate', 'SafmpesaController@validate')->name('validate');
Route::any('/confirmation', 'SafmpesaController@confirmation')->name('confirmation');
Route::any('/payment_', 'SafmpesaController@payment_')->name('payment_');
Route::any('/stk_push', 'SafmpesaController@stk_push')->name('stk_push');

Route::any('/mpesapay', 'SafmpesaController@mpesapay')->name('mpesapay');
Route::post('couponApply', 'CouponController@couponApply')->name('couponApply');

Route::get('couponSes', 'CartController@couponSes')->name('couponSes');
Route::resource('order_address', 'OrdershippingController');

// Route::get('/', 'Client\HomeController@index')->name('client.dashboard');
Route::get('/', 'HomeController@index');
Route::resource('products', 'ProductController');
Route::resource('wish', 'WishController');
Route::resource('reviews', 'ReviewController');
Route::resource('attributes', 'AttributeController');
Route::resource('product_attribute', 'ProductAttributeController');
Route::resource('attribute_value', 'AttributeValueController');
Route::resource('address', 'AddressController');
Route::resource('shipping', 'ShippingaddressController');
Route::resource('billing', 'BillingaddressController');
Route::resource('slider', 'SliderController');
Route::resource('wish', 'WishController');

Route::get('/ecommerce', 'HomeController@ecommerce')->name('ecommerce')->middleware('verified');
Route::get('/getReviews/{id}', 'ReviewController@getReviews')->name('getReviews');

Route::get('/category_products/{category}', 'ProductController@category_products')->name('category_products');


Route::get('/all_products', 'ProductController@all_products')->name('all_products');
Route::get('/onSale', 'ProductController@onSale')->name('onSale');

Route::get('/getsP', 'SliderController@getsP')->name('getsP');
Route::get('/getTP', 'SliderController@getTP')->name('getTP');
Route::get('/getTPN', 'SliderController@getTPN')->name('getTPN');
Route::get('/headerPro', 'SliderController@headerPro')->name('headerPro');

Route::get('/bestSellF', 'SliderController@bestSellF')->name('bestSellF');
Route::get('/bestSellA', 'SliderController@bestSellA')->name('bestSellA');
Route::get('/featuredF', 'SliderController@featuredF')->name('featuredF');
Route::get('/featuredA', 'SliderController@featuredA')->name('featuredA');
Route::get('/newProF', 'SliderController@newProF')->name('newProF');
Route::get('/newProA', 'SliderController@newProA')->name('newProA');

Route::post('/cart/{id}', 'CartController@addToCart')->name('addToCart');
Route::get('/getCart', 'CartController@getCart')->name('getCart');
Route::post('/update_cart/{id}', 'CartController@update_cart')->name('update_cart');
Route::post('/cartAdd/{id}', 'CartController@cartAdd')->name('cartAdd');
Route::post('/flashCart/{id}', 'CartController@flashCart')->name('flashCart');
Route::get('/getCartProduct', 'CartController@getCartProduct')->name('getCartProduct');
Route::get('/cart_total', 'CartController@cart_total')->name('cart_total');
Route::get('/cart_count', 'CartController@cart_count')->name('cart_count');

Route::get('/getProducts', 'ProductController@getProducts')->name('getProducts');
Route::post('/product_image/{id}', 'ProductController@product_image')->name('product_image');
Route::post('/proImg/{id}', 'ProductController@proImg')->name('proImg');
Route::get('/featured', 'ProductController@featured')->name('featured');
Route::get('/bestSell', 'ProductController@bestSell')->name('bestSell');
Route::get('/newProduct', 'ProductController@newProduct')->name('newProduct');
Route::post('/search', 'ProductController@search')->name('search');
Route::post('/searchProduct', 'ProductController@searchProduct')->name('searchProduct');

Route::get('/related/{id}', 'ProductController@related')->name('related');


Route::post('/searchItems/{search}', 'ProductController@searchItems')->name('searchItems');

Route::post('/filterProduct/{id}', 'FilterController@filterProduct')->name('filterProduct');
Route::post('/FilterShop', 'FilterController@FilterShop')->name('FilterShop');
Route::post('/filterItem', 'FilterController@filterItem')->name('filterItem');


Route::post('/NotyOrder/{id}', 'NotificationController@NotyOrder')->name('NotyOrder');
Route::post('/read', 'NotificationController@read')->name('read');
Route::get('/Chattynoty', 'NotificationController@Chattynoty')->name('Chattynoty');
Route::get('/notifications', 'NotificationController@notifications')->name('notifications');

Route::resource('brands', 'BrandController');
    Route::resource('subcategories', 'SubcategoryController');
    Route::resource('categories', 'CategoryController');
Route::resource('menu', 'MenuController');
// Auth::routes(['verify' => true]);

Route::get('ratings/{id}', 'ReviewController@ratings')->name('ratings');
Route::post('rate/{id}', 'ReviewController@rate')->name('rate');
Route::get('bestRated', 'ReviewController@bestRated')->name('bestRated');

Route::get('category/{id}', 'CategoryController@category')->name('category');
Route::get('catLimit', 'CategoryController@catLimit')->name('catLimit');

Route::get('subcategory/{id}', 'SubCategoryController@subcategory')->name('subcategory');


Route::get('show_product/{id}', 'ProductController@show_product')->name('show_product');

// Route::group(['middleware' => ['client.auth:client']], function () {
// });

// Auth::routes();
// Route::group(['middleware' => ['verified']], function () {
// Route::group(['middleware' => ['auth']], function () {
    Route::post('createpayment', 'PaymentController@create')->name('create');
    Route::get('execute-payment', 'PaymentController@execute')->name('execute');
    Route::post('cash_delivery', 'PaymentController@cash_delivery')->name('cash_delivery');
    // Route::get('sales', 'PaymentController@sales')->name('sales');
    Route::get('/clientOrders', 'SaleController@clientOrders')->name('clientOrders');
    Route::resource('clients', 'ClientController');
    Route::any('invoice/{id}', 'InvoiceController@invoice')->name('invoice');

    Route::get('/paypal', function () {
        return view('paypal.createPay');
    });
    Route::resource('coupons', 'CouponController');
    Route::resource('sizes', 'SizeController');
    Route::resource('images', 'ProductimgController');
    Route::resource('sales', 'SaleController');

    Route::get('/logoutOther', 'UserController@logoutOther')->name('logoutOther');
    Route::post('/logOtherDevices', 'UserController@logOtherDevices')->name('logOtherDevices');

    Route::get('/getUsersCount', 'UserController@getUsersCount')->name('getUsersCount');

    Route::resource('orders', 'OrderController');
    Route::resource('aboutus', 'AboutController');

    Route::post('/StatusItem/{id}', 'ProductController@StatusItem')->name('StatusItem');

    // Route::get('/admin', 'HomeController@admin')->name('admin');

    Route::get('/home', 'HomeController@index')->name('home');
    Route::post('/filterItems', 'FilterController@filterItems')->name('filterItems');

    Route::get('/pay', 'OrderController@pay')->name('pay');

    Route::any('apiGet', 'CarouselController@apiGet')->name('apiGet');


    // Unique
    Route::post('/searchItems/{search}', 'ProductController@searchItems')->name('searchItems');
    Route::post('/filterproducts', 'ProductController@filterproducts')->name('filterproducts');
    Route::get('/randomSku', 'ProductController@randomSku')->name('randomSku');
    Route::post('/filterProd_table', 'ProductController@filterProd_table')->name('filterProd_table');






// });
// });
Route::get('/product_setting', 'ProductController@product_setting')->name('product_setting');
Route::get('/shop', 'ProductController@shop')->name('shop');

Route::get('product_variant/{id}', 'VariantController@product_variant')->name('product_variant');
Route::post('variants_values/{id}', 'SkuController@variants_values')->name('variants_values');
