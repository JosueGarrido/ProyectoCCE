<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Product extends Model
{

    protected $fillable=['name','description','price','stock','image','location', 'category_id'];


    public static function boot()
    {
        parent::boot();
        static::creating(function ($product) {
            $product->user_id = Auth::id();
        });
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
    public function CategoryLevel1()
    {
        return $this->belongsTo('App\CategoryLevel1');
    }
    public function question()
    {
        return $this->hasMany('App\Questions');
    }
    public function reputation()
    {
        return $this->hasMany('App\Reputation');
    }
    public function sale()
    {
        return $this->hasMany('App\Sale');
    }
}
