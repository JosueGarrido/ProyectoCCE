<?php

namespace App\Http\Controllers;

use App\PhotoFormat;
use Illuminate\Http\Request;

class PhotoFormatController extends Controller
{
    public function index()
    {
        return PhotoFormat::all();
    }
    public function show($id)
    {
        return PhotoFormat::find($id);
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
