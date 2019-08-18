export default (param = {}, pandName) => {
    const { yzm, password,username,phone} = param;
    console.log(pandName)
    switch (pandName) {
        case 'zc': // 登录的时候
            // 密码
            if (username === '' || username.length<3) {
                return {
                    status: false,
                    msg: '您的用户名不正确'
                }
            }
            if (password === '' || password.length < 6) {
                return {
                    status: false,
                    msg: '您的密码不能为空,长度不小于6位'
                }
            }
            if (yzm === '' || yzm.length < 6) {
                return {
                    status: false,
                    msg: '您的验证码不能为空,长度不小于6位'
                }
            }
           
            
    }
    switch (pandName) {
        case 'dl': // 登录的时候
            // 密码
            if (phone === '' || phone.length < 11) {
                return {
                    status: false,
                    msg: '您的手机号不能为空,长度不小于11位'
                }
            }
            if (yzm === '' || yzm.length < 6) {
                return {
                    status: false,
                    msg: '您的验证码不能为空,长度不小于6位'
                }
            }
           
            
    }

            return {
                status: true,
                msg: `恭喜,${pandName === 'zc' ? '注册' : '登录'}成功!`
            }
}