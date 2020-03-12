

var persona = function (codes, id, name, page) {
    var self = this;

    self.name = name;
    self.codes = codes;
    self.id = id;
	self.page = page;
};

var personas = {
    David: new persona(['INTP', 'ISTP', 'INTJ', 'INFJ'], '1.1.1. David; 2.Sophia; 3.William; 4.Laura', 'David Laura, the Innovator', 'http://www.MBA4Heroes.com'),
    Sophia: new persona(['ISTJ', 'ISFJ', 'ENTJ'], '1.1. Sophia; 2.William; 3.Laura; 4.David', 'Sophia David, the Conductor', 'http://www.MBA4Heroes.com'),
    William: new persona(['ESTJ', 'ESTP', 'ESFP', 'ISFP'], 'Result: William.

 

4 Heroes - Profile

 

David, the Innovator. Among so many skills, I distinguish myself by offering solutions to highly complex problems. I can relate knowledge between apparently unrelated areas. Post MBA career plan: Big Tech Companies / Innovative Companies;

 

Sophia, the Strategist. Among so many skills, I distinguish myself by offering solutions to problems that require rigorous analysis. I can interact well in a group. Post MBA career plan: Management Consulting / Strategic Planning in Large Corporations;

 

William, the Doer. Among so many skills, I distinguish myself by being able to combine analysis with implementation. I not only propose solutions, but also press the trigger for execution. Post MBA career plan: Private Equity Fund / Entrepreneurial Companies;

 

Laura, the Mentor. Among so many skills, I distinguish myself by valuing the human element in a group. I can bring people together around one goal. Post MBA career plan: Entrepreneurship (Startup) / Public Private Frontiers.', 'William David, the Implementer', 'http://www.MBA4Heroes.com'),
    Laura: new persona(['ENTP', 'ENFP', 'INFP', 'ENFJ', 'ESFJ'], '1.1. Laura; 2.David; 3.Sophia; 4.William', 'Laura David, the Mentor', 'http://www.MBA4Heroes.com')
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
