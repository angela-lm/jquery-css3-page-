
var way = 'scale';
$('.login').on('click',function(){
    if($('.bg').length == 0){
        init(renderContent(way));
    }else{
        showPage();
    }
    $('.close-btn').on('click',function(){
        hidePage();
    })
    $('.user').on('click',function(){
        if(way == 'scale'){
            way = 'user';
            $('.title').text('用户名密码登录');
            $(this).text('扫码登录');
        }else{
            way = 'scale';
            $('.title').text('扫码登录');
            $(this).text('用户名登录');
        }
        var content = renderContent(way);
        renderLogin(content);
    })
})
function init(content){
    var str = '';
    str = `
            <div class="bg">
                <div class="content">
                    <div class="hover-move"></div>
                    <div class="header">
                        <div class="logo"></div>
                        <div class="title">扫码登录</div>
                        <div class="close-btn"></div>
                    </div>
                    <div class="login-content">
                    ${content}
                    </div>
                    <div class="login-footer">
                        <div class="login-way">
                            <a href="javascript:void(0)" class='user'>用户名登录</a>
                            <span class="login-qq"></span>
                            <span class="login-wb"></span>
                        </div>
                        <div class="register">
                            <a href="#">立即注册</a>
                        </div>
                    </div>
                </div>
            </div>`;
    $('.login-wrapper').html(str);
}
function renderContent(way){
    var content = '';
    if(way == 'scale'){
        content = `
                <div class="scale">
                    <img src="image/qrcode.png" alt="二维码"/>
                </div>
                <div class="scale-des">
                    请使用
                    <a href="#" class="baidulink">百度APP</a>
                    扫码登录
                </div>
                <div class="scale-ad">
                    <span class="safe">安全</span>
                    <span class="eff">搞笑</span>
                    <span class="convi">便捷</span>
                </div>
                `;
    }else{
        content = `
            <div class="input-wrapper">        
                <input type="text" class="username" placeholder="手机/邮箱/用户名"/>
                <input type="password" class="password" placeholder="密码">
                <input type="checkbox" id="next"/><label for="next" class="login-auto">下次自动登录</label>
                <input type="button" name="登录" value="登录" class="login-btn"/>
            </div>
            <div class="another">
                <a href="#">忘记密码</a>
                <a href="#">短信快捷登录</a>
            </div>
        `;
    }
    return content;
}
function hidePage(){
    $('.bg').css('display','none');
}
function showPage(){
    $('.bg').css('display','block');
}
function renderLogin(content){
    $('.login-content').html(content);
}

//  待补充
$('.hover-move').on('mousedown',function(e){
    console.log(e);
    // $('.content').
})