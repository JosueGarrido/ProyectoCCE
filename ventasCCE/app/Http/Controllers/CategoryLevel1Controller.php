<?php

namespace App\Http\Controllers;

use App\CategoryLevel1;
use App\Http\Resources\CategoryLevel1 as CategoryLevel1Resource;
use App\Http\Resources\CategoryLevel1Collection;
use Illuminate\Http\Request;

class CategoryLevel1Controller extends Controller
{
    public function index()
    {
        return response()->json(new CategoryLevel1Collection(CategoryLevel1::all()),  200);
    }
    public function show(CategoryLevel1 $id)
    {
        return response()->json( new CategoryLevel1Resource($id), 200);
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
