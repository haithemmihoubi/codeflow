@extends('admin.index')
@section('main')
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
                    <a href="{{ route('admin.users.show', ['user' => $user->id]);}}" class="btn btn-primary"><i class="fas fa-eye"></i></a>
                    <form action="{{ url('users/'.$user->id) }}" method="POST">
                        {{ csrf_field() }}
                        {{ method_field('PUT') }}
            
                        <button type="submit" class="btn btn-secondary">
                            <i class="fas fa-edit"></i>
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
