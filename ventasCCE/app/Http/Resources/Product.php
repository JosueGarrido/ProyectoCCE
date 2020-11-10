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
     *  $table->bigIncrements('id');
    $table->string('name');
    $table->string('description');
    $table->float('price',6,2);
    $table->integer('stock');
    $table->string('image');
    $table->string('location',50);
    $table->integer('score');
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
            'location' => $this ->location,
            'score' => $this ->score,

        ];
    }
}
