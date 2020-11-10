<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PhotoFormat extends Model
{
    protected $fillable=['name','description'];

    public function CategoryLevel1()
    {
        return $this->belongsTo('App\CategoryLevel1');
    }
}
