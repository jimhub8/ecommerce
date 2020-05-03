<?php

namespace App\Http\Controllers;

use App\models\Category;
use App\models\CategoryProduct;
use App\models\Product;
use App\models\ProductSettings;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function shop()
    {
        $products = Product::paginate(12);
        return $this->transform_product($products);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // dd(env('APP_NAME', 'http://admin.jim'));
        $setting = ProductSettings::first();
        // $featured = $setting->featured;
        // return  $setting->newproduct;

        $setting = ProductSettings::first();

        $featured = [];
        if ($setting->featured) {
            $featured_id = CategoryProduct::whereIn('category_id', $setting->featured)->get('product_id');
            foreach ($featured_id as $key => $value) {
                $featured[] = $value->product_id;
            }
        }

        $newproduct = [];
        if ($setting->newproduct) {

            $newproduct_id = CategoryProduct::whereIn('category_id', $setting->newproduct)->get('product_id');
            foreach ($newproduct_id as $key => $value) {
                $newproduct[] = $value->product_id;
            }
        }
        // return $newproduct;



        $bestsellers = [];
        if ($setting->bestsellers) {
            $bestsellers_id = CategoryProduct::whereIn('category_id', $setting->bestsellers)->get('product_id');
            foreach ($bestsellers_id as $key => $value) {
                $bestsellers[] = $value->product_id;
            }
        }

        // dd($bestsellers, $newproduct, $featured);
        $featured = ($setting->featured) ? Product::whereIn('id', $featured)->paginate(10) : Product::where('id', 0)->paginate(10);
        $newproduct = ($setting->newproduct) ? Product::whereIn('id', $newproduct)->paginate(10) : Product::where('id', 0)->paginate(10);
        $bestsellers = ($setting->bestsellers) ? Product::whereIn('id', $bestsellers)->paginate(10) : Product::where('id', 0)->paginate(10);


        // $featured_t = $this->transform_product($featured);
        // $newproduct_t = $this->transform_product($newproduct);
        // $bestsellers_t = $this->transform_product($bestsellers);

        $product = array(
            'featured' => $this->transform_product($featured),
            'newproduct' => $this->transform_product($newproduct),
            'bestsellers' => $this->transform_product($bestsellers)
        );

        return $product;
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
        $products = $this->transform_product($products);
        return $products[0];
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
                    $product->description = $product->skus[0]->description;
                    $product->quantity = $product->skus[0]->quantity;
                }
            } else {
            }
            if (count($product->images) > 0) {

                foreach ($product->images as  $pro_image) {
                    if ($pro_image->display) {
                        $product->image = $pro_image->image;
                    } else {
                        $product->image = env('APP_URL') . '/assets/default.jpg';
                        // $product->image = 'https://cdn.pixabay.com/photo/2018/09/15/19/53/online-3680202_960_720.jpg';                        $product->image = 'https://cdn.pixabay.com/photo/2018/09/15/19/53/online-3680202_960_720.jpg';
                    }
                }
            } else {
                $product->image = env('APP_URL') . '/assets/default.jpg';
                // $product->image = 'https://cdn.pixabay.com/photo/2018/09/15/19/53/online-3680202_960_720.jpg';                $product->image = 'https://cdn.pixabay.com/photo/2018/09/15/19/53/online-3680202_960_720.jpg';
            }
            return $product;
        });
        return $products;
    }

    public function product_setting()
    {
        $setting = ProductSettings::first();
        return $setting;
    }

    public function related($id)
    {
        // return $id;
        // DB::enableQueryLog(); // Enable query log

        $product = Product::with('categories')->find($id);

        $categories = [];
        foreach ($product->categories as  $value) {
            // return $value;
            $categories[] = $value['pivot']['category_id'];
        }
        // return $categories;

        $product_id = CategoryProduct::whereIn('category_id', $categories)->get('product_id');
        $product = [];
        foreach ($product_id as $key => $value) {
            $product[] = $value->product_id;
        }
        $products = Product::whereIn('id', $product)->paginate(10);

        $products = $this->transform_product($products);
        return $products;
        // dd($products);
        // dd(DB::getQueryLog()); // Show results of log
    }

    public function all_products()
    {
        $products = Product::paginate(200);
        return $products = $this->transform_product($products);
    }


    public function category_products($category)
    {
        $category =  Category::with('products')->where('category', $category)->first();
        // $category = Category::first();
        if ($category) {
            $products = $category->products()->paginate(10);
            return $this->transform_product($products);
        }
    }
    public function onSale()
    {
        $products = Product::paginate(3);
        return $products = $this->transform_product($products);
    }
}
