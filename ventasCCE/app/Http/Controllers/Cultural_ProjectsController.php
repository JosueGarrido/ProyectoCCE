<?php

namespace App\Http\Controllers;

use App\Cultural_Projects;
use Illuminate\Http\Request;

class Cultural_ProjectsController extends Controller
{
    public function index()
    {
        return Cultural_Projects::all();
    }
    public function show($id)
    {
        return Cultural_Projects::find($id);
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
