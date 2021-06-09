<?php

namespace App\Http\Controllers;

use App\Follower;
use App\Http\Resources\Product;
use App\Http\Resources\Follower as FollowerResource;
use App\User;
use App\Http\Resources\FollowerCollection;
use Illuminate\Http\Request;

class FollowerController extends Controller
{

    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function index(User $user)
    {
        return response()->json(FollowerResource::collection($user->followers->sortByDesc('created_at')), 200);
    }
    public function show(Follower $id)
    {
        $this->authorize('view', $id);
        return response()->json( new FollowerResource($id), 200);
    }
    public function store(Request $request, User $user)
    {

        $follower = $user->followers()->save(new Follower($request->all()));

        return response()->json(new FollowerResource($follower), 201);
    }
    public function update(Request $request, $id)
    {
        $this->authorize('update',$id);
        $follower= Follower::findOrFail($id);
        $follower->update($request->all());
        return $follower;
    }
    public function delete(Request $request, $id)
    {
        $follower = Follower::findOrFail($id);
        $follower->delete();
        return 204;
    }
}
