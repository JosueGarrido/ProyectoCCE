<?php
namespace App\Http\Controllers;


use App\Http\Resources\UserCollection;
use App\User;
use App\Http\Resources\User as UserResource;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;


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

    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        $user = JWTAuth::user();

        return response()->json(compact('token', 'user'));

    }
    public function register(Request $request)
    {

      //  $this->authorize('view', $id);
      //  return response()->json( new UserResource($id), 200);

       $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $user = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
        ]);
        $token = JWTAuth::fromUser($user);
        return response()->json(compact('user','token'),201);

    }
    public function getAuthenticatedUser()
    {

       // $this->authorize('create', User::class);
     //   $request->validate(self::$rules,self::$messages);
      //  return User::create($request->all());

     try {
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['token_expired'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token_invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['token_absent'], $e->getStatusCode());
        }
        return response()->json(compact('user'));


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
