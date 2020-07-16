function Stack(){
    var items = [];
    // 
    this.push = function(item){ // 压栈
        items.push(item)
    }
    // pop
    this.pop = function(){
        return items.pop()
    }
    // 返回栈顶元素
    this.top = function(){
        return items[items.length-1]
    }
    this.isEmpty = function(){
        return items.length == 0
    }
    this.size = function(){
        return items.length
    }
    this.clear = function(){
        items = []
    }
}

exports.Stack = Stack