import React, { Component } from "react";
import { Input, Button } from 'antd';
import UUID from 'uuid';

import { observer, inject } from 'mobx-react';

@inject('store') //单页面 store依次传入各个组件
@observer
class CommentInput extends Component {
    constructor(props) {
        super(props);
    }

    doSubmitEvent = () => {
        const { store } = this.props;
        // console.log(this.textInput)
        let v = this.refs.myInput.input.value;
        let tempBean = {
            id:UUID.v4()
            ,content:v
        };
        store.addComment(tempBean);
    }

    doChangeTitleEvent = () => {
        const { store } = this.props;
        store.changeTitle("222");
    }

    render() {
        const { store } = this.props;
        return (
            <div>
                <div className="box-item">{store.title}</div>
                <div className="box-item">
                    <table>
                        <tbody>
                            <tr>
                                <td style={{ paddingRight: '20px' }}>代办内容</td>
                                <td style={{ paddingRight: '20px' }}>
                                    <Input placeholder="请输入代办内容" ref="myInput" />
                                </td>
                                <td style={{ paddingRight: '20px' }}><Button type="primary" onClick={this.doSubmitEvent.bind(this)}>提交</Button></td>
                                <td><Button type="primary" onClick={this.doChangeTitleEvent.bind(this)}>更改标题</Button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CommentInput;