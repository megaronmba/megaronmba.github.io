

var persona = function (codes, id, name, page) {
    var self = this;

    self.name = name;
    self.codes = codes;
    self.id = id;
	self.page = page;
};

var personas = {
    David: new persona(['INTP', 'ISTP', 'INTJ', 'INFJ'], 'David', 'David, the Innovator', 'http://www.MBA4Heroes.com'),
    Sophia: new persona(['ISTJ', 'ISFJ', 'ENTJ'], 'Sophia', 'Sophia, the Conductor', 'http://www.MBA4Heroes.com'),
    William: new persona(['ESTJ', 'ESTP', 'ESFP', 'ISFP'], 'William', 'William, the Implementer', 'http://www.MBA4Heroes.com'),
    Laura: new persona(['ENTP', 'ENFP', 'INFP', 'ENFJ', 'ESFJ'], 'Laura', 'Laura, the Mentor', 'http://www.MBA4Heroes.com')
};

var optionTypes = {
    E: "E",
    I: "I",
    S: "S",
    N: "N",
    T: "T",
    F: "F",
    J: "J",
    P: "P"
};

var questionOption = function (text, optionType) {
    var self = this;

    self.text = text;
    self.optionType = optionType;
};

var question = function (text, options) {
    var self = this;

    self.text = text;
    self.options = ko.observableArray(options);
    self.selectedType = ko.observable();

    this.answered = ko.computed(function () {
        return self.selectedType() != null;
    }, self);
};

var psicoTestVM = function () {
    var self = this;
    self.questions = ko.observableArray(questions);

    self.questionIndex = ko.observable(0);

    self.currentQuestion = ko.computed(function () {
	if((self.questionIndex()+1) > self.questions().length){
	     	return self.questions()[self.questionIndex()-1];
	} else {
	        return self.questions()[self.questionIndex()];
	}

    }, self);

    self.nextQuestion = function () {
        if (self.currentQuestion().answered() && (self.questionIndex()+1) <= (self.questions().length)) {
            self.questionIndex(self.questionIndex() + 1);
        }
    }

    self.prevQuestion = function () {
        self.questionIndex(self.questionIndex() - 1);
    }

    self.finished = ko.computed(function () {

        var complete = (self.questionIndex()+1) > self.questions().length;
	//console.log('length ',self.questions().length, 'index ', self.questionIndex(), complete);

        if (complete) {
            console.log(self.result().name);
            //$("#Image" + self.result().id).hide();
            //$("#Image" + self.result().id + "On").show();

            //$("#resultTab a[data-target='#"+self.result().id+"Result']").tab('show');
        }

        return complete;

    }, self);

    self.answersPerType = function (optionType) {
        return ko.utils.arrayFilter(this.questions(), function (question) {
            var selected = question.selectedType();
            return (selected != null && selected == optionType);
        }).length;
    }

    self.result = ko.computed(function () {

        var a = (self.answersPerType(optionTypes.E) > self.answersPerType(optionTypes.I)) ? optionTypes.E : optionTypes.I;
        var b = (self.answersPerType(optionTypes.S) > self.answersPerType(optionTypes.N)) ? optionTypes.S : optionTypes.N;
        var c = (self.answersPerType(optionTypes.T) > self.answersPerType(optionTypes.F)) ? optionTypes.T: optionTypes.F;
        var d = (self.answersPerType(optionTypes.J) > self.answersPerType(optionTypes.P)) ? optionTypes.J : optionTypes.P;

        var personaCode = a + b + c + d;

        var personaList = [personas.David, personas.Sophia, personas.William, personas.Laura];

        var r = ko.utils.arrayFilter(personaList, function (p) {
            var matchs = p.codes.indexOf(personaCode) > -1;
            return matchs;
        })[0];

        return r;

    }, self);

    self.finish = function () {

        while (!self.finished()) {
            var question = self.currentQuestion();
            var type = question.options()[0].optionType;
            question.selectedType(type);
            self.nextQuestion();
        }
    };
};


function startPsicoTest() {
    $("#divTestBegin").hide();
    $("#divPsicoTest").show();

    var psicoVm = new psicoTestVM();
    ko.applyBindings(psicoVm, document.getElementById("divPsicoTest"));
};


$(document).ready(function () {
    $("#divTestBegin").show();
    $("#divPsicoTest").hide();
});

$('#profileTabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
})
