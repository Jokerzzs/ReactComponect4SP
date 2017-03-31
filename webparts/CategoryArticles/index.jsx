import { render } from 'react-dom';
import $ from 'jquery';
import ArticlesSearchFrame from './articlesSearchFrame.jsx';
import CategoryArticles from './categoryArticles.jsx';
function categoryArticlesRender(config) {
    if (!config.data) {
        config.data = [{
            ItemUrl:"http://www.baidu.com",
            Title: 'Kevin',
            PicturePath: '../Style Library/Custom Style/AvePoint Articles/Img/image1.jpg',
            Headline: 'There are some items to show in this view. There are no items to show in this view.',
            Intro: "its security certificate is not trusted by your computer's operating system. This may be caused by a misconfiguration or an attacker intercepting your connection."
        },
        {
            ItemUrl:"http://www.baidu.com",
            PicturePath: '../Style Library/Custom Style/AvePoint Articles/Img/image1.jpg',
            Headline: 'There are some items to show in this view. There are no items to show in this view.',
            Time: "1/11/2017 10:39 AM",
            Like: 122,
            HasLiked: false,
            colleUrl:"http://www.baidu.com"
        },
        {
            ItemUrl:"http://www.baidu.com",
            Title: 'Tom',
            PicturePath: '../Style Library/Custom Style/AvePoint Articles/Img/image1.jpg',
            Headline: 'There are some items to show in this view. ',
            Intro: "its security certificate is not trusted by your computer's operating system.",
            colleUrl:"http://www.baidu.com"
        },
        {
            
            Title: 'Justin',
            PicturePath: '../Style Library/Custom Style/AvePoint Articles/Img/image1.jpg',
            Headline: 'Overview',
            Intro: "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React.Component is provided by React."
        }, {
            Title: 'Bill',
            PicturePath: '../Style Library/Custom Style/AvePoint Articles/Img/image1.jpg',
            Headline: 'Forbidden: Access is denied.',
            Intro: "You do not have permission to view this directory or page using the credentials that you supplied",
            colleUrl:"http://www.baidu.com"
        }, {
            Title: 'Jason',
            PicturePath: '../Style Library/Custom Style/AvePoint Articles/Img/image1.jpg',
            Headline: 'Hello WorldHello WorldHello WorldHello WorldHello WorldHello World.',
            Intro: "Hello WorldHello World.You do not have permission to view this directory or page using the credentials that you supplied"
        },
        {
            Title: 'Tom',
            PicturePath: '../Style Library/Custom Style/AvePoint Articles/Img/image1.jpg',
            Headline: 'There are some items to show in this view. ',
            Intro: "its security certificate is not trusted by your computer's operating system.",
            colleUrl:"http://www.baidu.com"
        },
        {
            Title: 'Justin',
            PicturePath: '../Style Library/Custom Style/AvePoint Articles/Img/image1.jpg',
            Headline: 'Overview',
            Intro: "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React.Component is provided by React."
        }, {
            Title: 'Bill',
            PicturePath: '../Style Library/Custom Style/AvePoint Articles/Img/image1.jpg',
            Headline: 'Forbidden: Access is denied.',
            Intro: "You do not have permission to view this directory or page using the credentials that you supplied"
        }, {
            Title: 'Jason',
            PicturePath: '../Style Library/Custom Style/AvePoint Articles/Img/image1.jpg',
            Headline: 'Hello WorldHello WorldHello WorldHello WorldHello WorldHello World.',
            Intro: "Hello WorldHello World.You do not have permission to view this directory or page using the credentials that you supplied"
        },
        {
            Title: 'Tom',
            PicturePath: '../Style Library/Custom Style/AvePoint Articles/Img/image1.jpg',
            Headline: 'There are some items to show in this view. ',
            Intro: "its security certificate is not trusted by your computer's operating system."
        },
        {
            Title: 'Justin',
            PicturePath: '../Style Library/Custom Style/AvePoint Articles/Img/image1.jpg',
            Headline: 'Overview',
            Intro: "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React.Component is provided by React."
        }, {
            Title: 'Bill',
            PicturePath: '../Style Library/Custom Style/AvePoint Articles/Img/image1.jpg',
            Headline: 'Forbidden: Access is denied.',
            Intro: "You do not have permission to view this directory or page using the credentials that you supplied"
        }, {
            Title: 'Jason',
            PicturePath: '../Style Library/Custom Style/AvePoint Articles/Img/image1.jpg',
            Headline: 'Hello WorldHello WorldHello WorldHello WorldHello WorldHello World.',
            Intro: "Hello WorldHello World.You do not have permission to view this directory or page using the credentials that you supplied"
        },
        {
            Title: 'Tom',
            PicturePath: '../Style Library/Custom Style/AvePoint Articles/Img/image1.jpg',
            Headline: 'There are some items to show in this view. ',
            Intro: "its security certificate is not trusted by your computer's operating system."
        },
        {
            Title: 'Justin',
            PicturePath: '../Style Library/Custom Style/AvePoint Articles/Img/image1.jpg',
            Headline: 'Overview',
            Intro: "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React.Component is provided by React."
        }, {
            Title: 'Bill',
            PicturePath: '../Style Library/Custom Style/AvePoint Articles/Img/image1.jpg',
            Headline: 'Forbidden: Access is denied.',
            Intro: "You do not have permission to view this directory or page using the credentials that you supplied"
        }, {
            Title: 'Jason',
            PicturePath: '../Style Library/Custom Style/AvePoint Articles/Img/image1.jpg',
            Headline: 'Hello WorldHello WorldHello WorldHello WorldHello WorldHello World.',
            Intro: "Hello WorldHello World.You do not have permission to view this directory or page using the credentials that you supplied"
        }];
        renderUI(config.data);
    }
    else{
        renderUI(config.data);
    }

    function renderUI(data) {
        if (document.getElementById('categoryArticles')) {
            render(
                <ArticlesSearchFrame config = {config} category={config.categoryType}>
                    <CategoryArticles data={data} aveCount={4} category={config.categoryType}></CategoryArticles>
                 </ArticlesSearchFrame>
                ,
                document.getElementById('categoryArticles')
            );
            //wordLimit('.acs-articleframe-headline',2);
        }
    }
}

global.categoryArticlesRender = categoryArticlesRender;

function wordLimit(query,rowCount){
     $(query).each(function () {
        var fontSize = parseInt($(this).css('font-size').replace('px',''));
        while ($(this).height() > fontSize * rowCount * 1.4) {
            $(this).text($(this).text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
        };
    });
}