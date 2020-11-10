<?php

namespace App\Http\Controllers;

use App\AudioVideoFormat;
use App\Http\Resources\AudioVideoFormat as AudioVideoFormatResource;
use App\Http\Resources\AudioVideoFormatCollection;
use Illuminate\Http\Request;

class AudioVideoFormatController extends Controller
{
    public function index()
    {
        return response()->json(new AudioVideoFormatCollection(AudioVideoFormat::all()),  200);
    }
    public function show(AudioVideoFormat $id)
    {
        return response()->json( new AudioVideoFormatResource($id), 200);
    }
    public function store(Request $request)
    {
        return AudioVideoFormat::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $audioformats = AudioVideoFormat::findOrFail($id);
        $audioformats->update($request->all());
        return $audioformats;
    }
    public function delete(Request $request, $id)
    {
        $audioformats = AudioVideoFormat::findOrFail($id);
        $audioformats->delete();
        return 204;
    }
}

