<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Follower extends Model
{
    public static function boot()
    {
        parent::boot();
        static::creating(function ($follower) {
            $follower->user_id = Auth::id();
        });
    }



    public function user()
    {
        return $this->belongsTo('App\User', 'user_id_2');
    }

}
