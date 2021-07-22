<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this ->id,
            'name' => $this ->name,
            'last_name' => $this ->last_name,
            'email' => $this ->email,
            'email_verified_at' => $this ->email_verified_at,
            'password' => $this ->password,
            'identity' => $this ->identity,
            'birthday' => $this ->birthday,
            'phone' => $this ->phone,
            'profile_picture' => $this ->profile_picture,
            'artist' => $this -> userable,
            'location' => $this ->location,
            'userable_id' => $this ->userable_id,

        ];

    }
}
