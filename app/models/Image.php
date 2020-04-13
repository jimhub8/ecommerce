<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function getImageAttribute($value)
    {
        return $this->attributes['image'] = env('ADMIN_URL', 'http://192.168.43.81:82') . $value;
    }

}
