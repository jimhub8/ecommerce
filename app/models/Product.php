<?php

namespace App\models;

use App\Scopes\ProductScope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;
    public $with = ['skus', 'categories'];
    public function sales()
    {
        return $this->belongsToMany(Sale::class);
        // return $this->belongsToMany('App\models\Sale')->using('App\models\ProductSale');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    // public function subcategories()
    // {
    //     return $this->belongsToMany(Subcategory::class);
    // }

    // public function brands()
    // {
    //     return $this->belongsToMany(Brand::class);
    // }


    // Product relationships
    public function product_variants()
    {
        return $this->hasMany(ProductVariant::class);
    }
    public function product_options()
    {
        return $this->hasMany(ProductOption::class);
    }
    public function images()
    {
        return $this->hasMany(Image::class);
    }
    // public function variant_values()
    // {
    //     return $this->hasMany(VariantValue::class);
    // }
    public function skus()
    {
        return $this->hasMany(Sku::class);
    }


    public function getDiscountAttribute($value)
    {
        $product = $this;
        // dd($this->categories);
        $discount = [];
        if ($product->categories) {
            foreach ($product->categories as  $category) {
                $discount[] = $category->discounts;
                // foreach ($category->discounts as  $discount) {
                //     dd($discount);
                //     if ($discount->discount_unit == 'percentage') {
                //         return $discount->discount_value . '/' . $discount->discount_unit;
                //     }
                // }
            }
        }
        // dd($discount);
    }


    public function wishes()
    {
        return $this->hasMany(wish::class);
    }


    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope(new ProductScope);

    }
    // protected $appends = array('featured');


    // public function getFeaturedAttribute()
    // {
    //     $setting = ProductSettings::first();
    //     // dd($setting->featured);
    //     $featured_id = CategoryProduct::whereIn('category_id', $setting->featured)->first('product_id');
    //     // dd($featured_id);

    //     return 'test';
    // }
}
