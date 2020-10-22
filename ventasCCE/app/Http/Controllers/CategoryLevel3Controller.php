<?php

namespace App\Http\Controllers;

use App\CategoryLevel3;
use Illuminate\Http\Request;

class CategoryLevel3Controller extends Controller
{
    public function index()
    {
        return CategoryLevel3::all();
    }
    public function show($id)
    {
        return CategoryLevel3::find($id);
    }
    public function store(Request $request)
    {
        return CategoryLevel3::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $category3 = CategoryLevel3::findOrFail($id);
        $category3->update($request->all());
        return $category3;
    }
    public function delete(Request $request, $id)
    {
        $category3 = CategoryLevel3::findOrFail($id);
        $category3->delete();
        return 204;
    }
}
