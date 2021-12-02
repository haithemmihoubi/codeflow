@extends('admin.index')
@section('main')
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
                    <a href="{{ route('admin.categories.show', ['category' => $category->id]);}}" class="btn btn-primary"><i class="fas fa-eye"></i></a>
                    <form action="{{ url('categories/'.$category->id) }}" method="POST">
                        {{ csrf_field() }}
                        {{ method_field('PUT') }}
            
                        <button type="submit" class="btn btn-secondary">
                            <i class="fas fa-edit"></i>
                        </button>
                    </form>
                    <form action="{{ url('categories/'.$category->id) }}" method="POST">
                        {{ csrf_field() }}
                        {{ method_field('DELETE') }}
            
                        <button type="submit" class="btn btn-danger">
                            <i class="fa fa-trash"></i>
                        </button>
                    </form>
                </td>
            </tr>    
            @endforeach
            </tbody>
        </table>
    </div>
</div>    
@endsection
