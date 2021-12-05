<div class="form-group">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" class="form-control @error('name') is-invalid @enderror" placeholder="Name goes here" value="{{ $category->name ?? old('name')}}">
    
</div>
<div class="form-group">
    <label for="description">Description</label>
    <input type="textarea" name="description" id="description" class="form-control @error('description') is-invalid @enderror" placeholder="Description goes here" value="{{ $category->description ?? old('description')}}">
    
</div>
<div class="row">
    <div class="col"><button type="submit" class="btn btn-block btn-outline-primary"><i class="fas fa-save"></i> Save</button></div>
    <div class="col"><button type="reset" class="btn btn-block btn-outline-secondary"><i class="fas fa-window-close"></i> Cancel</button></div>
</div>