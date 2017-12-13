    (function (d,f,a) {
        // Your settings here
        var o = {maxLinks: 4, searchElements: ['div', 'h'], linkClass: 'link-to-mdn', extraLinks: {'keywordx': 'http://example.com'}};

        var s=d.createElement("script");s.type="text/javascript";if(s.f)
        {s.a=function(){if(s.f=="loaded"||s.f=="complete")
        {s.a=null;PromoteMDN(o)}}}else{s.onload=function()
        {PromoteMDN(o)}}s.src="https://raw.githubusercontent.com/riverspirit/promote-mdn-script/master/promote-mdn.js";
        d.getElementsByTagName("head")[0].appendChild(s)
    })(document,'readyState','onreadystatechange');