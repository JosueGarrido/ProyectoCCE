<?php

namespace App\Http\Controllers;

use App\Recognition;
use App\Http\Resources\Recognition as RecognitionResource;
use App\Http\Resources\RecognitionCollection;
use Illuminate\Http\Request;

class RecognitionController extends Controller
{
    private static $rules =[
        'reco_name' => 'required|string',
        'reco_description' => 'required|string|max:250',
        'reco_type' => 'required',
        'reco_place' => 'required',

    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function index()
    {
        return new RecognitionCollection(RecognitionCollection::paginate (25));
    }
    public function show(Recognition $id)
    {
        return response()->json( new RecognitionResource($id), 200);
    }
    public function store(Request $request)
    {
        $request->validate(self::$rules,self::$messages);
        return Recognition::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $recognitions = Recognition::findOrFail($id);
        $recognitions->update($request->all());
        return $recognitions;
    }
    public function delete(Request $request, $id)
    {
        $recognitions = Recognition::findOrFail($id);
        $recognitions->delete();
        return 204;
    }
}
