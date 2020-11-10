<?php

namespace App\Http\Controllers;

use App\Product;
use App\Http\Resources\Product as ProductResource;
use App\Http\Resources\ProductCollection;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return response()->json(new ProductCollection(Product::all()),  200);
    }
    public function show(Product $id)
    {
        return response()->json( new ProductResource($id), 200);
    }
    public function store(Request $request)
    {
        return Product::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $products = Product::findOrFail($id);
        $products->update($request->all());
        return $products;
    }
    public function delete(Request $request, $id)
    {
        $products = Product::findOrFail($id);
        $products->delete();
        return 204;
    }
}
