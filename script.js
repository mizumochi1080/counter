$(function () {
    $("#minus").click(function () {
        let cnt = Number($("#cnt").text());
        if (cnt == 0) {
            $("#cnt").text(99);
        } else {
            $("#cnt").text(cnt - 1);
        }
    });
    $("#plus").click(function () {
        let cnt = Number($("#cnt").text());
        $("#cnt").text((cnt + 1) % 100);
    });
});
