<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Product extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     *
     */
    public function toArray($request)
    {
        return [
            'id' => $this ->id,
            'name' => $this ->name,
            'description' => $this ->description,
            'price' => $this ->price,
            'stock' => $this ->stock,
            'image' => $this ->image,
            'reputations_data' => "/api/reputations/",
            'comment' => $this->reputation,
            'questions_data' => "/api/questions/",
            'sales' => $this->sales,
            'sales_data' => "/api/sales/",
            'questions' => $this->question,
            'location' => $this ->location,
            'user_id' => $this ->user_id,
            'created_at' => $this->created_at,


        ];
    }
}
