import React, { Component } from 'react';
import { Provider } from 'mobx-react'; //单页面 store依次传入各个组件
import { LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import CommentInput from "@/components/CommentInput";
import CommentList from "@/components/CommentList";
import "@/app.less";

class App extends Component {
    render(){
        return (
            <Provider {...this.props}>
                <LocaleProvider locale={zhCN}>
                    <div className="wrap">
                        <CommentInput/>
                        <CommentList/>
                    </div>
                </LocaleProvider>
            </Provider>
        );
    }
} 
export default App;
