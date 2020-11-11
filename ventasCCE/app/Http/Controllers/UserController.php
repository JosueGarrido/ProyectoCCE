<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\User;
use App\Http\Resources\User as UserResource;
use Illuminate\Http\Request;

class UserController extends Controller{
    private static $rules =[
        'name' => 'required|string|max:30',
        'lastname' => 'required|string|max:30',
        'email' => 'required',
        'password' => 'required',
        'identity' => 'required',
        'birthday' => 'required',
        'phone' => 'required',
        'profile_picture' => 'required',
        'location' => 'required',
        'culture' => 'required',
        'stage_name' => 'required|unique:user',
        'field_cultural' => 'required',
        'main_activity' => 'required',
        'education_level' => 'required',
    ];
    private static $messages =[
        'required' => 'El campo :attribute es obligatorio.',

    ];
    public function index()
    {
      //  $this->authorize('viewAny', User::class);

        return new UserCollection(User::paginate (25));
    }
    public function show($id)
    {
        $this->authorize('view', $id);
        return response()->json( new UserResource($id), 200);
    }
    public function store(Request $request)
    {
        $this->authorize('create', User::class);
        $request->validate(self::$rules,self::$messages);
        return User::create($request->all());
    }
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());
        return$user;
    }
    public function delete(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return 204;
    }
}
