import React, { Component } from "react";
import { observer, inject } from 'mobx-react';

@inject('store') //单页面 store依次传入各个组件
@observer
class CommentList extends Component {
    render() {
        const { store } = this.props;
        return (
            <div className="box-item">
                <ul className="todo-list">
                    {store.commentList.map((comment) =>
                        <li className="todo-item" key={comment.id}>
                            {comment.content}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default CommentList;