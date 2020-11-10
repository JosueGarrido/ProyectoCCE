<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Web_Links extends Model
{
    protected $fillable = ['link_type','link_description'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
