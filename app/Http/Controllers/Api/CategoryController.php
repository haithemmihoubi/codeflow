<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function index()
    {
        return  response()->json(Category::all());
    }


    public function create()
    {

    }





    public function store(Request $request)
    {
        $this->validate($request, [
            "name" => 'required',
            "description" => 'required',
        ]);
        $category = Category::create([
            "name" =>  $request->name,
            "description"=>$request->description

        ]);
        return response()->json($category, 201);

    }


    public function show($id)
    { $category=Category::find($id);
        return response()->json($category);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
      $this->validate( $request,["name"=>"required","description"=>"required" ] ) ;
           $category = Category::where('id', $id);
           $category->update($request->all()) ;
           $category->save() ;
        return response()->json($category, 201);
    }

    public function destroy($id)
    {
        $Category = Category::findOrFail($id);
        if( $Category)
            $Category->delete();
        else
            return response()->json(error);
        return response()->json(null);
    }
}
