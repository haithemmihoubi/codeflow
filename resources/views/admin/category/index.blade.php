@extends('admin.index')
@section('main')
@if ($message = Session::get('success'))
    <div class="alert alert-success alert-dismissible fade show mt-5" role="alert">
        <strong>{{ $message }}</strong> 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
@endif
<div class="card mb-4">
    <div class="card-header">
        <i class="fas fa-table me-1"></i>
        List of categories
        <a href="{{ route('admin.categories.create') }}" class="btn btn-outline-primary float-right"><i class="fas fa-user-plus"></i> Add Category</a>
    </div>
    <div class="card-body">
        <table id="datatablesSimple">
            <thead>
                <tr>
                    <th>Name</th>                    
                    <th>Description</th>
                    <th>Operations</th>    
                </tr>
            </thead>
            <tbody>
            @foreach ($categories as $category)
            <tr>
                <td>{{$category->name}}</td>
                <td>{{$category->description}}</td>
                <td>
                    <a href="{{ route('admin.categories.show', ['category' => $category->id]);}}" class="btn btn-outline-secondary"><i class="fas fa-eye"></i></a>
                    <a href="{{ route('admin.categories.edit', ['category' => $category->id])}}" title="Edit category {{ $category->name }}" class="btn btn-outline-warning"><i class="fas fa-edit"></i></a>
                    <a href="#" 
                    onClick="event.preventDefault();
                    document.querySelector('#delete-category-form').submit()" class="btn btn-outline-danger" title="Delete category {{ $category->name }}"><i class="far fa-times-circle"></i> Delete this category</a>
                    <form action="{{route('admin.categories.destroy', ['category' => $category->id])}}" method="post" id="delete-category-form">@csrf @method('DELETE') </form>
                </td>
            </tr>    
            @endforeach
            </tbody>
        </table>
    </div>
</div>    
@endsection
