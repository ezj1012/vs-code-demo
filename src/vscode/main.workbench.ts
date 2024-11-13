// console.log('asdasdasdsasdasd')
// try {
//     const a = await fetch("http://192.168.1.186:10010/http/rest")
//     console.log(a)
// } catch (error) {
//     console.log(error)
// }
// console.log('asdasdasdsasdasb')


import { IEditorService, StandaloneServices, createInstance } from 'vscode/services'
// 到这一行已经可以看到一个框架了.
// 但是很多功能是缺失的. 例如代码提示.
import { clearStorage, remoteAuthority } from './setup.workbench'
import { CustomEditorInput } from './features/customView.workbench'
// 
import './main.common'
