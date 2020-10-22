<?php

namespace App\Http\Controllers;

use App\CategoryLevel1;
use Illuminate\Http\Request;

class CategoryLevel1Controller extends Controller
{
    public function index()
    {
        return CategoryLevel1::all();
    }
    public function show($id)
    {
        return CategoryLevel1::find($id);
    }
    public function store(Request $request)
    {
        return CategoryLevel1::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $category1 = CategoryLevel1::findOrFail($id);
        $category1->update($request->all());
        return $category1;
    }
    public function delete(Request $request, $id)
    {
        $category1 = CategoryLevel1::findOrFail($id);
        $category1->delete();
        return 204;
    }
}
