import { observable, computed, action } from 'mobx';

class Store {
    @observable title = "todo List";
    @observable commentList = [{id:1,content:"123"}];

    //改变title的方法
    @action changeTitle(title){
        this.title = title
    }

    //改变title的方法
    @action addComment(comment){
        this.commentList.push(comment);
    }
}

export default Store;