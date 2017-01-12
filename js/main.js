var ViewModel = function(){
    this.catName = ko.observable('Becky');
    this.catClicks = ko.observable(0);
    this.catImage = ko.observable('img/cat.jpg');

    this.catClicksHeader = ko.computed(function(){
        return 'The number of clicks is: ' +  this.catClicks();
    }, this);

    this.onCatClick = function(){
        this.catClicks(this.catClicks() + 1);
    }
}

ko.applyBindings(new ViewModel());