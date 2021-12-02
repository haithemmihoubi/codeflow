@extends('admin.index')
@section('main')
<div class="card-header">
    <i class="fas fa-user-tag"></i>
    Post Detail
</div>
<div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">{{$post->title}}</h1>
      <p class="col-md-8 fs-4"><h3>Category</h3>{{$post->category->name}}</p>
      <p class="col-md-8 fs-4"><h3>Body</h3>{{$post->body}}</p>
      <p class="col-md-8 fs-4"><h3>PDF</h3>{{$post->pdf}}</p>
      <p class="col-md-8 fs-4"><h3>URL</h3>{{$post->url}}</p>
      <p class="col-md-8 fs-4"><h3>COUPON</h3>{{$post->coupon}}</p>
      <p class="col-md-8 fs-4"><h3>Created at</h3>{{$post->created_at}}</p>
      <p class="col-md-8 fs-4"><h3>Updated at</h3>{{$post->updated_at}}</p>
      <button class="btn btn-primary btn-lg" type="button">Example button</button>
    </div>
  </div>
@endsection