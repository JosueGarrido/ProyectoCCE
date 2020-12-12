<?php

namespace App\Http\Controllers;

use App\Product;
use App\Http\Resources\Product as ProductResource;
use App\Http\Resources\ProductCollection;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    private static $rules =[
        'name' => 'required|string|max:30',
        'description' => 'required|string|max:150',
        'price' => 'required|float',
        'stock' => 'required|int',
        'image' => 'required',
        'location' => 'required',

    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function index()
    {
       // $this->authorize('viewAny', Product::class);

        return new ProductCollection(Product::paginate (25));
    }
    public function show(Product $id)
    {
        $this->authorize('view', $id);
        return response()->json( new ProductResource($id), 200);
    }
    public function store(Request $request)
    {
        $this->authorize('create', Product::class);
        $request->validate(self::$rules,self::$messages);
        return Product::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $this->authorize('update',$id);
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
