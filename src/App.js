// 引入组件模块
import React ,{Component} from 'react';
function App() {
  return <div>
    {/* 函数式组件调用,首字母必须大写 */}
    <Supersay></Supersay>
  </div>
}

export default App;
// 函数式组件,首字母必须大写
// function Supersay(){
//   return (
//     <h2>我一脸懵啊</h2>
//   )
// }

// 类组件
class  Supersay extends Component{
  // 状态
  state={
    name:"小健"
  }
  handleClick=()=>{
   this.setState({
     name:"小杨"
   })
  }
  render(){
    return(
      <div>类组件
        <p onClick={this.handleClick}>{this.state.name}</p>
      </div>
    )
  }
}