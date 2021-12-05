@extends('admin.index')
@section('main')
<link rel="stylesheet" href="{{asset('css/sweetalert2/sweetalert2.min.css')}}">
<div class="card">
    <div class="card-header">
        <h5>Create a super post !</h5>
        <a href="#" onclick="deleteConfirm('delele-product-form-39')">Delete</a>
    </div>
    <div class="card-body">
      
      <fieldset>
        <form action="{{ route('admin.posts.store') }}" method="post" enctype="multipart/form-data">
        @csrf
        @include('admin.post.form')
        </form>
    </fieldset>
    </div>
    <script src="{{asset('js/sweetalert2/sweetalert2.min.js')}}"></script>
    <script src="resources/js/sweetalert.js"></script>
  </div>
    
@endsection