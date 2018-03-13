function FindProxyForURL(url, host)
{
    //şÚĂűľĽ 
    if (shExpMatch(host, "114.*") ||
        shExpMatch(host, "*.2345.com") ||
        shExpMatch(host, "*.hao123.com") ||
        shExpMatch(host, "*.so.com") ||
        shExpMatch(host, "*.duba.com") ||
        shExpMatch(host, "*.qq.com") ||
        shExpMatch(host, "game.*") ||
        shExpMatch(host, "play.*") ||
        shExpMatch(host, "lol.*") ||
        shExpMatch(host, "shExpMatch(host, "lol.*") ||") ||
        shExpMatch(host, "*.4399.com") ||
        shExpMatch(host, "*.7k7k.com") ||
        shExpMatch(host, "123.sogou.com") ||
        shExpMatch(host, "*.17173.com") ||
        shExpMatch(host, "*.duowan.com") ||
        shExpMatch(host, "xiaoyouxi.360.cn") ||
        shExpMatch(host, "wanwan.sina.com.cn") ||
        shExpMatch(host, "*.pcgames.com.cn") ||
        shExpMatch(host, "*.17yy.com") ||
        shExpMatch(host, "*.doyo.cn") ||
        shExpMatch(host, "*.2144.cn") ||
        shExpMatch(host, "*.3199.cn") ||
        shExpMatch(host, "*.9669.cn") ||
        shExpMatch(host, "*.7399.com") ||
        shExpMatch(host, "*.2344.com") ||
        shExpMatch(url, "*/ad/*"))    
        return "PROXY 127.0.0.1:80";
    else
        return "DIRECT";
}
