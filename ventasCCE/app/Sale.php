<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Sale extends Model
{
    protected $fillable=['date_buy_sale','description_buy_sale','total_buy_sale',
        'quantity_buy_sale'];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($sale) {
            $sale->user_id = Auth::id();
        });
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
