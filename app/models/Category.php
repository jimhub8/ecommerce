<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $with = ['subcategories'];

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

    public function menu()
    {
        return $this->hasOne(Menu::class);
    }
    public function subcategories()
    {
        return $this->hasMany(Subcategory::class);
    }
}
