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
        
        $validatedData = $request->validate($this->validatedRules());

        //Storing image
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

        Post::create([
            'title' =>  $request->title,
            "body" => $request->body,
            'image' => $image_full_name,
            "url"=> $request->url,
            "pdf"=> $pdf_full_name,
            "coupon"=> $request->coupon,
            "category_id"=> $request->category_id
        ]);

        return redirect()->route('admin.posts.index')->with('sucess', 'Post created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return view('admin.post.show', compact('post'));  
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        return view('admin.posts.edit', compact('post'));
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
        $request->validate($this->validatedRules());
        $post->update($request->all());

        return redirect()->route('admin.posts.index')->with('success', 'Post updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();

        return redirect()->route('admin.posts.index')->with('success', 'Post deleted successfully');
    }

    private function validatedRules(){
        return [
            'title' => 'required',
            "body" => 'required',
            //'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            //"url"=>'nullable|url',
            //"pdf"=>"nullable|mimes:svg,doc,docx,odt,pdf,tex,txt,wpd,tiff,tif,csv,psd,key,odp,pps,ppt,pptx,ods,xls,xlsm,xlsx",
            "coupon"=>"nullable",
            "category_id"=>"required"
        ];
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function validatePost(Post $post){
        $post->validated = true;
        $post->updated_at = now();
        $post->update();
        $posts = Post::all();
        return view('admin.post.index', compact('posts'))->with('success', 'Post '.$post->title.' approved');
    }
}
