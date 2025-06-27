axios({
    url: 'https://hmajax.itheima.net/api/settings',
    params: {
        creator: '飘'
    }
}).then(result => {
    const userObj = result.data.data
    // console.log(userObj)

    Object.keys(userObj).forEach(key => {
        if (key === 'avatar'){
            document.querySelector('.avatar-preview').src = userObj[key]
        }else if (key === 'gender'){
            const gRadioList = document.querySelectorAll('.gender')
            // console.log(gRadioList)
            const gNum = userObj[key]
            gRadioList[gNum].checked = true
        }else{
            document.querySelector(`.${key}`).value = userObj[key]
        }
    })
})



document.querySelector('.btn-change-avatar').addEventListener('click', function(){
    document.querySelector('.avatar-upload').click()
})
document.querySelector('.avatar-upload').addEventListener('change', e => {
    console.log(e.target.files[0])
    const fd = new FormData()
    fd.append('avatar', e.target.files[0])
    fd.append('creator', '飘')

    axios({
        url: 'https://hmajax.itheima.net/api/avatar',
        method: 'put',
        data: fd
    }).then(result => {
        console.log(result)
        const imgUrl = result.data.data.avatar
        document.querySelector('.avatar-preview').src = imgUrl
    })
})