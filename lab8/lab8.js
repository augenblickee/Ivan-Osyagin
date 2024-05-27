function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = 'Русская локаль: ' + today.toLocaleString('ru-RU');

    let out1 = document.getElementById('current-date1');
    let today1 = new Date();
    out1.innerHTML = 'Китайская локаль:' + today1.toLocaleString('zh-CN');

    let out2 = document.getElementById('current-date2');
    let today2 = new Date();
    out2.innerHTML = 'Арабская локаль: ' + today2.toLocaleString('ar');

    let out3= document.getElementById('current-date3');
    let today3 = new Date();
    out3.innerHTML = 'Тайская локаль: ' + today3.toLocaleString('th');

    let out4 = document.getElementById('current-date4');
    let today4 = new Date();
    out4.innerHTML = 'Египетская локаль: ' + today4.toLocaleString('ar-EG');
}