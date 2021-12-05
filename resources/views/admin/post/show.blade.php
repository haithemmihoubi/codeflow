@extends('admin.index')
@section('main')
  <div class="jumbotron m-5">
    <h1 class="display-5 fw-bold">{{$post->title}}</h1>
    <div class="row">
      <div class="col" width="50%">
        <p class="col-md-8 fs-4"><h3>Category</h3>{{$post->category->name}}</p>
        <p class="col-md-8 fs-4"><h3>Body</h3>{{$post->body}}</p>
        <p class="col-md-8 fs-4"><h3>PDF</h3>{{$post->pdf}}</p>
        <p class="col-md-8 fs-4"><h3>URL</h3>{{$post->url}}</p>
        <p class="col-md-8 fs-4"><h3>COUPON</h3>{{$post->coupon}}</p>
        <div class="row">
          <div class="col"><p class="col-md-8 fs-4"><h3>Created at</h3>{{$post->created_at}}</p></div>
          <div class="col"><p class="col-md-8 fs-4"><h3>Updated at</h3>{{$post->updated_at}}</p></div></div>
        </div>
      </div>
      <div class="col">
        @if (empty($post->image))
            No images
        @else
        <img src="{{ asset('images/'.$post->image)}}" alt="">
        @endif
      </div>
    </div>
    <hr class="my-4">
    <p class="lead">
      <a href="#" 
      onClick="event.preventDefault();
      document.querySelector('#delete-post-form').submit()" class="btn btn-outline-danger" title="Delete post {{ $post->title }}"><i class="far fa-times-circle"></i> Delete this post </a>
      <a href="{{route('admin.posts.validatePost', ['post' => $post->id])}}" class="btn btn-outline-success"><i class="far fa-check-circle"></i> Approve this post</a>
      <form action="{{route('admin.posts.destroy', ['post' => $post->id])}}" method="post" id="delete-post-form">@csrf @method('DELETE') </form>
    </p>
  </div>
@endsection