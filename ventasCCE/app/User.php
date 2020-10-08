<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable  implements JWTSubject
{
        use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     *
     */
//agregar profile picture y birthday
    protected $fillable = [
        'name','last_name', 'email', 'password','identity','birthday','phone','location',
        'culture','disability','stage_name','cultural_field','main_activity','secondary_activity','education_level',
        'career_name','studies_institution','social_networks'
    ];


    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    public function getJWTCustomClaims()
    {
        return [];
    }
}
