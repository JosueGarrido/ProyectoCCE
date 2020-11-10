<?php

namespace App\Http\Controllers;

use App\CategoryLevel4;
use App\Http\Resources\CategoryLevel4 as CategoryLevel4Resource;
use App\Http\Resources\CategoryLevel4Collection;
use Illuminate\Http\Request;

class CategoryLevel4Controller extends Controller
{
    public function index()
    {
        return response()->json(new CategoryLevel4Collection(CategoryLevel4::all()),  200);
    }
    public function show(CategoryLevel4 $id)
    {
        return response()->json( new CategoryLevel4Resource($id), 200);
    }
    public function store(Request $request)
    {
        return CategoryLevel4::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $category4 = CategoryLevel4::findOrFail($id);
        $category4->update($request->all());
        return $category4;
    }
    public function delete(Request $request, $id)
    {
        $category4 = CategoryLevel4::findOrFail($id);
        $category4->delete();
        return 204;
    }
}
