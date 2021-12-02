@extends('admin.post.create')
@section('list')
<label for="categories">Categories</label>
<select name="category_id" id="category_id">
    @foreach ($categories as $category)
    <option value="{{$category->id}}">{{$category->name}}</option>
    @endforeach
</select>    
@endsection
