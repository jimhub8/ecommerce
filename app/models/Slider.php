<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    public function getImageAttribute($value)
    {
            return $this->attributes['image'] = env('GCE_STORAGE_PATH', 'https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/') . $value;
            // return $this->attributes['image'] = env('ADMIN_URL', 'http://192.168.43.81:82') . $value;
    }

}
