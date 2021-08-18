<?php
namespace App\Http\Controllers;

use App\Artist;
use App\Http\Resources\Artist as ArtistResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;

class ArtistController extends Controller{

    private static $rules =[
            'id' => 'required',
            'culture' => 'required',
            'stage_name' => 'required',
            'field_cultural' => 'required',
            'main_activity' => 'required',
            'secondary_activity' => 'required',
            'education_level' => 'required',
            'career_name' => 'required',
            'studies_institution' => 'required',
            'live' => 'required',
            'instagram' => 'required',
            'facebook' => 'required',
            'whatsapp' => 'required',
            'picture' => 'required|image|dimensions:min_width=200,min_height=200',
        ];
        private static $messages =[
            'required' => 'El campo :attribute es obligatorio.',

        ];

        public function index()
            {
              // $this->authorize('viewAny', User::class);
                return Artist::all();
                //return new UserCollection(User::paginate (25));
            }

        public function show(Artist $artist)
            {
                //$this->authorize('view', $artist);
                return response()->json( new ArtistResource($artist), 200);
            }


}
