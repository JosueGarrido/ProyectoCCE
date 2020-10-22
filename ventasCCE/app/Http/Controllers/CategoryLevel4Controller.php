<?php

namespace App\Http\Controllers;

use App\CategoryLevel4;
use Illuminate\Http\Request;

class CategoryLevel4Controller extends Controller
{
    public function index()
    {
        return CategoryLevel4::all();
    }
    public function show($id)
    {
        return CategoryLevel4::find($id);
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
