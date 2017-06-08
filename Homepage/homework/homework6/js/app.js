/*COMP1950
Instructor: Jeffrey Park
DTC Thur 6-9PM

Created by:
Sam Chung*/

$(document).ready(function() {
    $('#pagepiling').pagepiling({
        // Pass in an options object when initializing
        menu: "#menu",
        anchors: ['homepage', 'customize-page', 'rotate-page', 'text-page'],
        sectionsColor: ['#a19cfc', '#4BBFC3', '#7BAABE',  'whitesmoke'],
        verticalCentered: true
    });
})