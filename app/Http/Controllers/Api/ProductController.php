<?php

namespace App\Http\Controllers\Api;

use App\models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ProductController as ControllersProductController;
use App\models\CategoryProduct;
use App\models\ProductSettings;

class ProductController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::paginate(8);
        $transform_p = new ControllersProductController;
        return $transform_p->transform_product($products);


        $setting = ProductSettings::first();
        $featured = unserialize($setting->featured);
        $bestsellers = unserialize($setting->bestsellers);
        $newproduct = unserialize($setting->newproduct);

        // return $setting = ProductSettings::first();

        $featured_id = CategoryProduct::whereIn('category_id', $featured)->get('product_id');
        $featured = [];
        foreach ($featured_id as $key => $value) {
            $featured[] = $value->product_id;
        }


        $newproduct_id = CategoryProduct::whereIn('category_id', $newproduct)->get('product_id');
        $newproduct = [];
        foreach ($newproduct_id as $key => $value) {
            $newproduct[] = $value->product_id;
        }


        $bestsellers_id = CategoryProduct::whereIn('category_id', $bestsellers)->get('product_id');
        $bestsellers = [];
        foreach ($bestsellers_id as $key => $value) {
            $bestsellers[] = $value->product_id;
        }


        $featured = Product::whereIn('id', $featured)->paginate(10);
        $newproduct = Product::whereIn('id', $newproduct)->paginate(10);
        $bestsellers = Product::whereIn('id', $bestsellers)->paginate(10);


        // $featured_t = $this->transform_product($featured);
        // $newproduct_t = $this->transform_product($newproduct);
        // $bestsellers_t = $this->transform_product($bestsellers);
        $transform_p = new ControllersProductController;
        $product = array(
            'featured' => $transform_p->transform_product($featured),
            'bestsellers' => $transform_p->transform_product($newproduct),
            'newproduct' => $transform_p->transform_product($bestsellers)
        );

        return response()->json($product, '200');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function scroll_products()
    {
        $products = Product::setEagerLoads([])->take(1)->get();
        $transform_p = new ControllersProductController;
        return $transform_p->transform_product($products);
        // $products->transform(function($product) {
        //     $product->image = 'http://lorempixel.com/640/480/';
        //     $product->price = rand(300,5000);
        //     $product->rating = rand(0,5);
        //     return $product;
        // });
        // return response()->json($products, '200');


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $products = Product::find($id);
        return response()->json(['products' => $products, 'status' => '200'], '200');
    }

    public function related($id)
    {
        $related = new ControllersProductController;
        return $related->related($id);
    }
}
