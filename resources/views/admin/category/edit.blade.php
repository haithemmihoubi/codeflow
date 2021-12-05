@extends('admin.index')
@section('main')
    <fieldset>
        <form action="{{ route('admin.categories.update', ['category' => $category->id]) }}" method="post">
        @csrf
        @method('PUT')
        @include('admin.category.form')
        </form>
    </fieldset>
@endsection