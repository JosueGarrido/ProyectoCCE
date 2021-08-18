<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryLevel3 extends Model
{
    protected $fillable=['name'];

    public function CategoryLevel2()
    {
        return $this->belongsTo('App\CategoryLevel2');
    }
    public function product()
    {
        return $this->hasMany('App\Product');
    }
}
