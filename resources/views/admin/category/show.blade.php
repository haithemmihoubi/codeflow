@extends('admin.index')
@section('main')
<div class="card-header">
  <i class="fas fa-clipboard"></i> Category Details
</div>
<div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
      <div class="row">
        <div class="col">
          <h1 class="display-5 fw-bold">Category : {{$category->name}}</h1>
          <p class="col-md-8 fs-4"><h3>Category description</h3>{{$category->description}}</p>
          <p class="col-md-8 fs-4"><h3>Created at</h3>{{$category->created_at}}</p>
          <p class="col-md-8 fs-4"><h3>Updated at</h3>{{$category->updated_at}}</p></div>
      </div>
      <a href="{{ route('admin.categories.edit', ['category' => $category->id]) }}" class="btn btn-warning"><i class="far fa-check-circle"></i> Edit this category</a>
      <a href="#" 
      onClick="event.preventDefault();
      document.querySelector('#delete-category-form').submit()" class="btn btn-danger" title="Delete post {{ $category->name }}"><i class="far fa-times-circle"></i> Delete this category</a>
      <form action="{{route('admin.categories.destroy', ['category' => $category->id])}}" method="post" id="delete-category-form">@csrf @method('DELETE') </form>
    </div>
</div>
@endsection