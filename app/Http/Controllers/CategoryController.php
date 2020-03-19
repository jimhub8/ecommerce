<?php

namespace App\Http\Controllers;

use App\models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::with('products')->paginate();
        return $this->transform_cat($categories);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    public function transform_cat($categories)
    {
        $categories->transform(function ($category) {
            $category->products->transform(function ($product) {
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
            return $category;
        });
        return $categories;

    }
}
