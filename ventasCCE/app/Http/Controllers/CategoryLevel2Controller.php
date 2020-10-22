<?php

namespace App\Http\Controllers;

use App\CategoryLevel2;
use Illuminate\Http\Request;

class CategoryLevel2Controller extends Controller
{
    public function index()
    {
        return CategoryLevel2::all();
    }
    public function show($id)
    {
        return CategoryLevel2::find($id);
    }
    public function store(Request $request)
    {
        return CategoryLevel2::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $category2 = CategoryLevel2::findOrFail($id);
        $category2->update($request->all());
        return $category2;
    }
    public function delete(Request $request, $id)
    {
        $category2 = CategoryLevel2::findOrFail($id);
        $category2->delete();
        return 204;
    }
}
