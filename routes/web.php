<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::name('admin.categories.list')->get('/admin/categories/list', [App\Http\Controllers\Admin\CategoryController::class, 'list']);
Route::get('/testing', [App\Http\Controllers\AdminController::class, 'testing']);
Auth::routes();

Route::name('admin')->resource('admin/posts', App\Http\Controllers\Admin\PostController::class);
Route::name('admin')->resource('admin/categories', App\Http\Controllers\Admin\CategoryController::class);
Route::name('admin')->resource('admin/users', App\Http\Controllers\Admin\UserController::class);

Route::get('/admin',[App\Http\Controllers\AdminController::class, 'index']);

