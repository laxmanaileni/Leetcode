var MyQueue = function() {
    this.stack1=[];
    this.stack2=[];
};

//Directly push the element into the stack1 array
MyQueue.prototype.push = function(x) {
    this.stack1.push(x)
};

MyQueue.prototype.pop = function() {
 //  return this.stack1.shift()
    
    while(this.stack1.length !==0){
        this.stack2.push(this.stack1.pop())
    }
    var pop=this.stack2.pop();
    
    while(this.stack2.length !==0){
        this.stack1.push(this.stack2.pop())
    }
    return pop;
};

MyQueue.prototype.peek = function() {
    while(this.stack1.length !==0){
        this.stack2.push(this.stack1.pop())
    }
    var pop=this.stack2.pop();
    this.stack2.push(pop)
    while(this.stack2.length !==0){
        this.stack1.push(this.stack2.pop())
    }
    return pop;
};


//Check whether the stack1 is empty or not
MyQueue.prototype.empty = function() {
    return this.stack1.length===0?true:false
};





