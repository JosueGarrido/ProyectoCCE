<?php

namespace App\Http\Controllers;

use App\Sale;
use Illuminate\Http\Request;

class SaleController extends Controller
{
    public function index()
    {
        return Sale::all();
    }
    public function show($id)
    {
        return Sale::find($id);
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
