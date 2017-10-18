/**
 * Created by liu on 16-11-4.
 */
$(document).ready(function () {
    var person;
    var no = 0;

    //var code = Base64.decode(get_list());

    var initialize = function () {
        person = __student_data;
        $("#list").html('');
        $("#display").html('');
        no = 0;
    };

    var draw = function () {
        if (person.length === 0) {
            alert('No people left!');
            return;
        }
        var rand = Math.random();
        var n = Math.floor(person.length * rand);
        var p = person[n];
        person.splice(n, 1);
        no++;
        console.log(p);
        $("#display").html(p.id + ' ' + p.class + ' ' + p.name);
        var html = [
            '<div class="row text-center">',
            '<div class="col-sm-2"><h5>', no, '</h5></div>',
            '<div class="col-sm-4"><h5>', p.id, '</h5></div>',
            '<div class="col-sm-2"><h5>', p.class, '</h5></div>',
            '<div class="col-sm-4"><h5>', p.name, '</h5></div>',
            '</div>'
        ].join('');
        $("#list").prepend(html);
        //console.log(person);
    };

    $("#button").click(function () {
        draw();
    });

    $("#reset").click(function () {
        initialize();
    });

    initialize();

});