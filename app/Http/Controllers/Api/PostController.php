<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use http\Client\Curl\User;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function index()
    {
        return  response()->json(Post::all());
    }


    public function create()
    {

    }


    public function store(Request $request)
    {
        // La validation de données
        $this->validate($request, [
            'title' => 'required',
            "body" => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            "url"=>"nullable",
            "pdf"=>"mimes:jpeg,png,jpg,svg,doc,docx,odt,pdf,tex,txt,wpd,tiff,tif,csv,psd,key,odp,pps,ppt,pptx,ods,xls,xlsm,xlsx",
            "coupon"=>"nullable",
            "category_id"=>"required"
        ]);


        $post = Post::create([
            'title' =>  $request->title,
            "body" => $request->body,
            'image' =>  $request->image,
            "url"=> $request->url,
            "pdf"=> $request->pdf,
            "coupon"=> $request->coupon,
            "category_id"=> $request->category_id
        ]);

        // On retourne les informations du nouvel utilisateur en JSON
        return response()->json($post, 201);

    }


    public function show($id)
    { $post=Post::find($id) ;
        return response()->json($post);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
