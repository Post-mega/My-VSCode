/**
 * markdown 文本编辑器，编辑框和预览框同步滚动
 * 每 0.6 秒控制一次
 */
scroll = () => {
    let inputer;      // 输入框
    let preview;    // 预览框

    function scrollEvent() {
        inputer = $('#inputarea')[0];   // 使用 Jquery 获取编辑框 DOM
        preview = $('#preview')[0];     // 使用 Jquery 获取预览框 DOM

        if (inputer == undefined || preview == undefined) {
            return;
        }

        let mainFlag = false; // 抵消两个滚动事件之间互相触发
        let preFlag = false; // 如果两个 flag 都为 true，证明是反弹过来的事件引起的

        function scrolling(who) {
            // 两个窗口高度的比例系数
            let scale = (inputer.scrollHeight - inputer.clientHeight) / (preview.scrollHeight - preview.clientHeight);
            // 在预览页面控制编辑页面的滚动
            if (who == 'pre') {
                preFlag = true;
                if (mainFlag === true) { // 抵消两个滚动事件之间互相触发
                    mainFlag = false;
                    preFlag = false;
                    return;
                }
                inputer.scrollTop = Math.round(preview.scrollTop * scale);
                return;
            }
            // 在编辑页面控制预览页面的滚动
            if (who == 'main') {
                mainFlag = true;
                if (preFlag === true) { // 抵消两个滚动事件之间互相触发
                    mainFlag = false;
                    preFlag = false;
                    return;
                }
                preview.scrollTop = Math.round(inputer.scrollTop / scale);
                return;
            }
        }

        $('#inputarea').on('scroll', () => scrolling('main'));
        $('#preview').on('scroll', () => scrolling('pre'));
    }
    scrollEvent();
    window.setInterval(scrollEvent, 600);
}
