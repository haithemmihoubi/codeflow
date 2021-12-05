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
<div class="container">
    <div class="card mb-4 mt-5">
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
                        <th>Approved</th>
                        <th>Operations</th>    
                    </tr>
                </thead>
                <tbody>
                @foreach ($posts as $post)
                <tr>
                    <td>{{$post->title}}</td>
                    <td>{{$post->category->name}}</td>
                    <td>
                        @if ($post->validated)
                            Yes
                        @else
                            No
                        @endif
                    </td>
                    <td>
                        <a href="{{ route('admin.posts.show', ['post' => $post->id]);}}" title="Show post {{ $post->title }}" class="btn btn-outline-secondary"><i class="fas fa-eye"></i></a>
                        <a href="#" 
                        onClick="event.preventDefault();
                        document.querySelector('#delete-post-form').submit()" class="btn btn-outline-danger" title="Delete post {{ $post->title }}"><i class="far fa-times-circle"></i></a>
                        <a href="{{route('admin.posts.validatePost', ['post' => $post->id])}}" class="btn btn-outline-success"><i class="far fa-check-circle"></i> Approve this post</a>
                        <form action="{{route('admin.posts.destroy', ['post' => $post->id])}}" method="post" id="delete-post-form">@csrf @method('DELETE') </form>
                    </td>
                </tr>    
                @endforeach
                </tbody>
            </table>
        </div>
</div>    
</div>

@endsection
