<?php

namespace App\Http\Controllers;

use App\Web_Links;
use Illuminate\Http\Request;

class Web_LinksController extends Controller
{
    public function index()
    {
        return Web_Links::all();
    }
    public function show($id)
    {
        return Web_Links::find($id);
    }
    public function store(Request $request)
    {
        return Web_Links::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $weblinks = Web_Links::findOrFail($id);
        $weblinks->update($request->all());
        return $weblinks;
    }
    public function delete(Request $request, $id)
    {
        $weblinks = Web_Links::findOrFail($id);
        $weblinks->delete();
        return 204;
    }
}
