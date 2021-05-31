<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuestionsCollection;
use App\Http\Resources\Questions as QuestionsResource;
use App\Questions;
use App\Product;
use Illuminate\Http\Request;

class QuestionsController extends Controller
{
    private static $rules =[
        'question' => 'required',

    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function index(Product $product)
    {

        return response()->json(QuestionsResource::collection($product->question->sortByDesc('created_at')), 200);
    }
    public function show(Questions $id)
    {
        $this->authorize('view', $id);
        return response()->json( new QuestionsResource($id), 200);
    }
    public function store(Request $request, Product $product)
    {
        $question = $product->question()->save(new Questions($request->all()));

        return response()->json(new QuestionsResource($question), 201);
    }
    public function update(Request $request, $id)
    {
        $this->authorize('update',$id);
        $questions = Questions::findOrFail($id);
        $questions->update($request->all());
        return $questions;
    }
    public function delete(Request $request, $id)
    {
        $questions = Questions::findOrFail($id);
        $questions->delete();
        return 204;
    }
}
