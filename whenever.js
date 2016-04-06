Whenever = function(fun){
    this.resolve = [];
    this.resolveOnce = [];
    this.reject = [];
    this.rejectOnce = [];
    this.status = null;
    this.judge = fun;
    return this;
};
Whenever.prototype = {
  yes: function (fun,once) {
        if (typeof fun == 'function') {
            if (this.status == 'resolve') {
                fun();
                if( once == true ){
                    return;
                }
            } else {
                if( once == true ) {
                    this.resolveOnce.push(fun);
                } else {
                    this.resolve.push(fun);
                }
            }
        } else {
            throw 'Param for Whenever.yes is not a function';
        }
        return this;
    },
    no: function (fun,once) {
        if (typeof fun == 'function') {
            if (this.status == 'reject') {
                fun();
                if( once == true ){
                    return;
                }
            } else {
                if( once == true ){
                    this.rejectOnce.push(fun);
                } else {
                    this.reject.push(fun);
                }
            }
        } else {
            throw 'Param for Whenever.no is not a function';
        }
        return this;
    },
    change: function(value){
        if( this.judge(value) ){
            this.status = 'resolve';
        } else {
            this.status = 'reject';
        }
        this.handle();
    },
    handle: function() {
        var enumVar1,enumVar2;
        if( this.status == 'reject' ){
            enumVar1 = this.reject;
            enumVar2 = this.rejectOnce;
        } else {
            enumVar1 = this.resolve;
            enumVar2 = this.resolveOnce;
        }
        for( var x in enumVar1 ){
            if( enumVar1.hasOwnProperty(x) ){
                enumVar1[x]();
            }
        }
        for( x in enumVar2 ){
            if( enumVar2.hasOwnProperty(x) ){
                enumVar2[x]();
            }
        }
        enumVar2.length = 0;
    }
};
