import { render } from 'react-dom';
import $ from 'jquery';
import SliderFrame from '../../components/slider/sliderFrameArrowOnBottom.jsx';
import SliderLinks from '../../components/slider/sliderLinks.jsx';
import WebPartFrame from '../../components/Common/webPartFrame.jsx';

function linksRender(config) {
    let data = [[{ 'itemhref': 'www.baidu.com', 'title': 'LMS' },
    { 'itemhref': 'www.baidu.com', 'title': 'PRM' },
    { 'itemhref': 'www.baidu.com', 'title': 'IRMS' },
    { 'itemhref': 'www.baidu.com', 'title': 'eForms' },
    { 'itemhref': 'www.baidu.com', 'title': 'I-innovate' },
    { 'itemhref': 'www.baidu.com', 'title': 'Webmail' },
    { 'itemhref': 'www.baidu.com', 'title': 'App' },
    { 'itemhref': 'www.baidu.com', 'title': 'App' },
    { 'itemhref': 'www.baidu.com', 'title': 'App' }],
    [{ 'itemhref': 'www.baidu.com', 'title': 'LMS' },
    { 'itemhref': 'www.baidu.com', 'title': 'PRM' },
    { 'itemhref': 'www.baidu.com', 'title': 'IRMS' },
    { 'itemhref': 'www.baidu.com', 'title': 'eForms' },
    { 'itemhref': 'www.baidu.com', 'title': 'I-innovate' },
    { 'itemhref': 'www.baidu.com', 'title': 'Webmail' },
    { 'itemhref': 'www.baidu.com', 'title': 'App' },
    { 'itemhref': 'www.baidu.com', 'title': 'App' },
    { 'itemhref': 'www.baidu.com', 'title': 'App' }],
    [{ 'itemhref': 'www.baidu.com', 'title': 'LMS' }]];
    let param = { url: '', speed: 1, delay: 2, pause: true, autoplay: false, dots: true, arrows: true, listurl: '', webparttitle: '' };

    function renderUI(data, param) {
        var itemNodes = [];
        let maxCount = 9;
        for (let i = 0, len = data.length; i < len; i += maxCount) {
            itemNodes.push(data.slice(i, i + maxCount));
        }
        if (document.getElementById('acclinks')) {
            render(
                <WebPartFrame
                    title={param.webparttitle}
                    hasMore={false}
                    link={param.listurl}
                    hasTopLine={false}
                    >

                    <SliderFrame
                        itemCount={itemNodes.length}
                        speed={1.2}
                        delay={2.1}
                        pause={true}
                        autoplay={false}
                        dots={true}
                        arrows={true}
                        >
                        <SliderLinks items={itemNodes} />
                    </SliderFrame>
                </WebPartFrame>,
                document.getElementById('acclinks')
            );
        }
    }

    function loadData(param) {
        $.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            dataType: "json",
            data: {},
            config: param,
            async: false,
            success: function (dataInput) {
                var data = new Array();
                for (var i = 0, l = dataInput.d.results.length; i < l; i++) {
                    data.push({
                        'src': dataInput.d.results[i].ACSUrl ? dataInput.d.results[i].ACSUrl.Url : '',
                        'itemhref': this.config.listurl + '/DispForm.aspx?ID=' + dataInput.d.results[i].ID,
                        'title': dataInput.d.results[i].Title
                    })
                }
                renderUI(data, this.config);
            },
            error: function (data) {
            }
        });
    }

    if (config && !config.debug) {
        param.speed = config.speed ? config.speed : 1;
        param.delay = config.delay ? config.delay : 1;
        param.pause = config.pause ? config.pause : true;
        param.autoplay = config.autoplay ? config.autoplay : false;
        param.dots = config.dots ? config.dots : true;
        param.arrows = config.arrows ? config.arrows : true;
        param.listurl = config.listurl ? config.listurl : '';
        param.webparttitle = config.webparttitle ? config.webparttitle : '';
        loadData(param);
    }
    else {
        renderUI(data, param);
    }




}

global.linksRender = linksRender;