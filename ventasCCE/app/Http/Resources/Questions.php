<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Questions extends JsonResource
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
            'question' => $this ->question,
            'user_data' => 'api/users'.$this -> user_id,
            'user_id' => $this -> user_id,
            'product' => "/api/products/" . $this->product_id,
            'product_id' => $this ->product_id,
            'answers' => $this -> answer,
            'created_at' => $this ->created_at,
        ];
    }
}
