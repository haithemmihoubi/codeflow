@extends('admin.index')
@section('main')
    <fieldset>
        <form action="{{ route('admin.categories.store') }}" method="post">
        @csrf
        @include('admin.category.form')
        </form>
    </fieldset>
@endsection