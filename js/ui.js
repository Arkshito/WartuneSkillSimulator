define(['jquery', 'underscore'], function ($, _) {
    var supportedLang = [
        {
            key: 'ja-JP',
            text: 'Japanese'
        },
        {
            key: 'zh-TW',
            text: '正體中文'
        },
        {
            key: 'en-US',
            text: 'English'
        },
        {
            key: 'zh-CN',
            text: 'Chino'
        }
    ];
    var currentLang = '';
    var data = [];
    //navbar
    data["class"] = { "ja-JP": "", "zh-TW": "職業", "en-US": "Classes", "zh-CN": "Clase" };
    data["type-1"] = { "ja-JP": "", "zh-TW": "劍士系", "en-US": "Swordman", "zh-CN": "Guerrero" };
    data["type-2"] = { "ja-JP": "", "zh-TW": "魔法師系", "en-US": "Mage", "zh-CN": "Mago" };
    data["type-3"] = { "ja-JP": "", "zh-TW": "盜賊系", "en-US": "Thief", "zh-CN": "Ladrón" };
    data["type-4"] = { "ja-JP": "", "zh-TW": "弓箭手系", "en-US": "Archer", "zh-CN": "Arquero" };
    data["type-5"] = { "ja-JP": "", "zh-TW": "服事系", "en-US": "Acolyte", "zh-CN": "Acolito" };
    data["type-6"] = { "ja-JP": "", "zh-TW": "商人系", "en-US": "Merchant", "zh-CN": "Mercader" };

    data["being"] = { "ja-JP": "", "zh-TW": "生命體", "en-US": "Homunculus", "zh-CN": "Homunculo" };
    
    data["list"] = { "ja-JP": "図鑑", "zh-TW": "圖鑑", "en-US": "Encyclopedia", "zh-CN": "Enciclopedia" };
    data["search"] = { "ja-JP": "検索", "zh-TW": "搜索", "en-US": "Search", "zh-CN": "Buscar" };
    data["category"] = { "ja-JP": "", "zh-TW": "分類", "en-US": "Category", "zh-CN": "Categoría" };
    data["about"] = { "ja-JP": "", "zh-TW": "關於", "en-US": "About", "zh-CN": "Acerca de" };
    data["info"] = { "ja-JP": "お知らせ", "zh-TW": "通知", "en-US": "Notices", "zh-CN": "Noticias" };

    data["currentversion"] = { "ja-JP": "", "zh-TW": "當前版本：", "en-US": "Current Ver.:", "zh-CN": "Versión actual：" };
    data["officalsite"] = { "ja-JP": "", "zh-TW": "官網", "en-US": "Offical Site", "zh-CN": "Página oficial" };
    data["donate"] = { "ja-JP": "", "zh-TW": "送版主女裝", "en-US": "NGA RO", "zh-CN": "NGA RO" };

    data["ui"] = { "ja-JP": "", "zh-TW": "界面語言", "en-US": "UI", "zh-CN": "UI" };
    data["data"] = { "ja-JP": "", "zh-TW": "資料語言", "en-US": "Data", "zh-CN": "Data" };


    var getText = function (key) {
        if (!data[key]) {
            console.log("ui language data missing:" + key);
            return key;
        }
        return data[key][getLang()] || data[key]['en-US'];
    };
    var getLang = function () {
        if (!currentLang) {
            setLang();
        }
        return currentLang;
    };
    var setLang = function (lang) {
        lang = lang || localStorage["uilang"] || navigator.language || navigator.browserLanguage;
        if (_.any(supportedLang, function (o) { return o.key == lang }) == false) {
            lang = 'zh-CN';
        }
        currentLang = lang;
        localStorage["uilang"] = lang;
        $('#currentLang').text(_.find(supportedLang, function (o) {
            return o.key == lang;
        }).text);
    };
    return {
        supportedLang: supportedLang,
        getText: getText,
        getLang: getLang,
        setLang: setLang,
    };
});