<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cultural_Projects extends Model
{
protected $fillable=['project_name','project_description','project_type','project_place'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
