<?php

namespace App\Http\Controllers;

use App\AudioVideoFormat;
use Illuminate\Http\Request;

class AudioVideoFormatController extends Controller
{
    public function index()
    {
        return AudioVideoFormat::all();
    }
    public function show($id)
    {
        return AudioVideoFormat::find($id);
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

