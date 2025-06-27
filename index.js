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