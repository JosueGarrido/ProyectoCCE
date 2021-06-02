<?php

namespace App\Http\Controllers;

use App\Follower;
use App\Http\Resources\Product;
use App\Reputation;
use App\User;
use App\Http\Resources\Follower as FollowerResource;
use App\Http\Resources\FollowerCollection;
use Illuminate\Http\Request;

class FollowerController extends Controller
{
    public function store(Request $request, User $user)
    {
        $follower = $user->followers()->save(new Follower($request->all()));
        return response()->json(new FollowerResource($follower), 201);
    }
}
