import { createStore } from 'redux'

export default function () {

    // 第一步: 定义规则，即reducer    
    function counter(state = 0, action) {
        switch (action.type) {
            case('INCREMENT'):
                return state + 1
            case('DECREMENT'):
                return state - 1
            default:
                return state
        }
    }

    // 第二步: 根据规则生成store
    let store = createStore(counter)
                createStore

    // 第三步: 定义数据变化监听函数（即 state）订阅
    store.subscribe(() => {          
        console.log('current state', store.getState())
    })

    store.subscribe(() => {          
        console.log('func 2 -> current state', store.getState())
    })

    // 第四步: 触发变化
    store.dispatch({type: 'INCREMENT'})
    store.dispatch({type: 'INCREMENT'})     
    store.dispatch({type: 'DECREMENT'})
}