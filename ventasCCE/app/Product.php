<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Product extends Model
{

    protected $fillable=['name','description','price','stock','sales', 'image','location',
        'category_id','category_id2','category_id3','category_id4'];


    public static function boot()
    {
        parent::boot();
        static::creating(function ($products) {
            $products->user_id = Auth::id();
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
    public function CategoryLevel2()
    {
        return $this->belongsTo('App\CategoryLevel2');
    }
    public function CategoryLevel3()
    {
        return $this->belongsTo('App\CategoryLevel3');
    }
    public function CategoryLevel4()
    {
        return $this->belongsTo('App\CategoryLevel4');
    }
    public function question()
    {
        return $this->hasMany('App\Questions', 'product_id');
    }
    public function sale()
    {
        return $this->hasMany('App\Sale', 'product_id');
    }
}
