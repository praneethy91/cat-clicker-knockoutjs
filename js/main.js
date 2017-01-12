var Cat = function(){
    this.catName = ko.observable('Becky');
    this.catClicks = ko.observable(0);
    this.levels = ['newborn', 'infant', 'teen', 'young adult', 'mature adult', 'old', 'dead'];
    this.catLevel = ko.observable(this.levels[0]);
    this.catImage = ko.observable('img/cat.jpg');
    this.nickNames = ko.observable([
        'Jany',
        'Sammy',
        'Rocky',
        'Jess'
    ]);

    this.catClicksHeader = ko.computed(function(){
        return 'The number of clicks is: ' +  this.catClicks();
    }, this);
    this.levelHeader = ko.computed(function(){
        return 'Thie level of cat is: ' + this.catLevel();
    }, this);
};


var ViewModel = function(){

    this.currentCat = ko.observable(new Cat());

    this.onCatClick = function(){
        this.currentCat().catClicks(this.currentCat().catClicks() + 1);

        /* Circles from start to end of levels and back to first level,
         * level increase every 10 clicks.
         */
        this.currentCat().catLevel(this.currentCat().levels[
            Math.floor(this.currentCat().catClicks()/10)
            % this.currentCat().levels.length]);
    }
}

ko.applyBindings(new ViewModel());