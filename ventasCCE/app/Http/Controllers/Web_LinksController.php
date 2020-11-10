<?php

namespace App\Http\Controllers;


use App\Web_Links;
use App\Http\Resources\Web_Link as Web_LinkResource;
use App\Http\Resources\Web_LinkCollection;
use Illuminate\Http\Request;

class Web_LinksController extends Controller
{
    public function index()
    {
        return response()->json(new Web_LinkCollection(Web_Link::all()),  200);
    }
    public function show(Web_Links $id)
    {
        return response()->json( new Web_LinkResource($id), 200);
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
