var catData = [{
        catName: 'Becky',
        catClicks: 0,
        catImage: 'img/cat.jpg',
        nickNames: [
            'Jany',
            'Sammy',
            'Rocky',
            'Jess'
        ]
    },
    {
        catName: 'Smarty',
        catClicks: 0,
        catImage: 'img/cat2.jpg',
        nickNames: [
            'July',
            'May',
            'April',
            'June'
        ]
    },
    {
        catName: 'Tardy',
        catClicks: 0,
        catImage: 'img/cat3.jpg',
        nickNames: [
            'Sleepy',
            'Bored',
            'zzzzz',
            'lethargic'
        ]
}];

var Cat = function(data){
    this.catName = ko.observable(data.catName);
    this.catClicks = ko.observable(data.catClicks);
    this.levels = ['newborn', 'infant', 'teen', 'young adult', 'mature adult', 'old', 'dead'];
    this.catLevel = ko.observable(this.levels[0]);
    this.catImage = ko.observable(data.catImage);
    this.nickNames = ko.observable(data.nickNames);

    this.catClicksHeader = ko.computed(function(){
        return 'The number of clicks is: ' +  this.catClicks();
    }, this);
    this.levelHeader = ko.computed(function(){
        return 'Thie level of cat is: ' + this.catLevel();
    }, this);
};

var ViewModel = function(){
    var self = this;

    this.allCats = ko.observableArray([]);

    catData.forEach(function(s){
        self.allCats.push(new Cat(s));
    });

    this.currentCat = ko.observable(this.allCats()[0]);

    this.onCatClick = function(){
        self.currentCat().catClicks(self.currentCat().catClicks() + 1);

        /* Circles from start to end of levels and back to first level,
         * level increase every 10 clicks.
         */
        self.currentCat().catLevel(self.currentCat().levels[
            Math.floor(self.currentCat().catClicks()/10)
            % self.currentCat().levels.length]);
    }

    this.onCatListClick = function(clickedCat){
        self.currentCat(clickedCat);
    }
}

ko.applyBindings(new ViewModel());