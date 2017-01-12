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
    var self = this;
    self.currentCat = ko.observable(new Cat());

    self.onCatClick = function(){
        self.currentCat().catClicks(self.currentCat().catClicks() + 1);

        /* Circles from start to end of levels and back to first level,
         * level increase every 10 clicks.
         */
        self.currentCat().catLevel(self.currentCat().levels[
            Math.floor(self.currentCat().catClicks()/10)
            % self.currentCat().levels.length]);
    }
}

ko.applyBindings(new ViewModel());