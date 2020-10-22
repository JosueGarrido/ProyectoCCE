<?php

namespace App\Http\Controllers;

use App\Recognition;
use Illuminate\Http\Request;

class RecognitionController extends Controller
{
    public function index()
    {
        return Recognition::all();
    }
    public function show($id)
    {
        return Recognition::find($id);
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
