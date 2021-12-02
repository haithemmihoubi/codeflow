<?php

namespace App\Http\Controllers\Admin;

use App\Models\Post;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.post.index', ['posts' => Post::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.post.create', ['categories' => Category::all()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $validatedData = $request->validate([
            'title' => 'required',
            "body" => 'required',
            //'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            //"url"=>'nullable|url',
            //"pdf"=>"nullable|mimes:svg,doc,docx,odt,pdf,tex,txt,wpd,tiff,tif,csv,psd,key,odp,pps,ppt,pptx,ods,xls,xlsm,xlsx",
            "coupon"=>"nullable",
            "category_id"=>"required"
        ]);

        if($request->hasFile('image'))
        {
            $image=$request->file("image") ;
            $image_new_name =rand().".".$image->getClientOriginalExtension();
            $image->move(public_path('uploads/images/'),$image_new_name);
            response()->json($image_new_name) ;
            $image_full_name = public_path('uploads/images/').$image_new_name;
        }else{
            return  "Probably invalid Image format";
        }
        //Storing PDF
        if($request->hasFile('pdf'))
        {
            $pdf=$request->file("pdf") ;
            $pdf_new_name = rand().".".$pdf->getClientOriginalExtension();
            $pdf->move(public_path('uploads/pdfs/'),$pdf_new_name);
            $pdf_full_name= public_path('uploads/pdfs/').$pdf_new_name;
        }else{
            return "Probably invalid PDF format";
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
        /*
        $customer = new Customer();
        $customer->firstname = $request->firstname;
        $customer->lastname = $request->lastname;
        $customer->phone = $request->phone;
        $customer->email = $request->email;
        $customer->address = $request->address;
        */
        return redirect()->route('admin.posts.show', ['post' => $post]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return view('admin.post.show', ['post' => Post::find($post->id)]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
    }
}
