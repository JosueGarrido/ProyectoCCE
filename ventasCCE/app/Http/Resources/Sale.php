<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Sale extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     *    $table->bigIncrements('id');


     */
    public function toArray($request)
    {
        return [
            'id' => $this ->id,
            'date_buy_sale' => $this ->date_buy_sale,
            'total_buy_sale' => $this ->total_buy_sale,
            'quantity_buy_sale' => $this ->quantity_buy_sale,

        ];
    }
}
