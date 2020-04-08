<?php

namespace App\models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sale extends Model
{
    use SoftDeletes;

    public $with = ['products', 'ordershipping'];
     /**
     * The users that belong to the role.
     */
    public function products()
    {
        return $this->belongsToMany(Product::class)->withPivot('quantity', 'price', 'sku_no', 'total_price');
        // return $this->belongsToMany('App\models\Product')->using('App\models\ProductSale');
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }


    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function drawer()
    {
        return $this->belongsTo('App\models\Drawer');
    }


    public function setPaypallAttribute($value)
    {
        $this->attributes['paypal'] = serialize($value);
    }


    public function getPaypalAttribute($value)
    {
        $this->attributes['paypal'] = unserialize($value);
    }


    public function ordershipping()
    {
        return $this->hasOne(Ordershipping::class);
    }
}

