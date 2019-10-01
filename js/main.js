// event handler when clicking on the drop-down list
function DropDown(elem) {
    this.dd = elem;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        let obj = this;
        // add/remove class 'active'
        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });
        // write data
        obj.opts.on('click',function(){
            let opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
}

$(function() {

    let dd1 = new DropDown( $('#dd1') );
    let dd2 = new DropDown( $('#dd2') );
    // removes a class when clicked outside the list
    $(document).click(function() {
        $('.dropdownList').removeClass('active');
    });

});

// slider

$('.slider_box').slick({
    autoplay:true,
    autoplaySpeed:2000,
    dots:true,
    arrows:false,
    slidesToShow:3,
    variableWidth: true,
});       


$('.carousel').slick({
    autoplay:true,
    autoplaySpeed:2000,
    slidesToShow:3,
    variableWidth: true,
}); 