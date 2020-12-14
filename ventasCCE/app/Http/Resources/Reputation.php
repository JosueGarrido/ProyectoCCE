<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Reputation extends JsonResource
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
            'score' => $this ->score,
            'comment' => $this ->comment,
            'user' => "/api/users/" . $this->user_id,
            'user_data' => $this->user,
            'product_id' => $this ->product_id,
            'created_at' => $this ->created_at,

        ];
    }
}
