# jQuery验证表单插件

支持用户名，密码，手机，身份证，邮箱验证（没有的可以在代码加）

```html
 <body>
      <form id="userForm">
          <div>
              <label for="user">用户名：</label>
              <input type="text" id="user" pass="false">
          </div>
          <div>
              <label for="password">密码：</label>
              <input type="password" id="password" pass="false">
          </div>
          <div>
            <label for="phone">手机号码：</label>
            <input type="text" id="phone" pass="false">
          </div>
          <div>
            <label for="userID">身份证</label>
            <input type="text" id="userID" pass="false">
          </div>
          <div>
            <label for="email">邮箱</label>
            <input type="text" id="email" pass="false">
          </div>
          
          <div id="submit-wrap">
              <input type="submit" value="提交" id="submit" pass="true" disabled>
          </div>
          
      </form>
</body>
```

```javascript

    //用户名验证
    $("#user").autoCheck().checkVal({
        type: "user",   //表单类型
        name: "用户名",    //提示内容
        success: function() {       //  输入成功后回调函数
             console.log('correct');
        }, 
        error: function() {     //输入失败后回调函数
             console.log('error')
        }    
    })

    //密码验证
    $("#password").autoCheck().checkVal({
        type: "password",
        name: "密码",
        success: function() {},
        error: function() {}
    })

    //手机验证
    $("#phone").autoCheck().checkVal({
        type: "phone",
        name: "手机",
        success: function() {
            console.log('correct');
        },
        error: function() {
            console.log('error')
        }
    })

    //身份证验证
    $("#userID").autoCheck().checkVal({
        type: "userID",
        name: "身份证",
        success: function() {},
        error: function() {}
    })

    //邮箱验证
    $("#email").autoCheck().checkVal({
        type: "email",
        name: "邮箱",
        success: function() {},
        error: function() {}
    })
    
    //指定表单检验
    $("#userForm").checkAllInput({
        targetButton:"#submit"
    });
```

* api


```javascript
//表单输入框设置

/*
* @param {obj} [config] [警告信息]
*
* - type {string} [表单类型]
* - name {string} [表单名称]
* - success {function} [输入成功回调函数]
* - error {function} [输入失败回调函数]
*/

$().autoCheck().checkBal(config)
```
```javascript
//整个表单验证

/*
* @param {obj} [config] [警告信息]
*
* - targetButton {string} [设置提交按钮状态]
*
*/

$().checkAllInput(config)
```