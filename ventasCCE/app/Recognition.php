<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recognition extends Model
{
    protected $fillable =['reco_name','reco_description','reco_type','reco_place'];
}
