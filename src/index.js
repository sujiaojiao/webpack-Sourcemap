
// var root = document.getElementById('root');
// // import './index.scss';
// root.innerHTML = ('<div >Helloworld</div>');
// console.log('nihoa fefwefsssssssfseef');


// css HotModuleReplacementPlugin
// import './style.css';
// var btn = document.createElement('button');
// btn.innerHTML = '新增';
// document.body.appendChild(btn);

// btn.onclick = function(){
// 	var div = document.createElement('div');
// 	div.innerHTML = 'item';
// 	document.body.appendChild(div);
// }


// js HotModuleReplacementPlugin
import counter from './counter.js'
import number from './number.js'
 counter();
 number();
 if(module.hot){//如果开启热更新
 	module.hot.accept('./number',()=>{
 		document.body.removeChild(document.getElementById('number'));
 		number();
 	})
 }