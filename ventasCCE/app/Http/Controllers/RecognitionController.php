<?php

namespace App\Http\Controllers;

use App\Recognition;
use App\Http\Resources\Recognition as RecognitionResource;
use App\Http\Resources\RecognitionCollection;
use Illuminate\Http\Request;

class RecognitionController extends Controller
{
    public function index()
    {
        return response()->json(new RecognitionCollection(Recognition::all()),  200);
    }
    public function show(Recognition $id)
    {
        return response()->json( new RecognitionResource($id), 200);
    }
    public function store(Request $request)
    {
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
