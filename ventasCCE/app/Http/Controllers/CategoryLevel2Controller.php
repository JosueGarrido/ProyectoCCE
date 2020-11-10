<?php

namespace App\Http\Controllers;

use App\CategoryLevel2;
use App\Http\Resources\CategoryLevel2 as CategoryLevel2Resource;
use App\Http\Resources\CategoryLevel2Collection;
use Illuminate\Http\Request;

class CategoryLevel2Controller extends Controller
{
    public function index()
    {
        return response()->json(new CategoryLevel2Collection(CategoryLevel2::all()),  200);
    }
    public function show(CategoryLevel2 $id)
    {
        return response()->json( new CategoryLevel2Resource($id), 200);
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
