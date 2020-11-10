<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    protected $fillable=['date_buy_sale','description_buy_sale','total_buy_sale',
        'quantity_buy_sale'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
