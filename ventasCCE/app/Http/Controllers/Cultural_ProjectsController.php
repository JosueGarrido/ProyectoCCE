<?php

namespace App\Http\Controllers;

use App\Cultural_Projects;
use App\Http\Resources\Cultural_Project;
use App\Http\Resources\Cultural_Project as Cultural_ProjectResource;
use App\Http\Resources\Cultural_ProjectCollection;
use Illuminate\Http\Request;

class Cultural_ProjectsController extends Controller
{
    public function index()
    {
        return response()->json(new Cultural_ProjectCollection(Cultural_Project::all()),  200);
    }
    public function show(Cultural_Projects $id)
    {
        return response()->json( new Cultural_ProjectResource($id), 200);
    }
    public function store(Request $request)
    {
        return Cultural_Projects::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $culturalprojects = Cultural_Projects::findOrFail($id);
        $culturalprojects->update($request->all());
        return $culturalprojects;
    }
    public function delete(Request $request, $id)
    {
        $culturalprojects = Cultural_Projects::findOrFail($id);
        $culturalprojects->delete();
        return 204;
    }
}
