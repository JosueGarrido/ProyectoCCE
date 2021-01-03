<?php

namespace App\Http\Controllers;


use App\Product;
use App\User;
use App\Http\Resources\Product as ProductResource;
use App\Http\Resources\ProductCollection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

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

    public function index(User $user)
    {
        // $this->authorize('viewAny', Product::class);

        return response()->json(ProductResource::collection($user->products->sortByDesc('created_at')), 200);
    }

    public function indexall()
    {
       // $this->authorize('viewAny', Product::class);
        return new ProductCollection(Product::paginate (25));

    }
    public function show(Product $id)
    {
        $this->authorize('view', $id);
        return response()->json( new ProductResource($id), 200);
    }
    public function image(Product $product)
    {
        return response()->download(public_path(Storage::url($product->image)), $product->title);
    }
    public function store(Request $request)
    {

        $this->authorize('create', Product::class);
        $messages =[
        'required' => 'El campo :attribute es obligatorio.',
    ];
        $request->validate([
            'name' => 'required|string|max:30',
            'description' => 'required|string|max:150',
            'price' => 'required',
            'stock' => 'required',
            'image' => 'required|image|dimensions:min_width=200,min_height=200',
            'location' => 'required',
            'category_id' => 'required'
        ],$messages);

        $product = Product::create($request->all());
        $path = $request->image->store('public/products');

        $product->image = 'products/' . basename($path);
        $product->save();

        return response()->json($product, 201);


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
