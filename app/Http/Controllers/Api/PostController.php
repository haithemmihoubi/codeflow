<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function index()
    {
        return  response()->json(Post::all());
    }


    public function search($title)
    {
        $result = Post::where('title', 'like', '%' . $title . '%')->orWhere("body" ,'like', '%' . $title . '%')->latest()->get();
        if (count($result)) {
            return $result;
        } else {
            return ['result' => 'no records found'];
        }
    }
 public function filterPostsByCategory($categoryName)
    {
        $posts = Category::where('name', $categoryName)->firstOrFail()
            ->posts()->get();
        if (count($posts)) {
            return $posts;
        } else {
            return ['result' => 'no records found'];
        }
    } /*public function filterPostsByDate($date)
    {
        $posts = Category::whereDate('created_at', '=', date('Y-m-d'))

            ->posts()->get();
        if (count($posts)) {
            return $posts;
        } else {
            return ['result' => 'no records found'];
        }
    }*/






    public function create()
    {

    }


    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            "body" => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            "url"=>'nullable|url',
            "pdf"=>"nullable|mimes:svg,doc,docx,odt,pdf,tex,txt,wpd,tiff,tif,csv,psd,key,odp,pps,ppt,pptx,ods,xls,xlsm,xlsx",
            "coupon"=>"nullable",
            "category_id"=>"required"
        ]);
        //Storing Image
        if($request->hasFile('image'))
        {
            $image=$request->file("image") ;
            $image_new_name =rand().".".$image->getClientOriginalExtension();
            $image->move(public_path('uploads/images/'),$image_new_name);
            response()->json($image_new_name) ;
            $image_full_name = public_path('uploads/images/').$image_new_name;
        }else {
            return  response()->json("Image cannot be null") ;
        }
        //Storing PDF
        if($request->hasFile('pdf'))
        {
            $pdf=$request->file("pdf") ;
            $pdf_new_name = rand().".".$pdf->getClientOriginalExtension();
            $pdf->move(public_path('uploads/pdfs/'),$pdf_new_name);
            $pdf_full_name= public_path('uploads/pdfs/').$pdf_new_name;
            response()->json($pdf_full_name) ;
        }else {
            return  response()->json("PDF cannot be  null") ;
        }
        $post = Post::create([
            'title' =>  $request->title,
            "body" => $request->body,
            'image' => $image_full_name,
            "url"=> $request->url,
            "pdf"=> $pdf_full_name,
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
     $this->validate($request, [
            'title' => 'required',
            "body" => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            "url"=>'nullable|url',
            "pdf"=>"nullable|mimes:svg,doc,docx,odt,pdf,tex,txt,wpd,tiff,tif,csv,psd,key,odp,pps,ppt,pptx,ods,xls,xlsm,xlsx",
            "coupon"=>"nullable",
            "category_id"=>"required"
        ]);
        //Storing Image
        if($request->hasFile('image'))
        {
            $image=$request->file("image") ;
            $image_new_name =rand().".".$image->getClientOriginalExtension();
            $image->move(public_path('uploads/images/'),$image_new_name);
            response()->json($image_new_name) ;
            $image_full_name = public_path('uploads/images/').$image_new_name;
        }else {
            return  response()->json("Image cannot be null") ;
        }
        //Storing PDF
        if($request->hasFile('pdf'))
        {
            $pdf=$request->file("pdf") ;
            $pdf_new_name = rand().".".$pdf->getClientOriginalExtension();
            $pdf->move(public_path('uploads/pdfs/'),$pdf_new_name);
            $pdf_full_name= public_path('uploads/pdfs/').$pdf_new_name;
            response()->json($pdf_full_name) ;
        }else {
            return  response()->json("PDF cannot be  null") ;
        }
        $post = Post::where('id', $id);
        $post->update($request->all()) ;
        $post->save() ;

        return response()->json($post, 201);
    }

    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        if( $post)
            $post->delete();
        else
            return response()->json(error);
        return response()->json(null);

    }
}
