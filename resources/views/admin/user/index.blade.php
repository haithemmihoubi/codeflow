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
        List of users
    </div>
    <div class="card-body">
        <table id="datatablesSimple">
            <thead>
                <tr>
                    <th>Name</th>                    
                    <th>Email</th>
                    <th>Role</th>   
                    <th>Operations</th>    
                </tr>
            </thead>
            <tbody>
            @foreach ($users as $user)
            <tr>
                <td>{{$user->name}}</td>
                <td>{{$user->email}}</td>
                <td>{{$user->role}}</td>
                <td>
                    <a href="{{ route('admin.users.show', ['user' => $user->id]);}}" class="btn btn-outline-secondary"><i class="fas fa-eye"></i></a>
                    <a href="{{route('admin.users.promoteToAdmin', ['user' => $user->id])}}" class="btn btn-outline-success"><i class="fas fa-user-shield"></i> Promote to admin</a>
                </td>
            </tr>    
            @endforeach
            </tbody>
        </table>
    </div>
</div>    
@endsection
