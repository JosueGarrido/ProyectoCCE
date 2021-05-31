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

        'name','last_name', 'email', 'password','identity','birthday','phone','location'

    ];
    const ROLE_SUPERADMIN = 'ROLE_SUPERADMIN';
    const ROLE_ARTIST = 'ROLE_ARTIST';
    const ROLE_USER = 'ROLE_USER';

   /** private const ROLES_HIERARCHY = [
        self::ROLE_SUPERADMIN => [self::ROLE_ADMIN, self::ROLE_USER],
        self::ROLE_ARTIST => [self::ROLE_USER],
        self::ROLE_USER => []
    ];**/
    private const ROLES_HIERARCHY = [
        self::ROLE_SUPERADMIN => [self::ROLE_ARTIST],
        self::ROLE_ARTIST => [self::ROLE_USER],
        self::ROLE_USER => []
    ];


    protected $hidden = [
        'password', 'remember_token',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    public function getJWTCustomClaims()
    {
        return [];
    }
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];



    /**public function isGranted($role)
    {
        return $role === $this->role || in_array($role,
                self::ROLES_HIERARCHY[$this->role]);
    }**/
    public function isGranted($role)
    {
        if ($role === $this->role) {
            return true;
        }
        return self::isRoleInHierarchy($role, self::ROLES_HIERARCHY[$this->role]);
    }
    private static function isRoleInHierarchy($role, $role_hierarchy)
    {
        if (in_array($role, $role_hierarchy)) {
            return true;
        }
        foreach ($role_hierarchy as $role_included) {
            if(self::isRoleInHierarchy($role,self::ROLES_HIERARCHY[$role_included]))
            {
                return true;
            }
        }
        return false;
    }

    public function web_links()
    {
        return $this->hasMany('App\Web_Links');
    }
    public function cultural_projects()
    {
        return $this->hasMany('App\Cultural_Projects');
    }
    public function recognitions()
    {
        return $this->hasMany('App\Recognition');
    }
    public function sales()
    {
        return $this->hasMany('App\Sale');
    }
    public function products()
    {
        return $this->hasMany('App\Product');
    }
    public function trajectories()
    {
        return $this->hasMany('App\Trajectory');
    }
    public function question()
    {
        return $this->hasMany('App\Questions');
    }
    public function answer()
    {
        return $this->hasMany('App\Answers');
    }
    public function reputation()
    {
        return $this->hasMany('App\Reputation', 'user_id_2');
    }
    public function followers()
    {
        return $this->hasMany('App\Followers', 'user_id_2');
    }

    public function userable(){
        return $this->morphTo();
    }
    public function followers()
    {
        return $this->hasMany('App\Follower');
    }
}
