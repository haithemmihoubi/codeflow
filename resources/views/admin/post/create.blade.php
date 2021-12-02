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
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <input type="text" name="title" id="title" class="form-control @error('title') is-invalid @enderror" placeholder="Title goes here" value="{{old('title')}}">
                </div>
            </div>  
            <div class="col">
                <div class="form-group">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label class="input-group-text" for="inputGroupSelect01">Categories</label>
                        </div>
                        <select class="custom-select" name="category_id" id="category_id">
                          <option selected>Choose...</option>
                            @foreach ($categories as $category)
                                <option value="{{$category->id}}">{{$category->name}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <input type="textarea" name="body" id="body" class="form-control @error('body') is-invalid @enderror" placeholder="body goes here" value="{{old('body')}}">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <input type="text" name="url" id="url" class="form-control @error('url') is-invalid @enderror" placeholder="Paste URL here" value="{{old('url')}}">
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <input type="text" name="coupon" id="coupon" class="form-control @error('coupon') is-invalid @enderror" placeholder="Paste COUPON here" value="{{old('coupon')}}">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text">Image</span>
                        </div>
                        <div class="custom-file">
                          <input type="file" class="custom-file-input @error('image') is-invalid @enderror" id="image" name="image" value="{{old('image')}}">
                          <label class="custom-file-label" for="inputGroupFile01">Choose...</label>
                        </div>
                      </div>
                  </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text">PDF</span>
                        </div>
                        <div class="custom-file">
                          <input type="file" class="custom-file-input @error('pdf') is-invalid @enderror" id="pdf" name="pdf" value="{{old('pdf')}}">
                          <label class="custom-file-label" for="pdf">Choose...</label>
                        </div>
                      </div>
                  </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col"><button type="submit" class="btn btn-block btn-outline-primary"><i class="fas fa-save"></i> Save</button></div>
            <div class="col"><button type="reset" class="btn btn-block btn-outline-secondary"><i class="fas fa-window-close"></i> Cancel</button></div>
        </div>
        </form>
    </fieldset>
    </div>
    <script src="{{asset('js/sweetalert2/sweetalert2.min.js')}}"></script>
    <script src="resources/js/sweetalert.js"></script>
  </div>
    
@endsection