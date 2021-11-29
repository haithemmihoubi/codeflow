<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\RatingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['prefix' => 'v1'], function () {
    Route::apiResources([
        'posts' => PostController::class,
        'categories' => CategoryController::class,
        'comments' => CommentController::class,
        'ratings' => RatingController::class,
    ]);
    Route::get('/search/{name}', [PostController::class, 'search']);
    Route::get('/filterPostsByCategory/{categoryName}', [PostController::class, 'filterPostsByCategory']);

});



Route::get('/clear-cache', function () {
    $exitCode = Artisan::call('cache:clear');
    $exitCode2 = Artisan::call('route:clear');
    $exitCode3 = Artisan::call('config:clear');
    $exitCode4 = Artisan::call('view:clear');
    return 'Application cache cleared';
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
