<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    public function getImageAttribute($value)
    {
        return $this->attributes['image'] = env('ADMIN_URL', 'http://admin.jim') . $value;
    }

}
