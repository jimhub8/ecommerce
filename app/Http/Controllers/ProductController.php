<?php

namespace App\Http\Controllers;

use App\models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::paginate(10);
        return $this->transform_product($products);
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $products = Product::where('id', $id)->get();
        $$products = $this->transform_product($products);
        return $$products[0];
    }

    public function transform_product($products)
    {

        $products->transform(function ($product) {
            // dd($product->skus);
            // dd(count($product->product_variants));
            if (count($product->product_variants) == 0) {
                if (count($product->skus) > 0) {
                    // dd(($product->skus[0]->price));
                    $product->sku_no = $product->skus[0]->sku_no;
                    $product->price = $product->skus[0]->price;
                    $product->quantity = $product->skus[0]->quantity;
                }
            } else {

            }
            foreach ($product->images as  $pro_image) {
                if ($pro_image->display) {
                    $product->image = $pro_image->image;
                }
            }
            return $product;
        });
        return $products;
    }

}
