<?php

namespace App\Http\Controllers;

use App\PhotoFormat;
use App\Http\Resources\PhotoFormat as PhotoFormatResource;
use App\Http\Resources\PhotoFormatCollection;
use Illuminate\Http\Request;

class PhotoFormatController extends Controller
{
    public function index()
    {
        return response()->json(new PhotoFormatCollection(PhotoFormat::all()),  200);
    }
    public function show(PhotoFormat $id)
    {
        return response()->json( new PhotoFormatResource($id), 200);
    }
    public function store(Request $request)
    {
        return PhotoFormat::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $photoformats = PhotoFormat::findOrFail($id);
        $photoformats->update($request->all());
        return $photoformats;
    }
    public function delete(Request $request, $id)
    {
        $photoformats = PhotoFormat::findOrFail($id);
        $photoformats->delete();
        return 204;
    }
}
