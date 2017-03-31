(function($){
    $.fn.autoCheck =  function() {
        var el = this
        
        return new CheckValidation(el);
        
    };

    function CheckValidation (el) {
      
        this.el = el;
        
        //默认设置
        this.defaultOps = {
            type: null,
            name: null,
            success: null,
            error: null
        }
    
    }

    CheckValidation.prototype = {
        checkVal: function(config) {
       
        var self = this;
        this.config = $.extend(this.defaultOps, config);  //继承自定义设置
        this.judgeInput(this.config,this.el) //判断类型
         
        },
        judgeInput: function(config,el) {
       
        switch(config.type) {
            case "user":
            this.rex = new RegExp("^[a-zA-Z0-9_]{3,10}$");
            break;
            case "password":
            this.rex = new RegExp("^(?![0-9]+$)[0-9A-Za-z]{8,16}$");
            break;
            case "phone":
            this.rex = new RegExp("^1[0-9]{10}$");
            break;
            case "userID":
            this.rex = new RegExp("^[0-9]{18}$");
            break;
            case "email":
            this.rex = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
            break;
        }
       
        this.autoCheckVal(config,el)    //添加事件绑定
    },

        autoCheckVal: function(config, el) {
          
            var self = this;
            $(el).on('input', function() {
                var val = $(this).val();
                
                if (self.rex.test(val)) {
                    $(this).attr('pass', true);
                    //debugger
                    self.config.success && self.config.success();
                    $(this).parents().find('form').trigger('change');
                } else {
                    $(this).attr('pass', false);
                    self.config.error && self.config.error();
                    $(this).parents().find('form').trigger('change');
                }
            }).on('blur', function() {
                var val = $(this).val();
                if (self.rex.test(val)) {
                    var message = "输入"+config.name+"正确";
                    
                    $(this).parents().find('form').trigger('change');
                } else {
                    var message = "输入"+config.name+"错误";
                    self.createWarningTip(message);
                    $(this).parents().find('form').trigger('change');
                }
            }).on('focus', function() {
                
                $(this).parent().find(".warning").remove();
                $(this).parents().find('form').trigger('change');
            })
        },
        //创建错误提示
        createWarningTip: function(info) {      
            this.warningMessage = $('<span class="warning">'+info+'</span>');
            $(this.el).parent().append(this.warningMessage);
        },
        

}


    //判断表单所有输入框是否正确
    $.fn.checkAllInput = function(config) {
        
        var inputList = $(this).find('input');
        var inputArr = Array.prototype.slice.apply(inputList)
       
        return $(this).on('change', function(){
          var pass = inputArr.every(function(item, index){
                return $(item).attr('pass') === "true"
            })
            
            $(this).attr('pass', pass)

            if (pass) {
                $(config.targetButton).removeAttr("disabled");
            } else {
                $(config.targetButton).attr("disabled", "disabled");
            }
        })

    }

}(jQuery))


