<?php

namespace App\Http\Controllers;

use App\Reputation;
use App\Http\Resources\ReputationCollection;
use App\Http\Resources\ReputationCollection as ReputationResource;
use Illuminate\Http\Request;

class ReputationController extends Controller
{
    private static $rules =[
        'score' => 'required',
        'comment' => 'required',

    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function index()
    {

        return new ReputationCollection(Reputation::paginate (25));
    }
    public function show(Reputation $id)
    {
        $this->authorize('view', $id);
        return response()->json( new ReputationResource($id), 200);
    }
    public function store(Request $request)
    {
        $this->authorize('create', Reputation::class);
        $request->validate(self::$rules,self::$messages);
        return Reputation::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $this->authorize('update',$id);
        $reputation = Reputation::findOrFail($id);
        $reputation->update($request->all());
        return $reputation;
    }
    public function delete(Request $request, $id)
    {
        $reputation = Reputation::findOrFail($id);
        $reputation->delete();
        return 204;
    }
}
