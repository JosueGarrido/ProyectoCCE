<?php

namespace App\Http\Controllers;


use App\Sale;
use App\Http\Resources\Sale as SaleResource;
use App\Http\Resources\SaleCollection;
use http\Env\Response;
use Illuminate\Http\Request;

class SaleController extends Controller
{
    public function index()
    {
        return response()->json(new SaleCollection(Sale::all()),  200);
    }
    public function show(Sale $id)
    {
        return response()->json( new SaleResource($id), 200);
    }
    public function store(Request $request)
    {
        return Sale::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $sales = Sale::findOrFail($id);
        $sales->update($request->all());
        return $sales;
    }
    public function delete(Request $request, $id)
    {
        $sales = Sale::findOrFail($id);
        $sales->delete();
        return 204;
    }
}
