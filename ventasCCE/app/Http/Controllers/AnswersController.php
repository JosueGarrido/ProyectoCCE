<?php

namespace App\Http\Controllers;

use App\Http\Resources\AnswersCollection;
use App\Http\Resources\Answers as AnswersResource;
use App\Answers;
use App\Questions;
use Illuminate\Http\Request;

class AnswersController extends Controller
{
    private static $rules =[
        'answer' => 'required',

    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function index(Questions $question)
    {
        return response()->json(new AnswersResource($question->answer->sortByDesc('created_at')), 200);
        //return new AnswersCollection(Answers::paginate (25));
    }
    public function show(Answers $id)
    {
        $this->authorize('view', $id);
        return response()->json( new AnswersResource($id), 200);
    }
    public function store(Request $request, Questions $question)
    {
        $answer = $question->answer()->save(new Answers($request->all()));

        return response()->json(new AnswersResource($answer), 201);
    }
    public function update(Request $request, $id)
    {
        $this->authorize('update',$id);
        $answers = Answers::findOrFail($id);
        $answers->update($request->all());
        return $answers;
    }
    public function delete(Request $request, $id)
    {
        $answers = Answers::findOrFail($id);
        $answers->delete();
        return 204;
    }
}
