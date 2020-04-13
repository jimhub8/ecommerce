<?php

namespace App;

use App\models\Billingaddress;
use App\models\Shippingaddress;
use App\models\wish;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    public $with = ['billing', 'shipping'];


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function billing()
    {
        return $this->hasOne(Billingaddress::class);
    }
    public function shipping()
    {
        return $this->hasOne(Shippingaddress::class);
    }

    public function wishes()
    {
        return $this->hasMany(wish::class);
    }
}
