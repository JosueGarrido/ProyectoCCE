<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Artist extends JsonResource
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
            'culture' => $this ->culture,
            'stage_name' => $this ->stage_name,
            'field_cultural' => $this ->field_cultural,
            'main_activity' => $this ->main_activity,
            'secondary_activity' => $this ->secondary_activity,
            'education_level' => $this ->education_level,
            'career_name' => $this ->career_name,
            'studies_institution' => $this ->studies_institution,
            'live' => $this ->live,
            'instagram' => $this ->instagram,
            'facebook' => $this ->facebook,
            'whatsapp' => $this ->whatsapp,
            'picture' => $this ->picture,

        ];

    }
}
