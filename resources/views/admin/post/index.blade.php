@extends('admin.index')
@section('main')

<div class="card mb-4">
    <div class="card-header">
        <i class="fas fa-table me-1"></i>
        Posts to validate
        <a href="{{ route('admin.posts.create') }}" class="btn btn-outline-primary float-right"><i class="fas fa-user-plus"></i> Add Post</a>
    </div>
    <div class="card-body">
        <table id="datatablesSimple">
            <thead>
                <tr>
                    <th>Title</th>                    
                    <th>Category</th>
                    <th>Operations</th>    
                </tr>
            </thead>
            <tbody>
            @foreach ($posts as $post)
            <tr>
                <td>{{$post->title}}</td>
                <td>{{$post->category->name}}</td>
                <td>
                    <a href="{{ route('posts.show', ['post' => $post->id]);}}" class="btn btn-primary"><i class="fas fa-eye"></i></a>
                    <form action="{{ url('posts/'.$post->id) }}" method="POST">
                        {{ csrf_field() }}
                        {{ method_field('PUT') }}
            
                        <button type="submit" class="btn btn-secondary">
                            <i class="fas fa-edit"></i>
                        </button>
                    </form>
                    <form action="{{ url('posts/'.$post->id) }}" method="POST">
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
