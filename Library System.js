class LibraryItem {
constructor(_itemId , _name , _status ){
    this._itemId=_itemId;
    this._name=_name;
    this._status=_status;
}

get name(){
    if(this._name)return this._name;
    return 'missing name!';


}

set name(newName){
    if(typeof newName === 'string')
   { this._name=newName;}
    else{
        this._name='';
    }

}
get status(){
    if(this._status)return this._status;
    return 'missing value!';


}


set status(changeStatus){
    if(typeof changeStatus === 'string')
   { this._status=changeStatus;}
    else{
        this._status='available';
    }

}

toggleStatus(){
    if(this._status==='available'){
        this._status='not available'
    }
    else{
        this._status='available';
    }
}

get itemId(){
    if(this._itemId)return this._itemId;
    return 'missing item id!';
}

set itemId(newItemId){
    if(typeof newItemId === 'string'){
        this._itemId=newItemId;
    }
    else{
        this._itemId='00000000';

    }
}



}

class Book extends LibraryItem{
   static _count = 0;
   static _allGenres = [];

constructor(_itemId , _name , _status , _genre , _author ){
super(_itemId , _name , _status);
this._genre=_genre;
this._author=_author;
Book._count++;


}



get genre(){
if(this._genre){
    return this._genre;
}
else{
    return 'missing value';
}
}

get author(){
    if(this._author){
    return this._author;

}

else{
    return 'missing value';
}
}
set author(authorName){
    if(typeof authorName==='string'){
        this._author=authorName;
    }
    else this._author='unknown';

}

set genre(genreName){
    if(typeof genreName==='string'){
        this._genre=genreName;
        Book._allGenres.push(genreName);
    }
    else this._genre='unknown';

}

static getNumberOfBooks(){
    return this._count;

}
static getAllGenres(){
    return Book._allGenres;

}
static checkGenre(genreName){
    if(typeof genreName==='string'){
       return (Book._allGenres.includes(genreName));
    }
    return false;

}

}